const create = require('./createProducts');
const listProduct = require('./listProduct');
const updateProduct = require('./updateProduct');
const { deleteProduct } = require('./deleteProduct');

module.exports = {
  create,
  listProduct,
  updateProduct,
  deleteProduct,
};
