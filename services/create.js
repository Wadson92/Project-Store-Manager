const Product = require('../model/createProducts');
const validated = require('../middleware/validationError');

module.exports = async ({ name, quantity }) => {
  const nameCheck = validated.validateName(name);
  if (nameCheck.err) {
    return nameCheck;
  }
  const qtdCheck = validated.qtdLessOrEqualZero(quantity);
  if (qtdCheck.err) {
    return qtdCheck;
  }
  const qtdNotString = validated.qtdIsNotString(quantity);
  if (qtdNotString.err) {
    return qtdNotString;
  }
  const foundProd = await Product.findName(name);
  if (foundProd) {
    return validated.validateProduct;
  }
  return Product.create({ name, quantity });
};