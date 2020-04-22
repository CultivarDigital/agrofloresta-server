var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router(),
  slugify = require('slugify'),
  auth = require('../auth'),
  select = require('../utils').select,
  Like = mongoose.model('Like');

router.get('/:id', function(req, res) {
  query.post = req.params.id
  Like.find(query).populate("user", "picture name").exec(function(err, likes) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(likes);
    }
  });
});

router.post('/', auth.authenticated, function(req, res) {
  var newLike = new Like(req.body);
  newLike.user = req.payload.id
  newLike.save(function(err, like) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.send(like);
    }
  });
});

router.delete('/:id', auth.authenticated, function(req, res) {
  Like.findOne({
    _id: req.params.id
  }).exec(function(err, like) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      console.log(req.payload.id);
      console.log(like);
      if (req.payload.id == like.user) {
        like.remove();
        res.send(like);
      }
    }
  })

});

module.exports = router;
