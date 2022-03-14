/* eslint-disable */
import { createStore } from "vuex";
import axios from "../Services/AxiosInterceptor";
const store = createStore({
  modules: {},
  state() {
    return {
      product: [],
    };
  },
  getters: {
    fetchProduct(state) {
      return state.product;
    },
  },
  mutations: {
    fetchProduct(state, payload) {
      state.product = payload;
    },
  },
  actions: {
    async fetchProduct(context) {
      try {
        const api = "products?limit=200";
        const product = await axios.get(api);
        const response = product.data.data;
        context.commit("fetchProduct", response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
