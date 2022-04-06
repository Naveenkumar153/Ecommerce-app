/* eslint-disable */
import { createStore } from "vuex";
import cartModule from "./modules/Cart/index.js";
import productModule from './modules/Products/index.js';
const store = createStore({
  modules: {
    cart   : cartModule,
    product: productModule 
  },
  state() { },
});

export default store;
