const { ObjectId } = require('mongodb');
const connection = require('./connection');

const deleteProduct = async ({ id }) => {
  const db = await connection();   
  const product = await db.collection('products')
  .deleteOne({ _id: ObjectId(id) });
  return product;
};

module.exports = {
  deleteProduct,
};