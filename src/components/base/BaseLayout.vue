<template>
  <!-- eslint-disable  -->
  <ion-page>
    <ion-header class="mobile-header">
      <ion-toolbar>
        <ion-buttons slot="start" class="menuBtn" v-if="currentRouteName">
          <ion-menu-button menu="myMenu"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="start" v-else>
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-title slot="start" class="header-title">
          <img
            src="../../assets/img/logo/logo.png"
            alt="logo"
            class="logo"
            @click="homepage"
          />
        </ion-title>
        <ion-list slot="start" class="list ion-text-center" lines="none">
          <ion-item
            v-for="menu of menuItems"
            :key="menu.id"
            class="list-item"
            @click="productRouting(menu.path, menu.name)"
            >{{ menu.title }}</ion-item
          >
        </ion-list>
        <div class="header-icons" slot="end">
          <div class="header-icon">
            <ion-icon :icon="personOutline" class="icon" />
            <span class="icon-text ion-text-lowercase">profile</span>
          </div>
          <div class="header-icon">
            <ion-icon :icon="cartOutline" class="icon" />
            <span class="icon-text ion-text-lowercase">cart</span>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot></slot>
    </ion-content>
    <ion-footer collapse="fade">
      <ion-toolbar>
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
/* eslint-disable */
import {
  IonHeader,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonMenuButton,
  IonBackButton,
} from "@ionic/vue";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { cartOutline, personOutline } from "ionicons/icons";
import filterDataNavigation from "../../hooks/filterDataEachNavigation";
export default {
  components: {
    IonHeader,
    IonFooter,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonMenuButton,
    IonBackButton,
  },
  props: ["pageDefaultBackLink"],
  setup() {
    // hooks
    const router = useRouter();
    const route = useRoute();
    const currentRouteName = computed(() => route.name === "home");
    const { menuItems, productRouting } = filterDataNavigation();
    function homepage() {
      router.push("/");
    }
    return {
      cartOutline,
      personOutline,
      menuItems,
      productRouting,
      homepage,
      currentRouteName,
    };
  },
};
</script>

<style scoped>
/* eslint-disable */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

html {
  font-family: "Roboto", sans-serif;
}
.header-title {
  text-align: center;
}
.header-title img {
  width: 47px;
}
/* .site-logo .logo {
  object-fit: cover;
  width: 100%;
  height: 100%;
} */
.list {
  display: flex;
  width: 460px;
}
.list-item {
  padding: 0 6px;
  font-weight: 500;
  letter-spacing: 0.7px;
  color: #282c3f;
  cursor: pointer;
}
.header-icons {
  display: flex;
  width: 110px;
  height: 50px;
  align-items: center;
}
.header-icons .header-icon {
  width: 100%;
  height: 100%;
  text-align: center;
}
.header-icons .icon {
  width: 24px;
  height: 24px;
}
.header-icons .icon-text {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.9px;
  line-height: 16px;
}
.list-item:hover {
  border-bottom: 3.5px solid #ee5f73;
  color: #ee5f73;
  margin-bottom: -8px;
}
.logo {
  cursor: pointer;
}
@media (min-width: 820px) {
  .menuBtn {
    display: none;
  }
}
@media (max-width: 820px) {
  .list {
    display: none;
  }
}
</style>
