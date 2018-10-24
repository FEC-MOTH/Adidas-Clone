const { Product } = require('../../../database/models');
const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {res.send('hello from get!')})

router.route('/search/:query')
  .get((req, res) => {res.send('hello from product search!')})

router.route('/search/suggestion/:query')
  .get((req, res) => {res.send('hello from product search suggestion!')})


module.exports = router;