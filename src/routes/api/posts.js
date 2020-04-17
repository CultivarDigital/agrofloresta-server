var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router(),
  slugify = require('slugify'),
  auth = require('../auth'),
  select = require('../utils').select,
  Post = mongoose.model('Post');

router.get('/', function(req, res) {
  Post.find({}, select(req)).populate("user").exec(function(err, posts) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(posts);
    }
  });
});

router.get('/slug', function(req, res) {
  Post.findOne({
    slug: slugify(req.query.name).toLowerCase()
  }).exec(function(err, post) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(post);
    }
  });
});

router.get('/:id', function(req, res) {
  Post.findOne({
    _id: req.params.id
  }).populate("user").exec(function(err, post) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(post);
    }
  });
});

router.post('/', auth.authenticated, function(req, res) {
  var newPlant = new Post(req.body);
  newPlant.slug = slugify(newPlant.name).toLowerCase()
  newPlant.user = req.payload.id
  newPlant.save(function(err, post) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.send(post);
    }
  });
});

router.put('/:id', auth.authenticated, function(req, res) {
  var params = req.body
  params.slug = slugify(params.name).toLowerCase()
  Post.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: params
  }, {
    upsert: true
  }, function(err, post) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.send(post);
    }
  });
});

router.delete('/:id', auth.authenticated, function(req, res) {
  Post.findOne({
    _id: req.params.id
  }).exec(function(err, post) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      post.remove();
      res.send(post);
    }
  })

});

module.exports = router;
