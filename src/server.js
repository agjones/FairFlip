// Server setup
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan'); //Logger
var config = require('./server/config/config');

// Server config
app.set('env', 'development');
process.env.NODE_ENV = 'development';
app.use(morgan('dev'));

// Static routes
app.use('/assets', express.static(path.join(__dirname, 'client')));

// bodyParser setup
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

mongoose.connect(config.databaseUrl, function (err) {
    if (err) console.log("DB err: " + err);
    else console.log("Connected to mongodb");
});

// Templating, disabled for now
/* app.set('views', path.join(__dirname, 'client/'));
app.set('view engine', 'jade');
app.locals.pretty = true; */

// Routes
var api = require('./server/routes/api');
var views = require('./server/routes/views');
app.use('/api', api);
app.use('/', views);

// 404 handler
/*app.use(function (req, res, next) {
 var err = new Error("404 - Page Not Found");
 err.status = 404;
 next(err);
 });*/

// Listens
var port = config.port;
var db = config.databaseUrl;
if (config.ip) {
    app.listen(port, config.ip);
} else {
    app.listen(port);
}

console.log('App listening on ' + (config.ip || 'localhost') + ':' + port);
console.log('Database: ' + db);