const express = require('express');
const router=express.Router();
const { addPage }=require('../views');
const { Page } = require("../models");
const { User } = require('../models');
const wikiPage = require ("../views/wikipage");

router.get("/", async (req, res) => {
    // const allPages = await Page.findAll();
    // const returnedPage = mainPage(allPages);
    // res.send(returnedPage);
})

router.post('/', async (req, res, next) => {
  // find if author exists in user
  const foundUser = await User.findOne({
    where :
      { name: req.params.name }
    });
    console.log(foundUser);
    let userID = 0;
  if (foundUser) {
    userID = foundUser.dataValues.id;
  } else {
    //if it does not exist
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });
      //then add create new user in user database
    try {
      await user.save();
      //get that new userid
      //add to authorid below
      const findLastUser = await User.findOne({
        where: { name: req.body.name }
      })
      userID = findLastUser.id;
    } catch (error) { next(error) }
  }
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    authorid: userID
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

