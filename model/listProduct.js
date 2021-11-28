const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findProducts = async () => {
  const db = await connection();
  const getName = await db.collection('products').find().toArray();
  return getName;
};

const findProductsById = async (id) => {
  const db = await connection();
    const product = await db.collection('products').findOne(ObjectId(id));
    return product;
};

module.exports = {
  findProducts,
  findProductsById,
};
