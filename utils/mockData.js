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


“Name” - string
“Price” - int
“salePrice” - int
“Gender” - [Men, Women, Children]
"Sport" - [Basketball, Football, null, Soccer, Original];
“Category” - [Shoes, Sandles and Slides, Hoodies and Sweater, Pants, Bags and Backpacks, Hats and Beanies]
“Category” - [Shoes, Sandles and Slides, Hoodies and Sweater, Pants, Bags and Backpacks, Hats and Beanies]
“Size” - [] - this is hard because it depends 
“Franchise” - string
“Color” - string - can easily use faker for this
“Partner” - string
“Team” - string
“Brand” - string
"imageUrl" - string
*/

const { genders, sports, teamNames } = require("./staticDataForMock.js");
const validShoePriceRange = { min: 50, max: 300 };
const rpos = require("random-part-of-speech");
const faker = require("faker");

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const generateShoe = sport => {
  const basketballShoe = {};

  basketballShoe.sport = sport;

  if (basketballShoe.sport === "Football") {
    // TODO separate teams !
  } else if (basketballShoe.sport === "Soccer") {
  } else if (basketballShoe.sport === "Football") {
  } else {
    basketballShoe.team = null;
  }

  basketballShoe.category = "Shoe";

  basketballShoe.price = getRandomInt(
    validShoePriceRange.min,
    validShoePriceRange.max
  );

  if (getRandomInt(0, 10) <= 3) {
    basketballShoe.salePrice = getRandomInt(
      validShoePriceRange.min,
      basketballShoe.price
    );
  } else {
    basketballShoe.salePrice = null;
  }

  basketballShoe.gender = genders[getRandomInt(0, genders.length)];

  basketballShoe.color = faker.fake("{{commerce.color}}");

  basketballShoe.name =
    faker.fake("{{name.firstName}}") +
    " " +
    faker.fake("{{address.countryCode}}") +
    " " +
    basketballShoe.sport +
    " " +
    basketballShoe.category;

  basketballShoe.imageUrl = `https://loremflickr.com/320/240/${
    basketballShoe.sport
  },${basketballShoe.category},${basketballShoe.color.split(" ")[0]}/all`;

  return basketballShoe;
};

console.log(generateShoe("Football"));
