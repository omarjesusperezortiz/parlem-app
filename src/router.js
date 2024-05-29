import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from './components/Layout.vue';
import HomeView from './views/HomeView.vue';
import CustomerView from './views/CustomerView.vue';
import CustomerDetail from './views/CustomerDetail.vue';
import ProductView from './views/ProductView.vue';
import ProductDetail from './views/ProductDetail.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: HomeView },
      { path: 'customers', component: CustomerView },
      { path: 'customer/:id', component: CustomerDetail },
      { path: 'products', component: ProductView },
      { path: 'product/:id', component: ProductDetail },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
