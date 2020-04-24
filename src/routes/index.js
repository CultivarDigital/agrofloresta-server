var router = require('express').Router();

router.use('/api', require('./api'));

router.get('/.well-known/acme-challenge/Ww7ZEJD5DDj6HszhmcX-YX-os83YXoTLiZBGxbUGh3g', function(req, res) {
  res.send('Ww7ZEJD5DDj6HszhmcX-YX-os83YXoTLiZBGxbUGh3g.B4nxrO1S1B3e7HDu2IusPKp4H-N5oOFGWoTd_E4YLvg');
});

router.get('/painel', function(req, res, next) {
  res.redirect('/#/painel')
});

module.exports = router;
