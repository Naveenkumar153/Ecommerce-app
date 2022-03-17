<template>
  <!-- eslint-disable -->
  <ion-page>
    <site-header></site-header>
    <ion-content>
      <content-header title="Books"></content-header>
      <ion-grid fixed>
        <ion-row class="ion-justify-content-center">
          <ion-col
            size-md="3"
            size-sm="4"
            size-xs="6"
            v-for="product of booksData.productsData"
            :key="product.id"
          >
            <ion-card class="product-card">
              <div class="product-card-img">
                <img
                  src="../../assets/img/home/1.jpg"
                  alt="image"
                  class="img"
                />
                <!-- <img src="{{product.image.url}}" alt="image" class="img" /> -->
              </div>
              <ion-card-header class="product-card-header">
                <ion-card-subtitle class="product-card-subtitle">
                  {{ product.name }}
                </ion-card-subtitle>
              </ion-card-header>
              <ion-content class="product-card-body">
                <div class="price-card">
                  <h5 class="product-off-price">
                    {{ product.price.formatted_with_symbol }}
                  </h5>
                  <p class="product-ori-price"></p>
                  <span class="product-discount"></span>
                </div>
                <div class="product-rating">
                  <ion-item>
                    <ion-badge color="success" slot="start">
                      <ion-icon :icon="star"></ion-icon>
                    </ion-badge>
                  </ion-item>
                </div>
              </ion-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script>
/* eslint-disable */
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonHeader,
  IonContent,
  IonCardHeader,
  IonCardSubtitle,
  IonItem,
  IonBadge,
  IonLabel,
  IonIcon,
} from "@ionic/vue";
import { star } from "ionicons/icons";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import contentHeader from "../../components/Base/BaseContainer.vue";

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    contentHeader,
    IonCard,
    IonHeader,
    IonContent,
    IonCardHeader,
    IonCardSubtitle,
    IonItem,
    IonBadge,
    IonLabel,
    IonIcon,
  },
  setup() {
    const store = useStore();
    const booksData = ref([]);
    onMounted(() => {
      booksData.value = store.getters.filterProduct;
      console.log(booksData.value);
      console.log(typeof booksData.value);
    });
    return {
      booksData,
      star,
    };
  },
};
</script>
<style scoped>
/* eslint-disable */
.product-card .product-card-img .img {
  min-height: 150px;
  width: 100%;
  object-fit: cover;
}
</style>
