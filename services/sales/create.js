const Sales = require('../../model/sales/create');
const validated = require('../../middleware/validationError');
// const productModel = require('../../model/sales/create');

module.exports = async (sale) => {
 const validation = sale.map((prod) => {
    const { quantity } = prod;
    const qtdCheck = validated.qtdSalesLessOrEqualZero(quantity);
    return qtdCheck;
  });
  
  if (validation.some((item) => item.err)) {
    return validation.find((item) => item.err);
  }
  return Sales.create(sale);
};

// const validateId = await productModel.findProduct(productId);
// if (!validateId) {
//   throw console.log('erro validateId!');
// }