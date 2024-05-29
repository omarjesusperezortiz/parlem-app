<template>
  <div>
    <input
      type="text"
      v-model="search"
      placeholder="Buscar..."
      class="w-full p-2 mb-4 text-black rounded"
    />
    <ul>
      <li
        v-for="product in filteredProducts"
        :key="product._id"
        class="p-4 mb-2 border border-gray-200 rounded bg-white shadow"
      >
        <router-link :to="'/product/' + product._id" class="text-blue-500">
          <div class="font-bold text-lg">
            {{ product.productName }}
          </div>
          <div class="text-sm">
            <p><strong>Velocidad:</strong> {{ product.mbSpeed ? product.mbSpeed + ' MB' : 'N/A' }}</p>
            <p><strong>Datos:</strong> {{ product.gbData ? product.gbData + ' GB' : 'N/A' }}</p>
            <p><strong>Tipo:</strong> {{ product.productTypeName }}</p>
            <p><strong>Número de Terminal:</strong> {{ product.numeracioTerminal }}</p>
            <p><strong>Fecha de Venta:</strong> {{ product.soldAt }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchAllProducts } from '../api/productApi';

export default {
  data() {
    return {
      search: '',
    };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const searchLower = this.search.toLowerCase();
        return (
          product.productName.toLowerCase().includes(searchLower) ||
          (product.mbSpeed && product.mbSpeed.toString().includes(searchLower)) ||
          (product.gbData && product.gbData.toString().includes(searchLower)) ||
          product.productTypeName.toLowerCase().includes(searchLower) ||
          product.numeracioTerminal.toString().includes(searchLower) ||
          product.soldAt.toLowerCase().includes(searchLower)
        );
      });
    },
  }
};
</script>

<style scoped>
</style>
