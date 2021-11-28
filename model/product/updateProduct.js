const { ObjectId } = require('mongodb');
const connection = require('../connection');

const updateProduct = async ({ id, name, quantity }) => {
  const db = await connection();   
  const product = await db.collection('products')
  .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } });
  return product;
};

module.exports = {
  updateProduct,
};
