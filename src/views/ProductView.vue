<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script>
import ProductList from './../components/ProductList.vue'
import { fetchProductsByCustomerId, fetchAllProducts } from '../api/productApi';

export default {
  props: {
    customerId: {
      type: String,
      default: ''
    }
  },
	components: { ProductList },
  data() {
    return {
      products: [],
    };
  },
  created() {
    if (this.customerId) {
      fetchProductsByCustomerId(this.customerId).then((data) => {
        this.products = data;
      });
    } else {
      fetchAllProducts().then((data) => {
        this.products = data;
      });
    }
  },
};
</script>
