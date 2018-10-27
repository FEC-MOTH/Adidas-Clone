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
          {name: { $like: '%' + query + '%'}},
          {team: { $like: '%' + query + '%'}},
          {sport: { $like: '%' + query + '%'}},
          {category: { $like: '%' + query + '%'}},
          {color: { $like: '%' + query + '%'}},
          {gender: { $like: query + '%'}}
        ]
      }
    }).then((response) => {
      res.send(response);
    })
   })

router.route('/search/suggestions')
  .get((req, res) => { res.send('hello from product search suggestion!') })


module.exports = router;