/* eslint-disable */

import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useNavigation from "./navigation";
function filterDataEachNavigation() {
  const productData = ref([]);
  const router = useRouter();
  const store = useStore();
  const {
    menuItems,
    personOutline,
    womanOutline,
    laptopOutline,
    phonePortraitOutline,
    bookOutline,
  } = useNavigation();

  const productRouting = (path, productName) => {
    if (path === "/mens") {
      productData.value = store.getters.fetchProducts;
    } else if (path === "/womans") {
      productData.value = store.getters.fetchProducts;
    } else if (path === "/laptops") {
      productData.value = store.getters.fetchProducts;
      const laptops = productData.value.find(
        (name) => name.slug === productName
      );
      store.dispatch("getFilterProduct", laptops);
      router.push({ name: "laptops", query: { category: "laptops" } });
    } else if (path === "/mobiles") {
      productData.value = store.getters.fetchProducts;
      const mobiles = productData.value.find(
        (name) => name.slug === productName
      );
      console.log(mobiles);
      store.dispatch("getFilterProduct", mobiles);
      router.push({ name: "mobiles", query: { category: "mobiles" } });
    } else if (path === "/books") {
      productData.value = store.getters.fetchProducts;
      const books = productData.value.find((name) => name.slug === productName);
      console.log(books);
      store.dispatch("getFilterProduct", books);
      router.push({ name: "books", query: { category: "books" } });
    } else {
      console.log("data not available");
    }
  };

  return {
    menuItems,
    productRouting,
    personOutline,
    womanOutline,
    laptopOutline,
    phonePortraitOutline,
    bookOutline,
  };
}

export default filterDataEachNavigation;
