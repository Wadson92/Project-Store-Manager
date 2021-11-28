const { updateProductById } = require('../services');

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;

    await updateProductById({ id, name, quantity });
  
    return res.status(200).json({ _id: id, name, quantity });
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
};

module.exports = updateProduct;
