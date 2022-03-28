<template>
  <!-- eslint-disable -->
  <base-layout pageDefaultBackLink="/books">
    <div class="container">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size-xl="5" size-lg="5" size-md="5" size-sm="12" size="12">
            <ion-card>
              <div class="img">
                <img :src="mainImg" alt="" />
              </div>
            </ion-card>
            <div class="small-img-group">
              <div class="small-img-col" v-for="image of product.assets.slice(0,4)">
                <img
                  :src="image.url"
                  :alt="image.filename"
                  @click="imgChange($event)"
                />
              </div>
            </div>
            <ion-button class="cart-btn">
              <ion-icon :icon="cartOutline"></ion-icon> Add To Cart</ion-button
            >
          </ion-col>
          <ion-col size-xl="7" size-lg="7" size-md="7" size-sm="12" size="12">
            <ion-card>
              <ion-card-content>
                <ion-card-header class="product-card-body">
                  <ion-card-subtitle>{{ product.name }}</ion-card-subtitle>
                  <div class="price-card">
                    <h4>{{ product.price.formatted_with_symbol }}</h4>
                    <p>{{ product.extra_fields[1].name }}</p>
                    <span color="success">{{
                      product.extra_fields[0].name
                    }}</span>
                  </div>
                  <div class="product-rating">
                    <ion-badge color="success" slot="start" class="rate">
                      {{ product.extra_fields[2].name }}
                      <ion-icon :icon="star"></ion-icon>
                    </ion-badge>
                  </div>
                </ion-card-header>
              </ion-card-content>
            </ion-card>
            <ion-card class="ion-margin-top">
              <ion-card-content>
                <ion-card-subtitle>Product Details</ion-card-subtitle>
                {{ product.description.replace(/(<([^>]+)>)/ig, "") }}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </base-layout>
</template>

<script>
/* eslint-disable */
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonCard,
  IonHeader,
  IonCardSubtitle,
  IonCardHeader,
  IonBadge,
  IonCardContent,
  IonIcon,
} from "@ionic/vue";
import { star, cartOutline } from "ionicons/icons";
import { ref } from "vue";
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    IonButton,
    IonList,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonCard,
    IonHeader,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonIcon,
  },
  setup() {
    let   mainImg = ref("");
    const store   = useStore();
    let   product = reactive({});
          product = store.getters.productDetails;
    mainImg.value = product.assets[0].url;
    function imgChange(e) {
      mainImg.value = e.target.src;
    }
    return { cartOutline, star, product, mainImg, imgChange };
  },
};
</script>

<style scoped>
ion-row {
  margin: 10px;
}
ion-col {
  padding: 10px;
}

ion-card-subtitle {
  font-size: 1.3rem;
}
.price-card {
  margin: 1rem 0;
}
.price-card h4 {
  font-size: 2rem;
  color: var(--ion-color-product-price);
}
.price-card p {
  text-decoration: line-through;
  font-size: 1rem;
}

.price-card span {
  color: var(--ion-color-success);
}

.cart-btn {
  width: 100%;
  margin: 1rem 0 0 0;
  background: var(--ion-background-button-color);
}
.product-rating {
  width: 70px;
}

.product-rating ion-badge {
  font-size: 1.1rem;
  border-radius: 50px;
  padding: 4px 8px;
}

.product-rating ion-badge ion-icon {
  font-size: 0.8rem;
}
.price-card span {
  font-size: 1.3rem;
}
.img {
  width: 100%;
  height: 250px;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.small-img-group {
  display: flex;
  /* justify-content: space-between; */
  margin: 8px 0 0 0;
}
.small-img-group .small-img-col {
  flex-basis: 24%;
  height: 75px;
}
.small-img-group .small-img-col img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
