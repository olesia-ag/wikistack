const express = require('express');
const router=express.Router();
const { addPage }=require('../views');
const { Page } = require("../models");

router.get("/", (req, res) => {
  res.send('got to all wiki pages');
})

router.post('/', async (req, res, next) => {

  let newSlug = Page.generateSlug(req.body.title);
  // newSlug.replace(/\s+/g, '_').replace(/\W/g, '');

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    slug: newSlug
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get("/add", (req,res)=>{
  res.send(addPage());
})
module.exports = router;

