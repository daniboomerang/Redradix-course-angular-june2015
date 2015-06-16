'use strict';

// Module dependencies.
var express = require('express'),
    // FROM Express 4.x middlewares are external dependencies.
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    //-- //
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    errorHandler = require('express-error-handler');
    

var app = express();
module.exports = app;

// configuration ===============================================================

app.use(express.static(path.join(__dirname, 'client')));
app.use(errorHandler());
app.set('views', __dirname + '/client');
app.use(morgan('dev')); // log every request to the console

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// cookieParser should be above session
app.use(cookieParser())

// bodyParser should be above methodOverride
app.use(bodyParser());
app.use(methodOverride());

//routes should be at the last
//app.use(app.router);

//Bootstrap routes
require('./server/config/routes')(app);

// Start server
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});

if (process.platform !== 'win32') {
  //
  // Signal handlers don't work on Windows.
  //
  process.on('SIGINT', function () {
    console.log('http-server stopped.');
    process.exit();
  });
}
