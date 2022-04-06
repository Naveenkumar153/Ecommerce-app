/*eslint-disable*/

import actions from "./action";
import mutations from "./mutation";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return{
      createCart:[]
    }
  },
  getters,
  mutations,
  actions,
};
