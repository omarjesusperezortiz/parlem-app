// In case we use the fake backend server
// const API_URL = 'http://localhost:3001';

// export const fetchProductsByCustomerId = (customerId) => {
//   return fetch(`${API_URL}/products/${customerId}`).then(response => response.json());
// };

// export const fetchProductById = (id) => {
//   return fetch(`${API_URL}/product/${id}`).then(response => response.json());
// };

// export const fetchAllProducts = () => {
//   return fetch(`${API_URL}/products`).then(response => response.json());
// }

import data from '../data/db.json';

export const fetchProductsByCustomerId = (customerId) => {
  const products = data.products.filter(product => product.customerId === customerId);
  return Promise.resolve(products);
};

export const fetchProductById = (id) => {
  const product = data.products.find(product => product._id === parseInt(id));
  return Promise.resolve(product);
};

export const fetchAllProducts = () => {
  return Promise.resolve(data.products);
};
