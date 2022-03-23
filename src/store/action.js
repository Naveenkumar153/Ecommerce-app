/* eslint-disable */
import axios from "@/Services/AxiosInterceptor";
export default {
  async fetchProduct(context, payload) {
    if (!payload.foreceUpdate && !context.getters.fetchProducts) {
      return;
    }
    try {
      const productApi = "products?limit=200";
      const categorieApi = "categories";
      const { data: allProductsData } = await axios.get(productApi);
      const { data: allCategoriesData } = await axios.get(categorieApi);
      const productPerCategories = allCategoriesData.data.reduce(
        (acc, category) => {
          return [
            ...acc,
            {
              ...category,
              productsData: allProductsData.data.filter((product) => {
                let proudcts = product.categories.find((cat) => {
                  return cat.id === category.id;
                });
                return proudcts;
              }),
            },
          ];
        },
        []
      );
      context.commit("fetchProduct", await productPerCategories);
    } catch (error) {
      console.log(error);
    }
  },
  getFilterProduct(context, product) {
    context.commit("filterProduct", product);
  },
  productDetails(context, productDetails) {
    context.commit("productDetails", productDetails);
  },
};
