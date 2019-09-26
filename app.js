const express = require('express');
const morgan = require('morgan');
const layout=require('./views/layout');
const models = require('./models');
const app = express();
const wiki = require('./routes/wiki');
const user = require ('./routes/user');

const { Page } = require("./models");
const mainPage = require('./views/main');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
//app.use("/posts", require("./routes/posts"));
app.get("/", async (req, res, next) => {
  try {
    const allPages = await Page.findAll();
    const returnedPage = mainPage(allPages);
    res.send(returnedPage);
  } catch (error) {
    console.log(error);
  }
  // res.redirect('/wiki');
  // next()
})
app.use("/wiki", wiki);
app.use("/user", user);


const connectToDB = async() => {
  await models.Page.sync({ force: true });
  await models.User.sync({ force: true });
  // await models.db.sync();
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
connectToDB();


