const express = require('express');
const router=express.Router();
const { User } = require('../models');

router.get('/', (req, res) => {
  // try {
  //   const allUsers = await User.findAll();
  //   const returnedUsers = mainPage(allPages);
  //   res.send(returnedPage);
  // } catch (error) {
  //   console.log(error);
  // }
  // res.redirect('/wiki');
  // next()
})

router.get('/:id', (req, res) => {
  res.send('get user by user id');
})

router.post('/', (req, res) => {
  res.send('create a user in the db');
})

router.put('/:id', (req, res) => {
  res.send('updates user by id in the db');
})

router.delete('/:id', (req, res) => {
  res.send('deletes user by id from the db');
})



module.exports = router;
