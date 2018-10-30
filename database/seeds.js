const { Product } = require("./models");
const { generateProduct } = require("../utils/mockData.js");

const categoriesForMock = [
  { "name": "Shoe", "numItemsToGenerate": 300 },
  { "name": "Sandle", "numItemsToGenerate": 25 },
  { "name": "Hoodie", "numItemsToGenerate": 25 },
  { "name": "Pants", "numItemsToGenerate": 25 },
  { "name": "Backpack", "numItemsToGenerate": 25 },
  { "name": "Hat", "numItemsToGenerate": 25 }
];

Product.sync({ force: true }).then(() => {
  categoriesForMock.forEach((category) => {
    for (let i = 0; i < category.numItemsToGenerate; i += 1) {
      Product.create(generateProduct(category.name));
    }
  })
});

