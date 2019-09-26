const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');



const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false

  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

Page.beforeValidate(function (page) {
  // Removes all non-alphanumeric characters from title
  // And make whitespace underscore
  console.log(page);
  console.log(page.title);
  if (!page.slug) {
    page.slug = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your name',
      }
  }
}
,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail:true,
      notNull: {
        msg: 'Please enter your email',

      }
  }
}});

module.exports = { Page, User };
