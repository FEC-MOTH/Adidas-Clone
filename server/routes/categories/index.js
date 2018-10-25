// const { Category } = require('../../../database/models');
const express = require('express');

const router = express.Router();

router.route('/')
  .get((req, res) => { res.send('hello from category get!') })

router.route('/:query')
  .get((req, res) => { res.send('hello from category get by query!') })


module.exports = router;