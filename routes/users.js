'user strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../knex');

router.get('/users', (req, res, next) => {
  res.send('HI');
});

router.post('/users', (req, res, next) => {
//  console.log('This is req', req.body)
  console.log('first')
  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users')
      .where('email', req.body.email)
        .then((email) => {
        if (email[0]) {
          res.set('Content-type', 'text/plain');
          return res.status(400).send('Email already exists');
        }
        return email;
      })
      console.log('HI')
      .then((user) => {
        return knex('users')
          .insert({
            username: req.body.username,
            email: req.body.email,
            hashed_password: hashed_password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            telephone: req.body.telephone,
            street_address: req.body.street_address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
          }, '*')
      })
      .then((users) => {
        const userInfo = users[0];
        delete userInfo.hashed_password;
        delete userInfo.created_at;
        delete userInfo.updated_at;
        
        const user = {
          username: userInfo.username,
          email: userInfo.email,
          first_name: userInfo.first_name,
          last_name: userInfo.last_name,
          telephone: userInfo.telephone,
          street_address: userInfo.street_address,
          city: userInfo.city,
          state: userInfo.state,
          zip: userInfo.zip
        }
        console.log(user)
        res.status(200).send(user);
      })
      .catch((err) => {
        next(err);
      })
  })
});

module.exports = router;