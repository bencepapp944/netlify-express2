'use strict';
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  
 

  res.send('<h1>Hello World!</h1>');

});

app.get('/picture', (req, res) => {

  res.send("This is a picture.")

});

app.post('/', (req, res) => res.json({ postBody: req.body }));

module.exports = app;
module.exports.handler = serverless(app);
