var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router(),
  slugify = require('slugify'),
  auth = require('../auth'),
  select = require('../utils').select,
  Post = mongoose.model('Post');

router.get('/', function(req, res) {
  var per_page = 10
  var page = req.query.page || 1
  var query = {}
  var sort = { createdAt: -1 }

  if (req.query.user) {
    query.user = req.query.user
  }
  if (req.query.search) {
    query.$or = [
      {
        'title': { $regex: req.query.search, $options: "i" }
      },
      {
        'content': { $regex: req.query.search, $options: "i" }
      }
    ]
  } else {
    if (req.query.category) {
      query.category = req.query.category
      if (query.category == 'event') {
        sort = { start_time: -1 }
      } else {
        sort = { title: 1 }
      }
    }
    if (req.query.tags) {
      query.tags = req.query.tags
    }
  }
  Post.find(query, select(req)).populate("user", "name picture").populate("likes", "user").populate("comments").sort(sort).skip((page - 1) * per_page).limit(per_page).exec(function(err, posts) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(posts);
    }
  });

});

router.get('/tags', function(req, res) {
  Post.find({}).select("tags").exec(function(err, posts) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      var tags = {}
      posts.forEach(post => {
        if (post.tags) {
          post.tags.forEach(tag => {
            tags[tag] = true
          })
        }
      })
      res.json(Object.keys(tags).sort());
    }
  });
});

router.get('/:id', function(req, res) {
  Post.findOne({
    _id: req.params.id
  }).populate("user", "name picture").populate("likes", "user").populate("comments").exec(function(err, post) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.json(post);
    }
  });
});


router.post('/', auth.authenticated, function(req, res) {
  var newPost = new Post(req.body);
  newPost.slug = slugify(newPost.title).toLowerCase()
  newPost.user = req.payload.id
  newPost.save(function(err, post) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.send(post);
    }
  });
});

router.put('/:id', auth.authenticated, function(req, res) {
  var params = req.body
  params.slug = slugify(params.title).toLowerCase()
  params.user = req.payload.id
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
