// const { ObjectId } = require('mongodb');
const connection = require('../connection');

// const findProduct = async (productId) => {
//   const db = await connection();
//   const getName = await db.collection('sales').findOne({ _id: ObjectId(productId) });
//   return getName;
// };

const create = async (entity) => {
  const db = await connection();
    const newSale = await db.collection('sales').insertOne({ itensSold: entity });
    return newSale.ops[0];
};

module.exports = {
  // findProduct,
  create,
};
