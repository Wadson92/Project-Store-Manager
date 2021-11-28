const Product = require('../model/listProduct');

module.exports = async () => {
  const foundProd = await Product.findProducts();
    return foundProd;
};
