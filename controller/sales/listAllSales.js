const { listAllSales } = require('../../services/sales');

module.exports = async (_req, res) => {
  try {
    const findAllProducts = await listAllSales();
    return res.status(200).json({ sales: findAllProducts });
  } catch (error) {
    console.log(error);
  }
};