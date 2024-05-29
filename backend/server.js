const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const data = require('./data.json');

app.get('/customers', (req, res) => {
  res.json(data.customers);
});

app.get('/customers/:id', (req, res) => {
  const customer = data.customers.find(c => c._id === parseInt(req.params.id));
  res.json(customer);
});

app.get('/products', (req, res) => {
  res.json(data.products);
});

app.get('/products/:customerId', (req, res) => {
  const products = data.products.filter(p => p.customerId === req.params.customerId);
  res.json(products);
});

app.get('/product/:id', (req, res) => {
  const product = data.products.find(p => p._id === parseInt(req.params.id));
  res.json(product);
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
