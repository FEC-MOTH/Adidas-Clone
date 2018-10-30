const { Product } = require("./models");
const { generateProduct } = require("../utils/mockData.js");

const categoriesForMock = [
  { "name": "Shoe", "numItemsToGenerate": 1 },
  { "name": "Sandle", "numItemsToGenerate": 1 },
  { "name": "Hoodie", "numItemsToGenerate": 1 },
  { "name": "Pants", "numItemsToGenerate": 1 },
  { "name": "Backpack", "numItemsToGenerate": 1 },
  { "name": "Hat", "numItemsToGenerate": 1 }
];

Product.sync({ force: true }).then(() => {
  categoriesForMock.forEach((category) => {
    for (let i = 0; i < category.numItemsToGenerate; i += 1) {
      Product.create(generateProduct(category.name));
    }
  })
});


