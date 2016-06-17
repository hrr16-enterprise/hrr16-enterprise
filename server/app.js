var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

var app = express();

//Static Files - possible need to serve the 'build' folder
app.use('/', express.static(path.resolve(__dirname, '../client/')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Router
app.use('/*', function (req, res) {
  res.redirect('/');
});

module.exports = app;
