/**
 * File Name: index.js
 * Author: Mohammed Juned Ahmed
 * Website Name: https://comp308-assignment2.herokuapp.com/
 * File Description:
 */

/* modules required for routing */
// import the express object
let express = require('express');
// create the router for the application
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// define the user model
let UserModel = require('../models/users');
let User = UserModel.User; // alias for User

// create the contact object - represents a document in the games coollection
let contact = require('../models/contacts');

// function to check if the user is authenticated
function requireAuth(req, res, next) {
  // check if the user is logged index
  if(!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

/*++++++++++++++++++++++++++++ Five Page Templates ++++++++++++++++++++++++++*/
/* 1. GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', {
    title: 'Services',
    name: 'Mohammed Juned Ahmed' ,
    displayName: req.user ? req.user.displayName : ''
  });
});

/* 2. GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', { 
    title: 'Projects',
    name: 'Mohammed Juned Ahmed' ,
    displayName: req.user ? req.user.displayName : ''
  });
});

/* 3. GET contact me page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', { 
    title: 'Contact Me', 
    name: 'Mohammed Juned Ahmed' ,
    displayName: req.user ? req.user.displayName : ''
  });
});

/* 4. GET about me page. */
router.get('/about', (req, res, next) => {
  res.render('content/about', { 
    title: 'About Me',
    name: 'Mohammed Juned Ahmed' ,
    displayName: req.user ? req.user.displayName : ''
  });
});

/* 5. GET home page. */
router.get('/', (req, res, next) => {
  res.render('content/index', { 
    title: 'Home',
    name: 'Mohammed Juned Ahmed' ,
    displayName: req.user ? req.user.displayName : ''
  });
});

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++ Login Templates ++++++++++++++++++++++++++*/
/* GET /login - render the login view */
router.get('/login', (req, res, next) => {
  // check to see if the user is already logged in
  if(!req.user){
    // render the login page
    res.render('auth/login', {
      title: 'Login',
      contacts: '',
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
  } else {
    // redirect to contact list
    return res.redirect('/contacts');
  }
});

/* POST /login  */
router.post('/login', passport.authenticate('local',{
  successRedirect: '/contatcs',
  failureRedirect: '/login',
  failureflash: true
}));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

module.exports = router;
