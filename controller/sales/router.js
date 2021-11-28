const express = require('express');
const createSale = require('./create');
const listSalesById = require('./listSalesById');
const listAllSales = require('./listAllSales');
const updateSale = require('./updateProductById');
const deleteSale = require('./deleteSale');

const router = express.Router({ mergeParams: true });

router.post('/', createSale);
router.get('/', listAllSales);
router.get('/:id', listSalesById);
router.put('/:id', updateSale);
router.delete('/:id', deleteSale);

module.exports = router;