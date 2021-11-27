const express = require('express');
const product = require('./controller/router');

const PORT = 3000;
const app = express();
app.use(express.json());

app.use('/products', product);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
