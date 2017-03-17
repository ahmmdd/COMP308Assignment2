/**
 * File Name: contacts.js
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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Business Contact List */
router.get('/', (req, res, next) => {
  // find all contacts in the contacts collection
  contact.find((err, contacts) => {
    if(err){
      return console.error(err);
    } else {
      res.render('content/contactlist', {
        title: 'Contacts',
        contacts: contacts
      });
    }
  });
});
/* */

/* */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
module.exports = router;