const updateSales = require('../../model/sales/updateSales');
const validated = require('../../middleware/validationError');

module.exports = async ({ id, itensSold }) => {
  const validation = itensSold.map((prod) => {
    const { quantity } = prod;
    const qtdCheck = validated.qtdSalesLessOrEqualZero(quantity);
    return qtdCheck;
  });
  
  if (validation.some((item) => item.err)) {
    return validation.find((item) => item.err);
  }
  const foundSaleId = await updateSales({ id, itensSold });
  return foundSaleId;
};
