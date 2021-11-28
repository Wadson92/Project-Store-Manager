const { ObjectId } = require('mongodb');
const Product = require('../model/listProduct');
const validated = require('../middleware/validationError');

module.exports = async ({ id }) => {
  const { productAlready } = validated;
  if (!ObjectId.isValid(id)) {
    throw productAlready;
  }
  const foundProdId = await Product.findProductsById(id);
  return foundProdId;
};
