/* eslint-disable */
export default {
  fetchProduct(state, payload) {
    state.products = payload;
  },
  filterProduct(state, payload) {
    state.filterProduct = payload;
  },
  productDetails(state, payload) {
    state.productDetails = payload;
  },
};
