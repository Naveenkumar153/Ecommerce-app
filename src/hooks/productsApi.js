/* eslint-disable */
import { ref } from "vue";
import { useStore } from "vuex";
import { loadingController } from "@ionic/vue";

function useProductApi(refresh = false) {
  const store = useStore();
  let productData = ref([]);
  const fetchProducts = async () => {
    const loading = await loadingController.create({
      message: "Please Wait...",
      spinner: "bubbles",
    });
    await loading.present();
    const product = await store.dispatch("fetchProduct", {
      foreceUpdate: refresh,
    });
    productData.value = store.getters.fetchProducts;
    loading.dismiss();
    console.log(product);
    console.log(productData.value);
  };
  return {
    fetchProducts,
    productData,
  };
}

export default useProductApi;
