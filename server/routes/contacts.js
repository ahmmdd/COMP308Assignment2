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

/* Get main contacts page. */
router.get('/', (req, res, next) => {
  // find all contacts in the contacts collection
  contact.find((err, contacts) => {
    if(err){
      return console.error(err);
    } else {
      res.render('contacts/index', {
        title: 'Contacts',
        contacts: contacts
      });
    }
  });
});

/* Get edit - show current contact to edit. */
router.get('/:id', (req, res, next) => {
  
  // Get the reference to the if of the contact to edit
  let id = req.params.id;

  // find all contact to edit by its id
  contact.findById(id, (err, contacts) => {
    if(err){
      console.error(err);
      res.end(error); 
    } else {
      // Show the details view
      res.render('contacts/details', {
        title: 'Game Details',
        contacts: contacts
      });
    }
  });
});

/* Get post - process the contact to edit. */
router.post('/:id', (req, res, next) => {
  
  // Get the reference to the if of the contact to edit
  let id = req.params.id;

  // create a nre contacts object to hold the changes
  let contacts = new contact({
    "_id": id,
    "name": req.body.name,
    "number": req.body.number,
    "email": req.body.email
  });

  contact.update({ _id: id}, contacts, (err) => {
    if(err){
      console.log(err);
      res.end(error);
    }else{
      //refresh the contacts list
      res.redirect('/contacts');
    }
  });

});


module.exports = router;