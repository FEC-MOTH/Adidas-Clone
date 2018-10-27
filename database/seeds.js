const { Product, Category } = require("./models");
const { generateProduct } = require("../utils/mockData.js");

const categoriesForMock = [
    { "name": "Shoe", "numItemsToGenerate": 200 },
    { "name": "Sandle", "numItemsToGenerate": 25 },
    { "name": "Sweater", "numItemsToGenerate": 25 },
    { "name": "Pants", "numItemsToGenerate": 25 },
    { "name": "Backpack", "numItemsToGenerate": 25 },
    { "name": "Hat", "numItemsToGenerate": 25 }
];

Product.sync({ force: true }).then(() => {
    categoriesForMock.forEach((category) => {
        for (let i = 0; i < category.numItemsToGenerate; i++) {
            var product = generateProduct(category.name);
            Product.create(product);
        }
    })
});

