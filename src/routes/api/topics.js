var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router(),
  slugify = require('slugify'),
  auth = require('../auth'),
  select = require('../utils').select,
  Topic = mongoose.model('Topic');

router.get('/', function(req, res) {
  var per_page = 7
  var page = req.query.page || 1
  var query = {}
  if (req.query.search) {
    query.$or = [
      {
        'title': { $regex: req.query.search, $options: "i" }
      },
      {
        'content': { $regex: req.query.search, $options: "i" }
      }
    ]
  }

  Topic.find(query, select(req)).populate("comments").populate("user", "name picture").sort({ createdAt: -1 }).skip((page - 1) * per_page).limit(per_page).exec(function(err, topics) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(topics);
    }
  });
});

router.get('/slug', function(req, res) {
  Topic.findOne({
    slug: slugify(req.query.title).toLowerCase()
  }).exec(function(err, topic) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(topic);
    }
  });
});

router.get('/:id', function(req, res) {
  Topic.findOne({
    _id: req.params.id
  }).populate("user", "name picture").exec(function(err, topic) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(topic);
    }
  });
});

router.post('/', auth.authenticated, function(req, res) {
  console.log(req.body);
  var newTopic = new Topic(req.body);
  newTopic.slug = slugify(newTopic.title).toLowerCase()
  newTopic.user = req.payload.id
  newTopic.save(function(err, topic) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.send(topic);
    }
  });
});

router.put('/:id', auth.authenticated, function(req, res) {
  var params = req.body
  params.slug = slugify(params.title).toLowerCase()
  Topic.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: params
  }, {
    upsert: true
  }, function(err, topic) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.send(topic);
    }
  });
});

router.delete('/:id', auth.authenticated, function(req, res) {
  Topic.findOne({
    _id: req.params.id
  }).exec(function(err, topic) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      topic.remove();
      res.send(topic);
    }
  })

});

module.exports = router;
