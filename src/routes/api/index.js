var router = require('express').Router();

router.use('/', require('./users'));
router.use('/uploads', require('./uploads'));
router.use('/plants', require('./plants'));
router.use('/posts', require('./posts'));
router.use('/topics', require('./topics'));
router.use('/comments', require('./comments'));
router.use('/likes', require('./likes'));
router.use('/quiz', require('./quiz'));

router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;
        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;
