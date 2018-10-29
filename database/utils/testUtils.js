const { Product } = require('../../database/models');

module.exports = {
  dropProducts: () => Product.drop(),
  syncProducts: () => Product.sync()
}