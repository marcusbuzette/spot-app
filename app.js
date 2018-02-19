
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var signup = require('./routes/signup');
var result = require('./routes/result');
var login = require('./routes/login');
var home = require("./routes/home");
var favorites = require("./routes/favorites");
var search = require("./routes/search");
var profile = require("./routes/profile");
var place = require("./routes/place");
var map = require("./routes/map");
var navigation = require("./routes/navigation");
var share = require("./routes/share");

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/result', result.view);
app.get('/signup', signup.view);
app.get('/login', login.view);
app.get('/home', home.view);
app.get('/favorites',favorites.view);
app.get('/search', search.view);
app.get('/profile',profile.view);
app.get('/place/:placeId', place.view);
app.get ('/map',map.view);
app.get('/result_next',result.next);
app.get('/result_search',result.search)
app.get('/navigation',navigation.view);
app.get('/share',share.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
