const { ObjectId } = require('mongodb');
const { deleteProduct } = require('../model');
const validated = require('../middleware/validationError');
const listproduct = require('./listProduct');

module.exports = async ({ id }) => {
  const { productAlready } = validated;
  if (!ObjectId.isValid(id)) {
    throw productAlready;
  }
  const products = await listproduct({ id });
  await deleteProduct({ id });
  return products;
};
