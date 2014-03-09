var express = require('express');
var path = require('path');
var http = require('http');

var passport = require('passport');

var homeController = require('./controllers/homeController');
var accountController = require('./controllers/accountController');

var passportConfig = require('./config/passport');
var secrets = require('./config/secrets');

//creates express app

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
  console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.');
});

app.get('/', homeController.index);
app.get('/auth/venmo', passport.authorize('venmo', { scope: 'make_payments access_profile access_balance access_email access_phone' }));
app.get('/auth/venmo/callback', passport.authorize('venmo', { failureRedirect: '/' }), function(req, res) {
  res.redirect('/');
});

//server
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});