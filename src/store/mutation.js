/* eslint-disable */
export default {
  fetchProduct(state, payload) {
    state.products = payload;
  },
  filterProduct(state,payload){
    state.filterProduct = payload;
  }
};
