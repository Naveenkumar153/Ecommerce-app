<template>
  <!-- eslint-disable  -->
  <ion-header class="mobile-header">
    <ion-toolbar>
      <ion-buttons slot="start" class="menuBtn">
        <ion-menu-button menu="myMenu"></ion-menu-button>
      </ion-buttons>
      <ion-title slot="start">
        <div class="site-logo">
          <img
            src="../../assets/img/logo/logo.png"
            alt="logo"
            class="logo"
            @click="homepage"
          />
        </div>
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
</template>

<script>
/* eslint-disable */
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonMenuButton,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { cartOutline, personOutline } from "ionicons/icons";
import filterDataNavigation from "../../hooks/filterDataEachNavigation";
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonMenuButton,
  },
  setup() {
    // hooks
    const router = useRouter();
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
.site-logo {
  width: 60px;
  height: 75px;
  object-fit: cover;
}
.site-logo .logo {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.list {
  display: flex;
  width: calc(60% - 10px);
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
