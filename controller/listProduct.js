const { listProduct } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const findProducts = await listProduct({ id });

    return res.status(200).json(findProducts);
  } catch (error) {
    res.status(422).json(error);
  }
};