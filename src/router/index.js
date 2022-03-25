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
const Books = defineAsyncComponent(() =>
  import("@/views/Product/BookProduct.vue")
);
const BooksProductDetails = defineAsyncComponent(() =>
  import("@/components/Product/BooksProductDetail.vue")
);
const mobiles = defineAsyncComponent(() =>
  import("@/views/Product/MobilesProduct.vue")
);
const MobilesProductDetails = defineAsyncComponent(() => import("@/components/Product/MobilesProductDetail.vue"));
const laptops = defineAsyncComponent(() =>
  import("@/views/Product/LaptopProduct.vue")
);
const LaptopProductDetails = defineAsyncComponent(()=>import("@/components/Product/LaptopProductDetail.vue"));

const HeadphoneProduct = defineAsyncComponent(() => import("@/views/Product/HeadphoneProduct.vue"));

const HeadphoneProductDetail = defineAsyncComponent(() => import("@/components/Product/HeadphoneProductDetail.vue"));

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
  { path: "/books", name: "books", component: Books },
  {
    path: "/books/:pid",
    component: BooksProductDetails,
  },
  { path: "/mobiles", name: "mobiles", component: mobiles },
  {
    path: "/mobiles/:pid",
    component:MobilesProductDetails,
  },
  { path: "/laptops", name: "laptops", component: laptops },
  {
    path: "/laptops/:pid",
    component:LaptopProductDetails,
  },
  { path: "/headphones", name:'headphones', component:HeadphoneProduct},
  {
    path: "/headphones/:pid",
    component:HeadphoneProductDetail
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
