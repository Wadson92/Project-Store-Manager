const { ObjectId } = require('mongodb');
const { deleteSale } = require('../../model/sales');
const validated = require('../../middleware/validationError');
const listSalesById = require('./listSalesById');

module.exports = async ({ id }) => {
  const { saleNotExist } = validated;
  if (!ObjectId.isValid(id)) {
    throw saleNotExist;
  }
  const sales = await listSalesById({ id });
  await deleteSale({ id });
  return sales;
};
