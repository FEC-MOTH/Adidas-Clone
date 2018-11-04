/*
The following 
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
const faker = require("faker");
const { teamNames } = require("./staticDataForMock.js");

const basketballAccessories = require('./data/basketball-accessories');
const basketBallApparel = require('./data/basketball-apparel');
const basketballShoes = require('./data/basketball-shoes');
const footballCleats = require('./data/football-cleats');
const runningAccessories = require('./data/running-accessories');
const runningShoes = require('./data/running-shoes');

const setUpForSampleDataGenerationComplete = false;
const gendersForMock = ["Men", "Women", "Children"];
const colorsForMock = ["Black", "white", "red", "green", "yellow", "blue", "pink", "gray", "brown", "orange", "purple"];
const sportsForMock = ["Basketball", "Football", null, "Soccer", "Original"];
const validProductPriceRange = { min: 50, max: 300 };

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// need - teamNames filtered for 'nfl'
// need -  teamNames filtered for 'mls'
// need - teamNames filtered for 'nba'


const generateImageUrl = (imgId, imgFileName) => `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${imgId}/zoom/${imgFileName}?sh=${64}`


const hoodiePantsBackpackHatDecorator = (product) => {
  const decoratedProduct = product;
  decoratedProduct.sport = null;
  decoratedProduct.team = null;
  let shoeApiData;

  if (decoratedProduct.category === 'Hoodie') {
    basketBallApparel.sort(() => .5 - Math.random())

    for (let i = 0; i < basketBallApparel.length; i += 1) {
      if (basketBallApparel[i].title.match(decoratedProduct.category)) {
        shoeApiData = basketBallApparel[i];
        decoratedProduct.imageUrl = generateImageUrl(shoeApiData.images[0].id, shoeApiData.images[0].fileName);
        break;
      }
    }
  } else if (decoratedProduct.category === 'Pants') {
    basketBallApparel.sort(() => .5 - Math.random())

    for (let i = 0; i < basketBallApparel.length; i += 1) {
      if (basketBallApparel[i].title.match(decoratedProduct.category)) {
        shoeApiData = basketBallApparel[i];
        decoratedProduct.imageUrl = generateImageUrl(shoeApiData.images[0].id, shoeApiData.images[0].fileName);
        break;
      }
    }

  } else if (decoratedProduct.category === 'Backpack') {
    decoratedProduct.imageUrl = `https://loremflickr.com/320/240/${decoratedProduct.category}/all`;
  } else if (decoratedProduct.category === 'Hat') {

    const basketballOrRunningAccessories = [basketballAccessories, runningAccessories][getRandomInt(0, 2)];

    basketballOrRunningAccessories.sort(() => .5 - Math.random())

    for (let i = 0; i < basketballOrRunningAccessories.length; i += 1) {
      if (basketballOrRunningAccessories[i].title.match(decoratedProduct.category)) {
        shoeApiData = basketballOrRunningAccessories[i];
        decoratedProduct.imageUrl = generateImageUrl(shoeApiData.images[0].id, shoeApiData.images[0].fileName);
        break;
      }
    }

  } else if (decoratedProduct.category === 'Sandle') {
    decoratedProduct.imageUrl = `https://loremflickr.com/320/240/${decoratedProduct.category}/all`;
  }

  decoratedProduct.name = `${faker.fake("{{address.city}}")} ${decoratedProduct.category}`;
  return decoratedProduct;
}

const shoeDecorator = (() => {
  let executed = false;
  let nfl; let mls; let nba;

  return (product) => {

    if (!executed) {
      executed = true;
      nfl = teamNames.filter((team) => team.league === "nfl");
      mls = teamNames.filter((team) => team.league === "mls");
      nba = teamNames.filter((team) => team.league === "nba");
    }

    const shoe = product;

    let shoeApiData;
    let imgId;
    let imgFileName;

    if (shoe.category === 'Shoe') {
      shoe.sport = sportsForMock[getRandomInt(0, sportsForMock.length)];
    }

    // TODO CURRENTLY WE ARE FILTERING A GIANT TEAMS ARRAY EVERY TIME THIS IS RUN
    if (shoe.sport === "Football") {
      // const nfl = teamNames.filter((team) => team.league === "nfl");
      shoe.team = nfl[getRandomInt(0, nfl.length)].name;

      shoeApiData = footballCleats[getRandomInt(0, footballCleats.length)];
      imgId = shoeApiData.images[0].id;
      imgFileName = shoeApiData.images[0].fileName;
    } else if (shoe.sport === "Soccer") {
      // const mls = teamNames.filter((team) => team.league === "mls");
      shoe.team = mls[getRandomInt(0, mls.length)].name;

      shoeApiData = footballCleats[getRandomInt(0, footballCleats.length)];
      imgId = shoeApiData.images[0].id;
      imgFileName = shoeApiData.images[0].fileName;
    } else if (shoe.sport === "Basketball") {
      // const nba = teamNames.filter((team) => team.league === "nba");
      shoe.team = nba[getRandomInt(0, nba.length)].name;


      shoeApiData = basketballShoes[getRandomInt(0, basketballShoes.length)];
      imgId = shoeApiData.images[0].id;
      imgFileName = shoeApiData.images[0].fileName;
    } else {
      shoe.team = null;

      shoeApiData = runningShoes[getRandomInt(0, runningShoes.length)];
      imgId = shoeApiData.images[0].id;
      imgFileName = shoeApiData.images[0].fileName;
    }

    shoe.imageUrl = `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${imgId}/zoom/${imgFileName}?sh=${64}`;

    // TODO DRY!
    if (shoe.sport === 'Football' && shoe.team) {
      shoe.name =
        ` ${
        shoe.team
        } ${
        shoe.sport
        } ${
        'Cleat'}`
    }
    else if (shoe.team) {
      shoe.name =
        ` ${
        shoe.team
        } ${
        shoe.sport
        } ${
        shoe.category}`;
    } else {
      shoe.name =
        `${faker.fake("{{name.firstName}}")
        } ${
        faker.fake("{{address.countryCode}}")
        } ${
        shoe.sport
        } ${
        shoe.category}`;
    }

    return shoe;
  }
})();


const generateProduct = (() => {

  let executed = false;

  return (category) => {

    if (!executed) {
      executed = true;
    }

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
    } else if (product.category === 'Hoodie' || product.category === 'Pants' || product.category === 'Backpack' || product.category === 'Hat') {
      product = hoodiePantsBackpackHatDecorator(product);
    }

    return product;
  }
})()

module.exports.generateProduct = generateProduct;