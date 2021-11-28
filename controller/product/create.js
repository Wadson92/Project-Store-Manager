const { create } = require('../../services/product');

const product = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    const newProductID = await create({ name, quantity });
    if (newProductID.err) {
      return res.status(422).json({ err: newProductID.err });
    }
  
    return res.status(201).json(newProductID);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  product,
};
