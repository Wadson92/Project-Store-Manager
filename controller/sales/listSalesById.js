const { listSalesById } = require('../../services/sales');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const findSales = await listSalesById({ id });

    return res.status(200).json(findSales);
  } catch (error) {
    res.status(404).json(error);
  }
};