const connection = require('../connection');

const findName = async (name) => {
  const db = await connection();
  const getName = await db.collection('products').findOne({ name });
  return getName;
};

const create = async ({ name, quantity }) => {
  const db = await connection();
    const newProduct = await db.collection('products').insertOne({ name, quantity });
    return {
      _id: newProduct.insertedId,
      name,
      quantity,
    };
};

module.exports = {
  findName,
  create,
};
