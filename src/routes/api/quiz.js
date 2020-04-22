var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router(),
  slugify = require('slugify'),
  auth = require('../auth'),
  select = require('../utils').select,
  QuizAnswer = mongoose.model('QuizAnswer'),
  Plant = mongoose.model('Plant');

router.get('/question', function(req, res) {
  Plant.count().exec(function(err, count) {
    var random = Math.floor(Math.random() * count)
    Plant.findOne().skip(random).exec((err, plant) => {
      if (err) {
        res.status(422).send('Erro: ' + err.message);
      } else {
        let empty_fields = [ 'stratum', 'cycle' ]
        let empty_field = empty_fields[Math.floor(Math.random()*empty_fields.length)]
        res.json({ field: empty_field, plant: plant});
      }
    })
  })
});

router.post('/answer', auth.authenticated, function(req, res) {
  var newQuizAnswer = new QuizAnswer(req.body);
  newQuizAnswer.user = req.payload.id
  newQuizAnswer.save(function(err, quiz_answer) {
    if (err) {
      res.status(422).send('Erro: ' + err.message);
    } else {
      res.send(quiz_answer);
    }
  });
});

module.exports = router;
