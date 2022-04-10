<template>
  <!-- eslint-disable  -->
  <ion-page>
    <ion-header class="mobile-header site-header">
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
          <div class="header-icon" @click="goToCart">
            <ion-badge color="danger" class="badge" >{{ productCount }}</ion-badge>
            <ion-icon :icon="cartOutline" class="icon" />
            <span class="icon-text ion-text-lowercase" >cart</span>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot></slot>
      <div class="ion-fixed">

      </div>
       <div class="footer">
        <div class="container">
          <ion-grid>
              <ion-row>
                  <ion-col  size-xl="3" size-lg="3" size-md="3" size-sm="12" size="12">
                    <div class="download-app">
                      <h3>Shop Non-Shop on NP Shop</h3>
                      <h4>Download Our App</h4>
                      <p>Download App for Android and ios mobile phone</p>
                      <div class="images">
                        <img src="../../assets/app-google.png" alt="Google Play" router-link="/">
                        <img src="../../assets/app-mac.png" alt="App Store" router-link="/">
                      </div>
                    </div>
                  </ion-col>
                  <ion-col size-xl="3" size-lg="3" size-md="3" size-sm="12" size="12">
                    <div class="footer-logo">
                      <img src="../../assets/img/logo/logo.png" alt="logo" router-link="/">
                    </div>
                    <div class="footer-quote">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ut!
                      </p>
                    </div>
                  </ion-col>
                  <ion-col  size-xl="3" size-lg="3" size-md="3" size-sm="12" size="12">
                    <div class="footer-links">
                      <h3>Useful Links</h3>
                      <ul>
                        <li router-link="/">Coupons</li>
                        <li router-link="/">Blog Post</li>
                        <li router-link="/">Return Policy</li>
                        <li router-link="/">Join Affiliate</li>
                      </ul>
                    </div>
                  </ion-col>
                  <ion-col  size-xl="3" size-lg="3" size-md="3" size-sm="12" size="12">
                    <div class="social-media">
                      <h3>Follow Us</h3>
                      <ul lines="none">
                        <li router-link="/">Facebook</li>
                        <li router-link="/">Twitter</li>
                        <li router-link="/">Instagram</li>
                        <li router-link="/">Youtube</li>
                      </ul>
                    </div>
                  </ion-col>
              </ion-row>
          </ion-grid>
        </div>
      </div>
    </ion-content>
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
  IonGrid,
  IonCol,
  IonRow,
  IonBadge,
} from "@ionic/vue";
import { computed,ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from 'vuex';
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
    IonGrid,
    IonCol,
    IonRow,
    IonBadge
  },
  props: ["pageDefaultBackLink"],
  setup() {
    // hooks
    const store        = useStore();
    const router       = useRouter();
    const route        = useRoute();
    // let   productCount = ref('');
    const currentRouteName = computed(() => route.name === "home");
    const { menuItems, productRouting } = filterDataNavigation();
    // product qty 
    let productCount = computed(() => {
      return store.getters['cart/addToCart'];
    });
    function homepage() {
      router.push("/");
    }
    function goToCart(){
      router.push('/cart')
    }
    return {
      cartOutline,
      personOutline,
      menuItems,
      productRouting,
      homepage,
      currentRouteName,
      productCount,
      goToCart
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
.container{
  display:flex;
  justify-content: center;
  width:100%;
}
/* .site-header {
  max-width: 1328px;
} */
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
  position:relative;
}
.header-icons .badge{
    position: absolute;
    z-index: 10;
    font-size: 0.7rem;
    right: 2px;
    top: -3px;
    padding: 5px;
    border-radius: 50%;
}
.header-icons .header-icon {
  width: 100%;
  height: 100%;
  text-align: center;
  cursor:pointer;
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

.footer{
  background:var(--ion-footer-color);
}
.footer .download-app h3{
    font-size: 1.5rem;
    letter-spacing: var(--ion-letter-spacing);
}
.footer .download-app h4{
    font-size: 1.2rem;
    letter-spacing: var(--ion-letter-spacing);
}
.footer .download-app p{
    margin: 10px 0;
    font-size: .9rem;
     letter-spacing: var(--ion-letter-spacing);
}
.footer .download-app .images{
    display: flex;
    flex-direction: column;
}
.footer .download-app .images img{
    margin: 10px 0;
    object-fit: cover;
    width: 120px;
}
.footer .footer-logo {
  display: flex;
  justify-content:center;
}
.footer .footer-logo img{
  width:120px
}
.footer .footer-quote p{
  text-align:center;
  font-size:.9rem;
  margin:20px 0 0 0;
  letter-spacing: var(--ion-letter-spacing);
}
.footer .footer-links h3,
.footer .social-media h3{
  font-size:1.2rem;
}
.footer .footer-links ul,
.footer .social-media ul{
    list-style: none;
    padding: 0;
}

.footer .footer-links ul li,
.footer .social-media ul li{
    font-size: 1rem;
    padding: 10px 0;
}
.ion-fiexed{
  min-height:calc(100% - 98px);
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
