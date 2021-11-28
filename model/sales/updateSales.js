const { ObjectId } = require('mongodb');
const connection = require('../connection');

const updateSales = async ({ id, itensSold }) => {
  const db = await connection();   
  const sales = await db.collection('sales')
  .updateOne({ _id: ObjectId(id) }, { $set: { itensSold } });
  return sales;
};

module.exports = updateSales;
