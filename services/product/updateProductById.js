const { updateProduct } = require('../../model/product/updateProduct');
const validated = require('../../middleware/validationError');

module.exports = async ({ id, name, quantity }) => {
  const { validateName, qtdLessOrEqualZero, qtdIsNotString } = validated;
  const nameCheck = validateName(name);
  if (nameCheck.err) {
    throw nameCheck;
  }
  const qtdCheck = qtdLessOrEqualZero(quantity);
  if (qtdCheck.err) {
    throw qtdCheck;
  }
  const quantityNotString = qtdIsNotString(quantity);
  if (quantityNotString.err) {
    throw quantityNotString;
  }
  const foundProdId = await updateProduct({ id, name, quantity });
  return foundProdId;
};
