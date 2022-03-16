/* eslint-disable */
export default {
  fetchProducts(state) {
    return state.products;
  },
  filterProduct(state) {
    return state.filterProduct;
  },
  shoudUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
  },
};
