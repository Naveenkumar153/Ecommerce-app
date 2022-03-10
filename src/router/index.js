/* eslint-disable */
import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeView from '@/views/Home/HomeView.vue';

// Auth
const SignUp         = defineAsyncComponent(() => import('@/views/Auth/SignUpAuth.vue'));
const Login          = defineAsyncComponent(() => import('@/views/Auth/LoginAuth.vue'));
// User Profile
const UserProfile    = defineAsyncComponent(() => import('@/views/User/ProfileView.vue'));
// Product
const ProductList    = defineAsyncComponent(() => import('@/views/Product/ProductList.vue'));
const ProductDetails = defineAsyncComponent(() => import('@/views/Product/ProductDetails.vue'));

const Cart           = defineAsyncComponent(() => import('@/views/Cart/CartView.vue'));
const Payment        = defineAsyncComponent(() => import('@/views/Payment/PaymentView.vue'));
// const ThankYou       = defineAsyncComponent(() => import('@/views/ThankYou.vue'));
const NotFound       = defineAsyncComponent(() => import('@/views/NotFound.vue'));
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component:Login },
  { path: '/signup', name: 'signup', component:SignUp },
  { path: '/profile', name: 'profile', component:UserProfile },
  { 
    path     : '/Product',
    name     : 'login',
    component: ProductList
    // childeren routes need
   },
  { path: '/cart', name: 'cart', component:Cart },
  { path: '/payment', name: 'payment', component:Payment },
  { path: '/:pathMatch(.*)', name: 'notfound', component:NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
