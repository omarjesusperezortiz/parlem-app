<template>
    <div v-if="product" class="p-4">
      <h1 class="text-2xl font-bold mb-4">Detalles del Producto</h1>
      <p class="mb-2">Nombre: {{ product.productName }}</p>
      <p class="mb-2">Velocidad: {{ product.mbSpeed ? product.mbSpeed + ' MB' : 'N/A' }}</p>
      <p class="mb-2">Datos: {{ product.gbData ? product.gbData + ' GB' : 'N/A' }}</p>
      <p class="mb-2">Tipo: {{ product.productTypeName }}</p>
      <p class="mb-2">Número de Terminal: {{ product.numeracioTerminal }}</p>
      <p class="mb-2">Fecha de Venta: {{ product.soldAt }}</p>
    </div>
  </template>
  
  <script>
  import { fetchProductById } from '../api/productApi';
  
  export default {
    data() {
      return {
        product: null,
      };
    },
    created() {
      const productId = this.$route.params.id;
      fetchProductById(productId).then((data) => {
        this.product = data;
      });
    },
  };
  </script>
  