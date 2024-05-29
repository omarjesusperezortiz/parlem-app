<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Customers</h1>
        <CustomerList></CustomerList>
    </div>
  </template>
  
  <script>
  import CustomerList from './../components/CustomerList.vue'

  export default {
    components: {
      CustomerList
    }
  }
  </script>