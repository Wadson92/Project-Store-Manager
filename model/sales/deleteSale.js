const { ObjectId } = require('mongodb');
const connection = require('../connection');

const deleteSale = async ({ id }) => {
  const db = await connection();   
  const sale = await db.collection('sales')
  .deleteOne({ _id: ObjectId(id) });
  return sale;
};

module.exports = {
  deleteSale,
};