var express = require('express');
var path = require('path');
var http = require('http');

var passport = require('passport');
var request = require('request');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(express);
var expressValidator = require('express-validator');

var accountController = require('./controllers/accountController');

var passportConfig = require('./config/passport');
var secrets = require('./config/secrets');

//creates express app

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);

app.use(express.bodyParser()); 
app.use(express.favicon());
app.use(express.logger('dev'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.json());
app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

/*
mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
  console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.');
});
*/

app.get('/', function(req, res) {
	res.render('home.html', {title: 'home'});
});
app.get('/search', function(req, res) {
	res.render('search.html', {title: 'search'});
});
app.get('/course', function(req, res) {
	res.render('course.html', {title: 'course'});
});

app.get('/venmo/login', function(req, res) {
	res.redirect("https://api.venmo.com/v1/oauth/authorize?client_id=1641&scope=make_payments%20access_profile%20access_email%20access_phone%20access_balance&response_type=code");
});
app.get('/auth/venmo/callback', function(req, res) {
	res.redirect("https://api.venmo.com/v1/oauth/authorize?client_id=1641&scope=make_payments%20access_profile%20access_email%20access_phone%20access_balance&response_type=code");
	console.log(req.query.code);
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}

//server
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});