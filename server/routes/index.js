/**
 * File Name: index.js
 * Author: Mohammed Juned Ahmed
 * Website Name: https://comp308-assignment2.herokuapp.com/
 * File Description:
 */

// import the express object
let express = require('express');
// create the router for the application
let router = express.Router();
let mongoose = require('mongoose');

// create the contact object - represents a document in the games coollection
let contact = require('../models/contacts');

//++++++++++++++++++++++++++++ Five Page Templates +++++++++++++++++++++++++++++++++++
/* 1. GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', {
    title: 'Services',
    name: 'Mohammed Juned Ahmed' 
  });
});

/* 2. GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', { 
    title: 'Projects',
    name: 'Mohammed Juned Ahmed' 
  });
});

/* 3. GET contact me page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', { 
    title: 'Contact Me', 
    name: 'Mohammed Juned Ahmed' 
  });
});

/* 4. GET about me page. */
router.get('/about', (req, res, next) => {
  res.render('content/about', { 
    title: 'About Me',
    name: 'Mohammed Juned Ahmed' 
  });
});

/* 5. GET home page. */
router.get('/', (req, res, next) => {
  res.render('content/index', { 
    title: 'Home',
    name: 'Mohammed Juned Ahmed' 
  });
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 6. Business Contact List */
router.get('/contactlist', (req, res, next) => {
  // find all contacts in the contacts collection
  contact.find((err, contacts) => {
    if(err){
      return console.error(err);
    } else {
      res.render('content/contactlist', {
        title: 'Contact List',
        contacts: contacts
      });
    }
  });
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = router;
