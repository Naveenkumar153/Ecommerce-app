<template>
  <!-- eslint-disable -->
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar> -->
          <ion-list lines="none" class="list">
            <ion-item>home</ion-item>
            <ion-item>about</ion-item>
            <ion-item>contact</ion-item>
            <ion-item>project</ion-item>
          </ion-list>
      <!-- </ion-toolbar> -->
    </ion-header>
    <ion-content>
      <div class="ion-fiexed"></div>
      <div class="footer">
        <ion-grid>
            <ion-row>
                <ion-col  size-xl="3" size-lg="3" size-md="3" size-sm="12" size="12">
                  <div class="download-app">
                    <h3>Shop Non-Shop on NP Shop</h3>
                    <h4>Download Our App</h4>
                    <p>Download App for Android and ios mobile phone</p>
                    <div class="images">
                      <img src="../../assets/app-google.png" alt="Google Play">
                      <img src="../../assets/app-mac.png" alt="App Store">
                    </div>
                  </div>
                </ion-col>
                <ion-col size-xl="3" size-lg="3" size-md="3" size-sm="12" size="12">
                  <div class="footer-logo">
                    <img src="../../assets/img/logo/logo.png" alt="">
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
                      <li>Coupons</li>
                      <li>Blog Post</li>
                      <li>Return Policy</li>
                      <li>Join Affiliate</li>
                    </ul>
                  </div>
                </ion-col>
                <ion-col  size-xl="3" size-lg="3" size-md="3" size-sm="12" size="12">
                  <div class="social-media">
                    <h3>Follow Us</h3>
                    <ul lines="none">
                      <li>Facebook</li>
                      <li>Twitter</li>
                      <li>Instagram</li>
                      <li>Youtube</li>
                    </ul>
                  </div>
                </ion-col>
            </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
/* eslint-disable */
import {
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonList,
  IonItem,
  IonFooter,
} from "@ionic/vue";
// import { star } from "ionicons/icons";
// import { ref, computed } from "vue";
export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonHeader,
    IonToolbar,
    IonList,
    IonItem,
    IonFooter,
  },
  setup() {
  },
};
</script>

<style scoped>

.list{
  display: flex;
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
</style>
