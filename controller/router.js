const express = require('express');
const { product } = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', product);

module.exports = router;