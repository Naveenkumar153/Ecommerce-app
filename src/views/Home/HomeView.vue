<template>
  <!-- eslint-disable -->
  <ion-page>
    <site-header></site-header>
    <ion-content>
      <mobile-slide class="ion-padding-top"></mobile-slide>
    </ion-content>
  </ion-page>
</template>

<script>
/* eslint-disable */
import { IonPage, IonContent } from "@ionic/vue";
import MobileSlide from "../../components/cursorials/MobileSwiper.vue";
export default {
  components: {
    IonPage,
    IonContent,
    MobileSlide,
  },
  setup() {},
};
</script>

<style scoped></style>
