const { ObjectId } = require('mongodb');
const connection = require('../connection');

const findSales = async () => {
  const db = await connection();
  const getName = await db.collection('sales').find().toArray();
  return getName;
};

const findSalesById = async (id) => {
  const db = await connection();
    const product = await db.collection('sales').findOne(ObjectId(id));
    return product;
};

module.exports = {
  findSales,
  findSalesById,
};
