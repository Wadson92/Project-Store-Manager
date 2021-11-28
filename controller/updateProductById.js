const { updateProductById } = require('../services');

const product = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    const updateProductID = await updateProductById({ name, quantity });

    return res.status(201).json(updateProductID);
  } catch (error) {
    console.log(error);
    res.status(422).json(error);
  }
};

module.exports = product;
