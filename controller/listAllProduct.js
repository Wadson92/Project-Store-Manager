const { listAllProduct } = require('../services');

module.exports = async (_req, res) => {
  try {
    const findAllProducts = await listAllProduct();
    return res.status(200).json({ products: findAllProducts });
  } catch (error) {
    console.log(error);
  }
};