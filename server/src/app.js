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

// mongodb+srv://admin:Sy9Ap3Y32q6UKqt@cluster0.zac1n.mongodb.net/fincapcapstone?retryWrites=true&w=majority