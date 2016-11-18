// Inicialization
var express = require('express');
var app = express(); // We use express
var mongoose = require('mongoose'); // mongoose for mongodb


var path = require('path');
var http = require('http');

var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');



// Configuration
mongoose.connect('mongodb://localhost:27017/Project_codeL'); // We make the connection to the Mongo database named "Project-codeL"

  app.use(express.static(path.join(__dirname, '/angular')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(methodOverride());

// Load the endpoints
require('./app/routes.js')(app);

// choose listen port
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

var server = http.createServer(app);
app.listen(3000, function () {
  console.log('listening on port 3000');
});