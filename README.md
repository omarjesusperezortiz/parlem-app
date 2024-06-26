# Parlem Frontend

This project is a frontend application for Parlem, built with Vue 3 and Vite. It includes components for managing customers and products, along with a sidebar for navigation. The application uses Tailwind CSS for styling.

## Enable Backend

To enable backend just uncomment info from src/api, and then enable backend with node server.js it will listen to port local 3001

## Project Structure
`````
parlem-frontend/
├── public/
├── src/
│   ├── api/
│   │   ├── customerApi.js
│   │   └── productApi.js
│   ├── assets/
│   ├── components/
│   │   ├── CustomerList.vue
│   │   ├── Layout.vue
│   │   ├── ProductList.vue
│   │   └── Sidebar.vue
│   ├── data/
│   │   └── db.json
│   ├── views/
│   │   ├── CustomerDetail.vue
│   │   ├── CustomerView.vue
│   │   ├── HomeView.vue
│   │   ├── ProductDetail.vue
│   │   └── ProductView.vue
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   └── index.css
├── index.html
├── package.json
└── tailwind.config.js
`````