const Product = require('../../model/product/listProduct');

module.exports = async () => {
  const foundProd = await Product.findProducts();
  return foundProd;
};
