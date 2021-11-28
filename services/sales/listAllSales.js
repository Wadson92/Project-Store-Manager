const Sales = require('../../model/sales/listSales');

module.exports = async () => {
  const foundSales = await Sales.findSales();
  return foundSales;
};
