/* eslint-disable */
import { createStore } from "vuex";
import cartModule from "./modules/Cart/index.js";
import rootGetters from "./getters";
import rootActions from "./action";
import rootMutations from "./mutation";
const store = createStore({
  modules: {
    cart: cartModule,
  },
  state() {
    return {
      lastFetch:null,
      products: [],
      filterProduct:[]
    };
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
});

export default store;
