const Product = require('../model/listProduct');
const validated = require('../middleware/validationError');

module.exports = async ({ name, quantity }) => {
  const { validateName, qtdLessOrEqualZero, qtdIsNotString } = validated;
  if (validateName) {
    throw validateName();
  }
  if (qtdLessOrEqualZero) {
    throw qtdLessOrEqualZero();
  }
  if (qtdIsNotString) {
    throw qtdIsNotString();
  }
  const foundProdId = await Product.findProductsById({ name, quantity });
  return foundProdId;
};
