var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router(),
  slugify = require('slugify'),
  auth = require('../auth'),
  select = require('../utils').select,
  Comment = mongoose.model('Comment');

router.get('/:id', function(req, res) {
  var query = {}
  if (req.query.type == 'plant') {
    query.plant = req.params.id
  }
  if (req.query.type == 'post') {
    query.post = req.params.id
  }
  if (req.query.type == 'topic') {
    query.topic = req.params.id
  }
  Comment.find(query).populate("user", "picture name").exec(function(err, comments) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(comments);
    }
  });
});

router.post('/', auth.authenticated, function(req, res) {
  var newComment = new Comment(req.body);
  newComment.user = req.payload.id
  newComment.save(function(err, comment) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      Comment.findOne({
        _id: comment._id
      }).populate("user", "name picture").exec(function(err, c) {
        if (err) {
          res.status(422).send('Erro: ' + err.message);
        } else {
          res.send(c);
        }
      })
    }
  });
});

router.delete('/:id', auth.authenticated, function(req, res) {
  Comment.findOne({
    _id: req.params.id
  }).exec(function(err, comment) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      if (req.payload.id == comment.user) {
        comment.remove();
        res.send(comment);
      }
    }
  })

});

module.exports = router;
