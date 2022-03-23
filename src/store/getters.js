/* eslint-disable */
export default {
  fetchProducts(state) {
    return state.products;
  },
  filterProduct(state) {
    return state.filterProduct;
  },
  productDetails(state) {
    return state.productDetails;
  },
  shoudUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
  },
};
