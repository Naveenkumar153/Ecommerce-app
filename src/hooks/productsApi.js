/* eslint-disable */
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { BaseAlert } from '@/Classes/BaseAlert';

function useProductApi(refresh = false) {
  const store = useStore();
  const router = useRouter();
  let productData = ref([]);
  const fetchProducts = async () => {
    router.replace('/')
    await BaseAlert.loaderEnabled("Please Wait...","bubbles");
    await store.dispatch("product/fetchProduct", {
      foreceUpdate: refresh,
    });
    try{
      await store.dispatch('cart/createCart');
    }catch(err){
      BaseAlert.toastMessageEnabled(err,4000);
    }
    productData.value = store.getters.fetchProducts;
    BaseAlert.loaderDisabled();
  };
  return {
    fetchProducts,
    productData,
  };
}

export default useProductApi;
