<template>
  <!-- eslint-disable -->
  <base-layout pageDefaultBackLink="/">
    <ion-grid>
      <ion-row class="ion-justify-content-around">
        <ion-col size-sm="4" size-md="3" size-lg="3" size-xl="3">
          <div class="product-name">
            <h2>{{ booksData.name }}</h2>
          </div>
        </ion-col>
        <ion-col size-sm="4" size-md="3" size-lg="3" size-xl="3">
          <div class="product-filter">
            <ion-list>
              <ion-item>
                <ion-select placeholder="sort by" interface="popover">
                  <ion-select-option @click="sort"
                    >Clear Filter</ion-select-option
                  >
                  <ion-select-option @click="sort('asc')"
                    >Price: High to Low</ion-select-option
                  >
                  <ion-select-option @click="sort('desc')"
                    >Price: Low to High</ion-select-option
                  >
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col
          v-for="product of booksData.productsData"
          :key="product.id"
          size="10"
          size-sm="4"
          size-md="3"
          size-lg="3"
          size-xl="3"
          class="productCol"
        >
          <ion-card class="product-card">
            <img :src="product.image.url" alt="image" />
            <ion-card-header class="product-card-header">
              <ion-card-subtitle class="product-card-subtitle">
                {{ product.name }}
              </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content class="product-card-body">
              <div class="price-card">
                <h4>{{ product.price.formatted_with_symbol }}</h4>
                <p>{{ product.extra_fields[1].name }}</p>
                <span>{{ product.extra_fields[2].name }}</span>
              </div>
              <div class="product-rating">
                <ion-badge color="success" slot="start" class="rate">
                  {{ product.extra_fields[0].name }}
                  <ion-icon :icon="star"></ion-icon>
                </ion-badge>
              </div>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
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
  IonCardContent,
  IonBadge,
  IonIcon,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { star } from "ionicons/icons";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import contentHeader from "../../components/Base/BaseContainer.vue";
import useSort from "../../hooks/sort";
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
    IonCardContent,
    IonBadge,
    IonIcon,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
  },
  props: ["booksData"],
  setup() {
    const store = useStore();
    const booksData = ref([]);
    onMounted(() => {
      booksData.value = store.getters.filterProduct;
      console.log(booksData.value);
    });
    const { sort } = useSort(booksData);
    return {
      booksData,
      star,
      sort,
    };
  },
};
</script>
<style scoped>
/* eslint-disable */
.product-filter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
ion-list {
  width: 185px;
}
.product-card {
  transition: 0.6s;
}
.product-card:hover {
  cursor: pointer;
  transform: scale(1.2);
  z-index: 10;
  box-shadow: 0 0 20px 3px rgb(0, 0, 0, 0.1);
}
img {
  height: 200px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: contain;
}
.productCol {
  margin: 10px;
}
.price-card {
  padding: 10px;
}
.price-card h4 {
  color: rgb(51, 51, 51);
  font-size: 1.4rem;
  letter-spacing: var(--ion-letter-spacing);
}
.price-card p {
  font-size: 0.9rem;
  text-decoration: line-through;
  letter-spacing: var(--ion-letter-spacing);
}
.price-card span {
  font-size: 0.8rem;
  color: var(--ion-color-success);
  letter-spacing: var(--ion-letter-spacing);
}
.product-card-subtitle {
  padding: 10px;
  font-size: 1.1rem;
  letter-spacing: var(--ion-letter-spacing);
  color: rgb(51, 51, 51);
}
.product-rating .rate {
  font-size: 0.9rem;
  padding: 4px;
}
</style>
