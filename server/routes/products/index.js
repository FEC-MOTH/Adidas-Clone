const express = require('express');
const sequelize = require('sequelize');
const { Product } = require('../../../database/models');
const { connection } = require('../../../database/index');
const { sqlQuery } = require('../../../database/utils/autoCompleteSQL');

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
      console.log('here is the search reponse', response)
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

    SELECT Count(*) FROM name, team, spot, category, color, gender
      WHERE name || team || sport || category || color || gender like query
  */
    if (!!query === false) {
      res.send('');
    } else {

      connection.query(sqlQuery(query), { type: sequelize.QueryTypes.SELECT })
        .then((responseArray) => {

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
        })
    }
  })

module.exports = router;