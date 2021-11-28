const createSale = require('./create');
const listSales = require('./listSales');
const updateSales = require('./updateSales');
const { deleteSale } = require('./deleteSale');

module.exports = {
  createSale,
  listSales,
  updateSales,
  deleteSale,
};
