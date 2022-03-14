<template>
  <ion-app>
    <ion-router-outlet id="main"></ion-router-outlet>
    <Menu></Menu>
  </ion-app>
</template>

<script>
/* eslint-disable */
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import Menu from "./components/Base/SiteMenu.vue";
export default {
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    Menu,
  },
  setup() {
    const store = useStore();
    // lifeCycle hook
    onMounted(() => {
      const fetchProduct = store.dispatch("fetchProduct");
      console.log(fetchProduct);
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
