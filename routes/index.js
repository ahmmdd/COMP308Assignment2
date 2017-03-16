/**
 * File Name: index.js
 * Author: Mohammed Juned Ahmed
 * Website Name: https://comp308-assignment2.herokuapp.com/
 * File Description:
 */

var express = require('express');
var router = express.Router();
//++++++++++++++++++++++++++++ Templates +++++++++++++++++++++++++++++++++++
/* 1. GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', { title: 'Services', 
                        name: 'Mohammed Juned Ahmed' });
});

/* 2. GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', { title: 'Projects', 
                        name: 'Mohammed Juned Ahmed' });
});

/* 3. GET contact me page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', { title: 'Contact Me', 
                        name: 'Mohammed Juned Ahmed' });
});

/* 4. GET about me page. */
router.get('/about', (req, res, next) => {
  res.render('content/about', { title: 'About Me', 
                        name: 'Mohammed Juned Ahmed' });
});

/* 5. GET home page. */
router.get('/', (req, res, next) => {
  res.render('content/index', { title: 'Home', 
                        name: 'Mohammed Juned Ahmed' });
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = router;
