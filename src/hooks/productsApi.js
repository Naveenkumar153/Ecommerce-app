/* eslint-disable */
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { BaseToast } from  '../Classes/BaseToast';
function useProductApi(refresh = false) {
  const store = useStore();
  const router = useRouter();
  let productData = ref([]);
  const fetchProducts = async () => {
    router.replace('/')
    // await BaseAlert.loaderEnabled("Please Wait...","bubbles");
    await store.dispatch("product/fetchProduct", {
      foreceUpdate: refresh,
    });
    try{
      await store.dispatch('cart/createCart');
    }catch(err){
      BaseToast.toastMessageEnabled(err);
    }
    productData.value = store.getters.fetchProducts;
    // BaseAlert.loaderDisabled();
  };
  return {
    fetchProducts,
    productData,
  };
}

export default useProductApi;
