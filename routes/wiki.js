const express = require('express');
const router=express.Router();
const addPage=require('../views/addPage');

router.get("/", (req,res)=>{
  res.send('got to all wiki pages');
})
router.post("/", (rew,res)=>{
  res.send('submit a new page to database');
})
router.get("/add", (req,res)=>{
  res.send(addPage());
})
module.exports = router;

