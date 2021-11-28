const rescue = require('express-rescue');
const { createSales } = require('../../services/sales');

const createSale = rescue(
  async (req, res) => {
    const newSale = await createSales(req.body);
    if (newSale.err) {
      res.status(422).json({ err: newSale.err });
    }
    return res.status(200).json(newSale);
  },
);

module.exports = createSale;