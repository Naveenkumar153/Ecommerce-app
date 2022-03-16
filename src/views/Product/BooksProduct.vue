<template>
  <!-- eslint-disable -->
  <ion-page>
    <site-header></site-header>
    <ion-content>
      <h2>Books</h2>
    </ion-content>
  </ion-page>
</template>
<script>
/* eslint-disable */
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  props: ["booksData"],
  setup() {
    const store = useStore();
    const booksData = ref();
    onMounted(() => {
      booksData.value = store.getters.filterProduct;
      console.log(booksData.value);
    });
    return {
      booksData,
    };
  },
};
</script>
<style scoped>
/* eslint-disable */
</style>
