var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router(),
  slugify = require('slugify'),
  auth = require('../auth'),
  select = require('../utils').select,
  Plant = mongoose.model('Plant');


router.get('/', function(req, res) {
  var per_page = 10
  var page = req.query.page || 1
  var query = {}
  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: "i" }
  } else {
    if (req.query.cycle) {
      query.cycle = req.query.cycle
    }
    if (req.query.stratum) {
      query.stratum = req.query.stratum
    }    
  }
  Plant.find(query, select(req)).populate("user").sort('name').skip((page - 1) * per_page).limit(per_page).exec(function(err, plants) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(plants);
    }
  });
});

router.get('/slug', function(req, res) {
  Plant.findOne({
    slug: slugify(req.query.name).toLowerCase()
  }).exec(function(err, plant) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(plant);
    }
  });
});

router.get('/:id', function(req, res) {
  Plant.findOne({
    _id: req.params.id
  }).populate("user").exec(function(err, plant) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(plant);
    }
  });
});

router.post('/', auth.authenticated, function(req, res) {
  var newPlant = new Plant(req.body);
  newPlant.slug = slugify(newPlant.name).toLowerCase()
  newPlant.user = req.payload.id
  newPlant.save(function(err, plant) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.send(plant);
    }
  });
});

router.put('/:id', auth.authenticated, function(req, res) {
  var params = req.body
  params.slug = slugify(params.name).toLowerCase()
  Plant.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: params
  }, {
    upsert: true
  }, function(err, plant) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.send(plant);
    }
  });
});

router.delete('/:id', auth.authenticated, function(req, res) {
  Plant.findOne({
    _id: req.params.id
  }).populate('quiz_answers').exec(function(err, plant) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      if (plant.quiz_answers && plant.quiz_answers.length) {
        res.status(422).send('Não é possível excluír! Existem objetos relacionados a este ítem');
      } else {
        plant.remove();
        res.send(plant);
      }
    }
  })

});

module.exports = router;
