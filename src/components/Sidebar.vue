<template>
    <div class="h-full flex flex-col bg-gray-800 text-white w-64">
      <div class="p-4 text-xl font-bold">
        Parlem App
      </div>
      <nav class="flex-1 px-2 py-4">
        <ul>
          <li class="mb-2">
            <router-link to="/" class="block px-4 py-2 rounded hover:bg-gray-700">
              Home
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/customers" class="block px-4 py-2 rounded hover:bg-gray-700">
              Customers
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/products" class="block px-4 py-2 rounded hover:bg-gray-700">
              Products
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  </style>
  