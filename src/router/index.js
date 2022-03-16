/* eslint-disable */
import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomeView from "@/views/Home/HomeView.vue";

// Auth
const signUp = defineAsyncComponent(() =>
  import("@/views/Auth/SignUpAuth.vue")
);
const login = defineAsyncComponent(() => import("@/views/Auth/LoginAuth.vue"));
// User Profile
const userProfile = defineAsyncComponent(() =>
  import("@/views/User/ProfileView.vue")
);
// Product
const productList = defineAsyncComponent(() =>
  import("@/views/Product/ProductList.vue")
);
const Books = defineAsyncComponent(() =>
  import("@/views/Product/BooksProduct.vue")
);
const mobiles = defineAsyncComponent(() =>
  import("@/views/Product/MobilesProduct.vue")
);
const laptops = defineAsyncComponent(() =>
  import("@/views/Product/LaptopProduct.vue")
);
// const ProductDetails = defineAsyncComponent(() => import('@/views/Product/ProductDetails.vue'));

const cart = defineAsyncComponent(() => import("@/views/Cart/CartView.vue"));
const payment = defineAsyncComponent(() =>
  import("@/views/Payment/PaymentView.vue")
);
// const ThankYou       = defineAsyncComponent(() => import('@/views/ThankYou.vue'));
const notFound = defineAsyncComponent(() => import("@/views/NotFound.vue"));
const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: login },
  { path: "/signup", name: "signup", component: signUp },
  { path: "/profile", name: "profile", component: userProfile },
  {
    path: "/product",
    name: "prodcut",
    component: productList,
    // childeren routes need
  },
  {
    path: "/books",
    name: "books",
    component: Books,
    // children: [{ path: "", component: "" }],
  },
  {
    path: "/mobiles",
    name: "mobiles",
    component: mobiles,
    // children: [{ path: "", component: "" }],
  },
  {
    path: "/laptops",
    name: "laptops",
    component: laptops,
    // children: [{ path: "", component: "" }],
  },
  { path: "/cart", name: "cart", component: cart },
  { path: "/payment", name: "payment", component: payment },
  { path: "/:pathMatch(.*)", name: "notfound", component: notFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
