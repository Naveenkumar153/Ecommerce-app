<template>
  <base-layout>
    <mobile-slide></mobile-slide>
    <div class="backgroundColor">
      <grid-product></grid-product>
    </div>
  </base-layout>
</template>

<script>
/* eslint-disable */
// import { onMounted } from "vue";
// import { useStore } from "vuex";
// import useProductApi from "../../hooks/productsApi";
import MobileSlide from "../../components/cursorials/MobileSwiper.vue";
import GridProduct from '../../components/Base/GridLayout.vue';
// import MobileIconSlide from "../../components/cursorials/MobileIconSwiper.vue";
export default {
  components: {
    MobileSlide,
    GridProduct,
    // MobileIconSlide,
  },
  setup() {
    // const store = useStore();
    // const { fetchProducts, productData } = useProductApi();
    // onMounted(() => {
    //   fetchProducts();
    //   store.getters["product/productData"];
    // });
  },
};
</script>

<style lang="scss" scoped>

.backgroundColor{
  background-color:#EAEDED;
}

</style>
