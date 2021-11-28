const CODE_ERROR = 'invalid_data';

const validateName = (name) => {
  if (typeof name !== 'string' || name.length < 5) { 
    return {
      err: {
        code: CODE_ERROR,
        message: '"name" length must be at least 5 characters long',
      },
    };
  }
  return false;
};

const validateProduct = {
  err: {
    code: CODE_ERROR,
    message: 'Product already exists',
  },
};

const productAlready = {
  err: {
    code: CODE_ERROR,
    message: 'Wrong id format',
  },
};

const qtdLessOrEqualZero = (quantity) => {
  if (quantity <= 0) {
    return {
      err: {
        code: CODE_ERROR,
        message: '"quantity" must be larger than or equal to 1',
      },
    };
  }
  return true;
};

const qtdSalesLessOrEqualZero = (quantity) => {
  if (typeof quantity !== 'number' || quantity <= 0) {
    return {
      err: {
        code: CODE_ERROR,
        message: 'Wrong product ID or invalid quantity',
      },
    };
  }
  return true;
};

const qtdIsNotString = (quantity) => {
  if (typeof quantity !== 'number') {
    return {
      err: {
        code: CODE_ERROR,
        message: '"quantity" must be a number',
      },
    };
  }
  return true;
};

module.exports = {
  validateName,
  validateProduct,
  qtdLessOrEqualZero,
  qtdIsNotString,
  productAlready,
  qtdSalesLessOrEqualZero,
};
