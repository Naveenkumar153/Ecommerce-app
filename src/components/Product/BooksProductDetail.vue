<template>
  <!-- eslint-disable -->
  <base-layout pageDefaultBackLink="/books">
    <h2>Product Details</h2>
  </base-layout>
</template>

<script>
/* eslint-disable */
// import { IonGrid,IonCol,IonRow } from "@ionic/vue";
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    let product = reactive({});
    product = store.getters.productDetails;
    console.log(product.id);
  },
};
</script>

<style scoped></style>
