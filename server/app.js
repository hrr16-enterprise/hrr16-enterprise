const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const results = require('./routes/results/results.js');

const app = express();

//Static Files - possible need to serve the 'build' folder
app.use('/', express.static(path.resolve(__dirname, '../build/')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Router

app.post('/', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.use('/results', results);
app.use('/*', (req, res) => {
  res.redirect('/');
});

module.exports = app;
