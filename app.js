var express = require('express');
var path = require('path');
var http = require('http');

var passport = require('passport');

var homeController = require('./controllers/homeController');
var accountController = require('./controllers/accountController');

var passportConfig = require('./config/passport');

//creates express app

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'mustache');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res) {
	res.status(404);
	res.render('404')
})

app.get('/', homeController.index);

//server
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});