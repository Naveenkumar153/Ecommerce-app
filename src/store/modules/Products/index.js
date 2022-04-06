/*eslint-disable*/

import actions from "./action";
import mutations from "./mutation";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
        lastFetch: null,
        products: [],
        filterProduct: [],
        productDetails: [],
      };
  },
  getters,
  mutations,
  actions,
};
