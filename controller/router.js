const express = require('express');
const listProduct = require('./listProduct');
const listAllProduct = require('./listAllProduct');
const updateProduct = require('./updateProductById');
const { product } = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', product);
router.get('/', listAllProduct);
router.get('/:id', listProduct);
router.put('/:id', updateProduct);

module.exports = router;