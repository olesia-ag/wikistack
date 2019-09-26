const express = require('express');
const router=express.Router();
const { addPage }=require('../views');
const { Page } = require("../models");
const wikiPage = require ("../views/wikipage");

router.get("/", (req, res) => {
  res.send('got to all wiki pages');
})

router.post('/', async (req, res, next) => {



  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    //slug: maybe later?????
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) }
});

router.get("/add", (req, res)=>{
  res.send(addPage());
})


router.get('/:slug', async (req, res, next) => {
  const foundSlug= await Page.findOne({
    where: {slug: req.params.slug}
  })
  const returnedPage = wikiPage(foundSlug);
  res.send(returnedPage);
});

module.exports = router;

