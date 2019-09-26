const express = require('express');
const morgan = require('morgan');
const layout=require('./views/layout');
const models = require('./models');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
//app.use("/posts", require("./routes/posts"));
app.get("/", (req, res) => {
  res.send(layout(''));
})

const connectToDB = async() => {
  await models.Page.sync();
  await models.User.sync();

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
connectToDB();


