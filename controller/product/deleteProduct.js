const { deleteProductById } = require('../../services/product');

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const productDeleted = await deleteProductById({ id });
    return res.status(200).json(productDeleted);
  } catch (error) {
    res.status(422).json(error);
  }
};

module.exports = {
  deleteProduct,
};