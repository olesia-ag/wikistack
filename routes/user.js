const express = require('express');
const router=express.Router();

router.get("/", (req,res)=>{
  res.send('got to all wiki pages');
})
router.post("/", (rew,res)=>{
  res.send('submit a new page to database');
})
router.get("/add", (req,res)=>{
  res.send('go to add page');
})

module.exports = router;
