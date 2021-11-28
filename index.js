const express = require('express');
const product = require('./controller/product/router');
const sales = require('./controller/sales/router');
const error = require('./middleware/error');

const PORT = 3000;
const app = express();
app.use(express.json());

app.use('/products', product);
app.use('/sales', sales);

app.use(error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
