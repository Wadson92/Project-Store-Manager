const express = require('express');
const createSale = require('./create');
const listSalesById = require('./listSalesById');
const listAllSales = require('./listAllSales');
const updateSale = require('./updateProductById');

const router = express.Router({ mergeParams: true });

router.post('/', createSale);
router.get('/', listAllSales);
router.get('/:id', listSalesById);
router.put('/:id', updateSale);

module.exports = router;