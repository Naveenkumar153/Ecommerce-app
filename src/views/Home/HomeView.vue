<template>
  <base-layout>
    <mobile-slide></mobile-slide>
  </base-layout>
</template>

<script>
/* eslint-disable */
import { onMounted } from "vue";
import { useStore } from "vuex";
import useProductApi from "../../hooks/productsApi";
import MobileSlide from "../../components/cursorials/MobileSwiper.vue";
// import MobileIconSlide from "../../components/cursorials/MobileIconSwiper.vue";
export default {
  components: {
    MobileSlide,
    // MobileIconSlide,
  },
  setup() {
    const store = useStore();
    const { fetchProducts, productData } = useProductApi();
    onMounted(() => {
      fetchProducts();
      store.getters.productData;
    });
  },
};
</script>

<style scoped></style>
