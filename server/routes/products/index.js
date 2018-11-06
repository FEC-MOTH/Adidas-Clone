const express = require('express');
const sequelize = require('sequelize');
const { Product } = require('../../../database/models');
const { connection } = require('../../../database/index');
const { suggestionQuery } = require('../../../database/utils/autoCompleteSQL');

const router = express.Router();

router.route('/')
  .get((req, res) => { res.send('hello from get!') })

router.route('/search')
  .get((req, res) => {
    /*
   TODO We considered 'singularizing' all queries,
   using the 'pluralize' library so a search for 
   'hats' would result in a query for 'hat'. This is not a good solution
   for a variety of reasons. One of them is that it breaks the search
   suggestions features (when you are search for something plural). It
   also does not handle search for things that should stay plural:
   e.g. 'Memphis Grizzlies'.

   It is also not a great solution do two searches for 'hat' and 'hats',
   bc this doubles query time.

   Solving this issue will be ~~interesting~~
   */
    const query = req.query.q;
    /*
    TODO currently all I have in the way of search optimization is
    that we start looking in more specific categories: name, team,
    and then trickle down to less specific: color, gender. 
    */
    Product.findAll({
      limit: 4,
      where: {
        $or: [
          { name: { $like: `%${query}%` } },
          { team: { $like: `%${query}%` } },
          { sport: { $like: `%${query}%` } },
          { category: { $like: `%${query}%` } },
          { color: { $like: `%${query}%` } },
          { gender: { $like: `${query}%` } }
        ]
      }
    }).then((response) => {
      res.send(response);
    })
  })

router.route('/search/suggestions')
  .get((req, res) => {
    /*
   TODO We considered 'singularizing' all queries, so a search for 
   'hats' would result in a query for 'hat'. This is not a good solution
   for a variety of reasons. One of them is that it breaks the search
   suggestions features (when you are search for something plural). It
   also does not handle search for things that should stay plural:
   e.g. 'Memphis Grizzlies'.

   It is also not a great solution do two searches for 'hat' and 'hats',
   bc this doubles query time.

   Solving this issue will be ~~interesting~~
   */
    const query = req.query.q;

    if (!!query === false) {
      res.send('');
    } else {

      connection.query(suggestionQuery(), { replacements: Array(6).fill(query), type: sequelize.QueryTypes.SELECT })
        .then((responseArray) => {
          if (responseArray.length > 0) {
            const counts = {};
            const keys = Object.keys(responseArray[0]);

            for (let i = 0; i < responseArray.length; i += 1) {
              keys.forEach((key) => {
                if (responseArray[i][key] !== null) {
                  if (counts[responseArray[i][key]]) {
                    counts[responseArray[i][key]] += 1;
                  } else {
                    counts[responseArray[i][key]] = 1;
                  }
                }
              })
            }

            const countsArray = [];

            Object.keys(counts).forEach((key) => {
              countsArray.push({ match: key, count: counts[key] });
            })

            countsArray.sort((aTuple, bTuple) => bTuple.count - aTuple.count)


            res.send(countsArray.slice(0, 10));
          } else {
            res.send(responseArray);
          }
        })
    }
  })

module.exports = router;