/*

I want to fake the following fields:

We have the following schema:

1 - 10 = basketball shoes
11-20 = football shoes 
21-30 = sandles and slides
31-40 = soccer
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
“Sport” : [Originals, Running, Soccer, Basketball, Football, Skateboarding, Workout, Essentials, Sandals & Slides, Hiking, Golf, Tennis, Baseball]
“Category” - [Shoes, Clothing, Accessories]
“Size” - [] - this is hard because it depends 
“Franchise” - string
“Color” - string - can easily use faker for this
“Partner” - string
“Team” - string
“Brand” - string
"imageUrl" - string

*/

const {genders, sports, teamNames} = require('./staticDataForMock.js');
const validShoePriceRange = {min: 50, max: 300};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const generateBasketballShoe = () => {
  const basketballShoe = {};

  basketballShoe.price = getRandomInt(validShoePriceRange.min, validShoePriceRange.max);
  
  if (getRandomInt(0, 10) <= 3) {
    basketballShoe.salePrice = getRandomInt(validShoePriceRange.min,  basketballShoe.price);
  } else {
    basketballShoe.salePrice = null;
  }

  basketballShoe.gender = genders[getRandomInt(0, genders.length)];

  return basketballShoe;
}