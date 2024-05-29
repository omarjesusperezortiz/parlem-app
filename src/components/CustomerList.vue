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
        v-for="customer in filteredCustomers"
        :key="customer._id"
        class="p-4 mb-2 border border-gray-200 rounded bg-white shadow"
      >
        <router-link :to="'/customer/' + customer._id" class="text-blue-500">
          <div class="font-bold text-lg">
            {{ customer.givenName }} {{ customer.familyName1 }}
          </div>
          <div class="text-sm">
            <p><strong>Email:</strong> {{ customer.email }}</p>
            <p><strong>Phone:</strong> {{ customer.phone }}</p>
            <p><strong>Document Type:</strong> {{ customer.docType }}</p>
            <p><strong>Document Number:</strong> {{ customer.docNum }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchCustomers } from '../api/customerApi';

export default {
  data() {
    return {
      search: '',
      customers: [],
    };
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter((customer) => {
        const searchLower = this.search.toLowerCase();
        return (
          customer.givenName.toLowerCase().includes(searchLower) ||
          customer.familyName1.toLowerCase().includes(searchLower) ||
          customer.email.toLowerCase().includes(searchLower) ||
          customer.phone.toLowerCase().includes(searchLower) ||
          customer.docType.toLowerCase().includes(searchLower) ||
          customer.docNum.toLowerCase().includes(searchLower)
        );
      });
    },
  },
  created() {
    fetchCustomers().then((data) => {
      this.customers = data;
    });
  },
};
</script>
