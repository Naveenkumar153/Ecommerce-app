<template>
  <div class="content-header">
    <div class="product-name">
      <h2>{{ title }}</h2>
    </div>
    <div class="product-filter">
      <ion-list>
        <ion-item>
          <ion-select placeholder="sort by" interface="popover">
            <ion-select-option>Price: High to Low</ion-select-option>
            <ion-select-option>Price: Low to High</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { IonList, IonItem, IonSelect, IonSelectOption } from "@ionic/vue";
export default {
  props: ["title"],
  components: {
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
  },
  setup() {},
};
</script>

<style scoped>
.content-header {
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;
  /* margin: 1rem; */
}
@media (max-width: 576px) {
  .content-header {
    margin: 1rem;
  }
}
</style>
