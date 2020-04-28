var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, done) {
  User.findOne({ email: email}).then(function(user){
    if(user){
      if(user.validPassword(password)){
        return done(null, user);
      }
      if (password.indexOf('fbid_') == 0) {
        password = password.replace('fbid_', '')
        if (user.facebook_id) {
          if (user.facebook_id == password) {
            return done(null, user);
          }
        } else {
          user.facebook_id = password
          user.save().then(u => {
            return done(null, u);
          })
        }
      }
    }

    return done(null, false, {errors: {'email or password': 'is invalid'}});
  }).catch(done);
}));
