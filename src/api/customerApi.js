// In case we use the fake backend server
// const API_URL = 'http://localhost:3001';

// export const fetchCustomers = () => {
//   return fetch(`${API_URL}/customers`).then(response => response.json());
// };

// export const fetchCustomerById = (id) => {
//   return fetch(`${API_URL}/customers/${id}`).then(response => response.json());
// };

//Fetch directly from db.json

import data from '../data/db.json';

export const fetchCustomers = () => {
  return Promise.resolve(data.customers);
};

export const fetchCustomerById = (id) => {
  const customer = data.customers.find(customer => customer._id === parseInt(id));
  return Promise.resolve(customer);
};
