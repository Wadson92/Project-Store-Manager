const connection = require('./connection');

const findName = async (name) => {
  const db = await connection();
  const getName = await db.collection('products').findOne({ name });
  console.log(getName);
  return getName;
};

module.exports = {
  findName,
};
