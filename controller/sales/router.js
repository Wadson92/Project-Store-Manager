const express = require('express');
const createSale = require('./create');
const listSalesById = require('./listSalesById');
const listAllSales = require('./listAllSales');

const router = express.Router({ mergeParams: true });

router.post('/', createSale);
router.get('/', listAllSales);
router.get('/:id', listSalesById);

module.exports = router;