<template>
  <div v-if="customer" class="p-4">
    <h1 class="text-2xl font-bold mb-4">Detalles del Cliente</h1>
    <p class="mb-2">Nombre: {{ customer.givenName }} {{ customer.familyName1 }}</p>
    <p class="mb-2">Email: {{ customer.email }}</p>
    <p class="mb-2">Teléfono: {{ customer.phone }}</p>
    <h2 class="text-xl font-bold my-4">Productos Contratados</h2>
    <ProductList :products="products" />
  </div>
</template>

<script>
import { fetchCustomerById } from '../api/customerApi';
import { fetchProductsByCustomerId } from '../api/productApi';
import ProductList from '../components/ProductList.vue';

export default {
  components: { ProductList },
  data() {
    return {
      customer: null,
      products: [],
    };
  },
  async created() {
    const customerId = this.$route.params.id;
    try {
      const customer = await fetchCustomerById(customerId);
      this.customer = customer;
      const products = await fetchProductsByCustomerId(customer.customerId);
      this.products = products;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>../views/ProductList.vue../components/ProductList.vue
