/**
 * File Name: app.js
 * Author: Mohammed Juned Ahmed
 * Website Name: https://comp308-assignment2.herokuapp.com/
 * File Description: The Express server configuration file that load up first.
 */

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

// import the mongoose NPM module
let mongoose = require("mongoose");

// import the config module
let config = require('./config/db');

//connect to Mongo db using the URI
mongoose.connect(config.URI);

// create a db object and make a reference to the connection
let db = mongoose.connection;

// Listern for a sucessful connection
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => {
    console.log("Connected to MongoDB...");
});


let index = require('./routes/index');
let about = require('./routes/index');
let contact = require('./routes/index');
let contacts = require('./routes/index');
let projects = require('./routes/index');
let services = require('./routes/index');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /client
//app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', index);
app.use('/about', about);
app.use('/contact', contact);
app.use('/contacts', contact);
app.use('/services', services);
app.use('/projects', projects);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// used to return application module
module.exports = app;
