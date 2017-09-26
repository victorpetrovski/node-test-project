
// Root path
global.APP_ROOT_PATH = __dirname + '/';

// Set other app paths
require('./config/global-paths');
// Set config variables
global.config = require('./config/index');

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

var app = express();


// Load mongoose package
var mongoose = require('mongoose');

// view engine setup
app.set('json spaces',2);
app.use('/apidoc',express.static('doc'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Connect to MongoDB and create/use database called todoAppTest
mongoose.Promise = global.Promise;
mongoose.connect(config.db.MONGO_CONNECT_URL,{
    useMongoClient: true
});
//setup routes
const routes = require(APP_ROUTE_PATH);
app.get('/*', passport.authenticate('bearer', { session: false }));
app.use('/', routes);


passport.use(new Strategy(function (token,done) {
    return cb("Unauthorized!",null);
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});


app.listen(config.server.PORT, function () {
    console.log('App is running on ' +config.server.PORT);
});