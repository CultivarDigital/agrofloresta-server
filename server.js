var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');

var isProduction = process.env.NODE_ENV === 'production';

// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/dist'));
app.use('/uploads', express.static(__dirname + '/uploads'));


app.use(session({ secret: 'agrofloresta', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if (!isProduction) {
  app.use(errorhandler());
}

if(isProduction){
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://localhost/agrofloresta', { useNewUrlParser: true });
  mongoose.set('debug', true);
}

require('./src/models/User');
require('./src/models/Organization');
require('./src/models/Product');
require('./src/models/Offer');
require('./src/models/Order');
require('./src/models/Message');
require('./src/models/Plant');
require('./src/models/QuizAnswer');
require('./src/models/Topic');
require('./src/models/Post');
require('./src/models/Guide');

require('./src/config/passport');

app.use(require('./src/routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res) {
    // eslint-disable-next-line no-console
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 3000, function(){
  // eslint-disable-next-line no-console
  console.log('Listening on port ' + server.address().port);
});
