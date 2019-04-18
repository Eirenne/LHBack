const createError = require('http-errors');
const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const environment = process.env.NODE_ENV; 

import routes from './modules/index.routes'

const app = express();



require('dotenv').config();


app.get('/', function(req, res, next) {
  res.send("OK")
});

let mongoose = require('./db/db')()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

if (environment !== 'production') {
  app.use(logger('dev'));
}

app.use(cors({
  credentials: true,
  origin: function(origin, callback){
    return callback(null, true);
  }}));
app.use('/api/v1', routes);

app.use(function(req, res, next) {
  next(createError(404));
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;