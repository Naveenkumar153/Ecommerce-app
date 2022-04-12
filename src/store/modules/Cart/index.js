/*eslint-disable*/

import actions from "./action";
import mutations from "./mutation";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return{
      createCart:[],
      retriveCartData:{},
      addToCart:[],
      // items: [],
      qty: 0,
      // productCount:0,
      // updateCartData:{},
    }
  },
  getters,
  mutations,
  actions,
};
