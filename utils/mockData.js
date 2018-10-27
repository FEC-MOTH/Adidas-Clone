/*

I want to fake the following fields:

We have the following schema:

1 - 10 = basketball shoes
11-20 = football shoes 
21-30 = sandles and slides
31-40 = soccer shoes
41-50 = original shoes
51-60 = hoodies and sweater
61-70 = running shoes
71-80 = pants
81-90 = bags and backpacks
91-100 = hats and beanies

I want to fake the following fields:


“name” - string
“price” - int
“salePrice” - int
"sport" - [Basketball, Football, null, Soccer, Original];
“color” - string - can easily use faker for this
“team” - string
"rating" - Float
"num_ratings" - integer
"imageUrl" - string
"gender" - string [Men, Women, Children]
"category" - string [Shoes, Sandles and Slides, Hoodies and Sweater, Pants, Bags and Backpacks, Hats and Beanies]
*/


const validProductPriceRange = { min: 50, max: 300 };
const faker = require("faker");
const { teamNames } = require("./staticDataForMock.js");

const gendersForMock = ["Men", "Women", "Children"];
const colorsForMock = ["Black", "white", "red", "green", "yellow", "blue", "pink", "gray", "brown", "orange", "purple"];
const sportsForMock = ["Basketball", "Football", null, "Soccer", "Original"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


const sweaterPantsBackpackHatDecorator = (product) => {

  product.sport = null;
  product.team = null;
  product.imageUrl = `https://loremflickr.com/320/240/${product.category},${product.color}/all`;
  product.name = `${faker.fake("{{address.city}}")} ${product.category}`;
  return product;
}

const shoeDecorator = (product) => {

  if (product.category === 'Shoe') {
    product.sport = sportsForMock[getRandomInt(0, sportsForMock.length)];
  }

  // TODO CURRENTLY WE ARE FILTERING A GIANT TEAMS ARRAY EVERY TIME THIS IS RUN
  if (product.sport === "Football") {
    var nfl = teamNames.filter((team) => team.league === "nfl");
    product.team = nfl[getRandomInt(0, nfl.length)].name;
  } else if (product.sport === "Soccer") {
    var mls = teamNames.filter((team) => team.league === "mls");
    product.team = mls[getRandomInt(0, mls.length)].name;
  } else if (product.sport === "Basketball") {
    var nba = teamNames.filter((team) => team.league === "nba");
    product.team = nba[getRandomInt(0, nba.length)].name;
  } else {
    product.team = null;
  }

  // TODO DRY!
  if (product.team) {
    product.name =
      ` ${
      product.team
      } ${
      product.sport
      } ${
      product.category}`;

    product.imageUrl = `https://loremflickr.com/320/240/${
      product.team
      },${product.category},${product.color}/all`;
  } else {
    product.name =
      `${faker.fake("{{name.firstName}}")
      } ${
      faker.fake("{{address.countryCode}}")
      } ${
      product.sport
      } ${
      product.category}`;

    product.imageUrl = `https://loremflickr.com/320/240/${
      product.team
      },${product.category},${product.color}/all`;
  }

  return product;
};

const generateProduct = (category) => {
  let product = {};

  product.category = category;

  product.price = getRandomInt(
    validProductPriceRange.min,
    validProductPriceRange.max
  );

  // Add a sale price based on actual price 1/3 of the time
  if (getRandomInt(0, 10) <= 3) {
    product.salePrice = getRandomInt(
      validProductPriceRange.min,
      product.price
    );
  } else {
    product.salePrice = null;
  }

  product.color = colorsForMock[getRandomInt(0, colorsForMock.length)];

  // the random int generator is exclusive of the max (which is why we make max 6 here)
  // TODO - ratings should have non-integer values
  // TODO - come up with a distribution of ratings so there are more 4 and 5
  product.rating = getRandomInt(0, 6);

  product.num_ratings = getRandomInt(10, 500);

  product.gender = gendersForMock[getRandomInt(0, gendersForMock.length)];

  if (product.category === 'Shoe' || product.category === 'Sandle') {
    product = shoeDecorator(product);
  } else if (product.category == 'Sweater' || product.category === 'Pants' || product.category === 'Backpack' || product.category === 'Hat') {
    prouduct = sweaterPantsBackpackHatDecorator(product);
  }

  return product;
}

module.exports.generateProduct = generateProduct;