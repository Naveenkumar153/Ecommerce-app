<template>
  <ion-app>
    <ion-router-outlet id="main"></ion-router-outlet>
    <Menu></Menu>
  </ion-app>
</template>

<script>
/* eslint-disable */
import { IonApp, IonRouterOutlet } from "@ionic/vue";

import Menu from "./components/Base/SiteMenu.vue";
export default {
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    Menu,
  },
  setup() {},
};
</script>

<style>
* {
  margin: 0;
  /* padding: 0; */
  box-sizing: border-box;
}
</style>
