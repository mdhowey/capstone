const express = require('express');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv');
const app = express();

const logger = (rez, res, next) => {
  console.log('Logger');
}

app.use(logger);

dbConnect();

module.exports = app;