const express = require('express');
const morgan = require('morgan');
const layout=require('./views/layout');
const models = require('./models');
const app = express();
const wiki = require('./routes/wiki');
const user = require ('./routes/user');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
//app.use("/posts", require("./routes/posts"));
app.get("/", (req, res) => {
  res.send(layout(''));
})
app.use("/wiki", wiki);
app.use("/user", user);


const connectToDB = async() => {
  await models.Page.sync();
  await models.User.sync();
  // await models.db.sync();
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
connectToDB();


