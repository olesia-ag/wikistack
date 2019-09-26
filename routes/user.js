const express = require('express');
const router=express.Router();

router.get('/', (req, res) => {
  res.send('<h1>get all uses, do not change the db</h1>');
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
