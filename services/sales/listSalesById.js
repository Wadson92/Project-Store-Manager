const { ObjectId } = require('mongodb');
const Sales = require('../../model/sales/listSales');
const validated = require('../../middleware/validationError');

module.exports = async ({ id }) => {
  const { salesAlready } = validated;
  if (!ObjectId.isValid(id)) {
    throw salesAlready;
  }
  const foundSalesId = await Sales.findSalesById(id);
  if (!foundSalesId) {
    throw salesAlready;
  }
  return foundSalesId;
};
