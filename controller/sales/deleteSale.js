const { deleteSalesById } = require('../../services/sales');

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const saleDeleted = await deleteSalesById({ id });
    return res.status(200).json(saleDeleted);
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
};

module.exports = deleteProduct;