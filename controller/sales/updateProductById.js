const updateSale = require('../../services/sales/updateSaleById');

const updateSales = async (req, res) => {
  const { id } = req.params;
  const itensSold = req.body;
  const saleUpdated = await updateSale({ id, itensSold });
  if (saleUpdated.err) {
    return res.status(422).json({ err: saleUpdated.err });
  }

  return res.status(200).json({ _id: id, itensSold });
};

module.exports = updateSales;
