'use strict';
const express = require('express');
const serverless = require('serverless-http');
const path = require("path");
const app = express();
const morgan = require('morgan');

// eslint-disable-next-line no-undef
app.use(morgan())
app.use('/login', express.static(path.join(__dirname,'../public')));

console.log(path.join(__dirname,'../public'));

app.get('/picture', (req, res) => {

  res.send("This is a picture.")

});

module.exports = app;
module.exports.handler = serverless(app);
