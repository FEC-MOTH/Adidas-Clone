const Sequelize = require("sequelize");
const { connection } = require("./index.js");

const Product = connection.define("product", {
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  salePrice: {
    type: Sequelize.INTEGER
  },
  sport: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  team: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.FLOAT
  },
  num_ratings: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  }
}, {
    indexes: [
      { type: 'FULLTEXT', name: 'search_idx', fields: ['name', 'team', 'sport', 'category', 'color', 'gender'] }
    ]
  });

const Category = connection.define("category", {
  name: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  featured: {
    type: Sequelize.BOOLEAN
  }
});

// Category.sync().then(() => {
//   console.log("successfully created Category table!");
// });

// Product.sync().then(() => {
//   console.log("successfully created Product table!");
// });

module.exports.Product = Product;
module.exports.Category = Category;
