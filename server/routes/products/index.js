const express = require('express');
const { Product } = require('../../../database/models');

const router = express.Router();

router.route('/')
  .get((req, res) => { res.send('hello from get!') })

router.route('/search')
  .get((req, res) => {
    const query = req.query.q;
    /*
    TODO currently all I have in the way of search optimization is
    that we start looking in more specific categories: name, team,
    and then trickle down to less specific: color, gender. 
    */
    Product.findAll({
      limit: 10,
      where: {
        $or: [
          { name: { $like: '%' + query + '%' } },
          { team: { $like: '%' + query + '%' } },
          { sport: { $like: '%' + query + '%' } },
          { category: { $like: '%' + query + '%' } },
          { color: { $like: '%' + query + '%' } },
          { gender: { $like: query + '%' } }
        ]
      }
    }).then((response) => {
      res.send(response);
    })
  })

router.route('/search/suggestions')
  .get((req, res) => {
    const query = req.query.q;
    /*
    TODO currently all I have in the way of search optimization is
    that we start looking in more specific categories: name, team,
    and then trickle down to less specific: color, gender. 
    */
    Product.findAll({
      limit: 10,
      where: {
        $or: [
          { sport: { $like: '%' + query + '%' } }
        ]
      },
      attributes: ['sport']
    }).then((responseArray) => {
      // TODO - This is bad. Currently an autocomplete search for "ball"
      // will return 10 results, 7 of which are "football". This is because
      // all fields are simply stored as strings with no notion of relation
      // where a substring matches, select the matching field
      // count the number of fields that match

      // right now I am returning a big object, which I am sorting using javascript
      // this could be made much more efficient with a carefully constructed SQL query

      const counts = {};

      const possibleAttributes = ['name', 'team', 'sport', 'category', 'color', 'gender'];
      // create an array of all of the keys in the response
      for (let i = 0; i < responseArray.length; i++) {

        for (let j = 0; j < possibleAttributes.length; j++) {
          if (responseArray[i][possibleAttributes[j]] === undefined) {
            continue;
          }
          if (counts[responseArray[i][possibleAttributes[j]]] === undefined) {
            counts[responseArray[i][possibleAttributes[j]]] = 1;
          } else {
            counts[responseArray[i][possibleAttributes[j]]] += 1;
          }
        }
      }
      res.send(counts);
    })
  })


module.exports = router;