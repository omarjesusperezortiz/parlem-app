<template>
    <div class="flex h-screen">
      <Sidebar />
      <div class="flex-1 p-4 overflow-auto bg-gray-100">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue';
  
  export default {
    components: {
      Sidebar,
    },
  };
  </script>
  
  <style scoped>
  </style>
  