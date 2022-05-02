/* eslint-disable */
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { BaseAlert } from '@/Classes/Base/BaseAlert';
function useProductApi(refresh = false) {
  const store = useStore();
  const router = useRouter();
  let productData = ref([]);
  const fetchProducts = async () => {
    router.replace('/')
    const loading = new BaseAlert("Please Wait...","bubbles");
    await loading.loaderEnabled()
    const product = await store.dispatch("product/fetchProduct", {
      foreceUpdate: refresh,
    });
    store.dispatch('cart/createCart');
    productData.value = store.getters.fetchProducts;
    loading.loaderDisabled();
  };
  return {
    fetchProducts,
    productData,
  };
}

export default useProductApi;
