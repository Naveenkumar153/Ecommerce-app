<template>
  <!-- eslint-disable -->
  <base-layout pageDefaultBackLink="/">
    <ion-grid>
      <ion-row class="ion-justify-content-around filter">
        <ion-col size-sm="4" size-md="3" size-lg="3" size-xl="3">
          <div class="product-name">
            <h2>{{ booksData.name }}</h2>
          </div>
        </ion-col>
        <ion-col size-sm="4" size-md="3" size-lg="3" size-xl="3">
          <div class="product-filter">
            <ion-list>
              <ion-item>
                <ion-select
                  placeholder="sort by"
                  interface="popover"
                  @ionChange="sort($event)"
                >
                  <ion-select-option value="asc"
                    >Price: Low to High</ion-select-option
                  ><ion-select-option value="desc"
                    >Price: High to Low</ion-select-option
                  >
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center all-product">
        <ion-col
          v-for="product of displayUser"
          :key="product.id"
          size="10"
          size-sm="4"
          size-md="3"
          size-lg="3"
          size-xl="3"
          class="productCol"
        >
          <ion-card class="product-card" @click="productDetails(product.id)">
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
                <span>{{ product.extra_fields[0].name }}</span>
              </div>
              <div class="product-rating">
                <ion-badge color="success" slot="start" class="rate">
                  {{ product.extra_fields[2].name }}
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
  IonButton,
} from "@ionic/vue";
import { star } from "ionicons/icons";
import { reactive,} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useSortProduct from "../../hooks/sort";
export default {
  components: {
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
    IonButton,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    // getting the data useing getters
    let booksData = reactive({});
      booksData = store.getters.filterProduct;

    // share the each productDetails datas
    function productDetails(productId) {
      const productDetail = displayUser.value.find(
        (proId) => proId.id === productId
      );
      store.dispatch("productDetails", productDetail);
      console.log(productDetail);
      router.push({ path: "/laptops/" + productId });
    }

    // sort product
    const { sort, displayUser } = useSortProduct(booksData);
    return {
      booksData,
      star,
      sort,
      displayUser,
      productDetails,
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
  transform: scale(1.05);
  z-index: 10;
  box-shadow: 0 0 20px 3px rgb(0, 0, 0, 0.1);
}
img {
  height: 200px;
  width: 100%;
  -o-object-fit: contain;
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
/* .product-card-header{
  width:100%;
  height: 140px;
} */
.product-card-subtitle {
  padding: 10px;
  font-size: .9rem;
  letter-spacing: var(--ion-letter-spacing);
  color: rgb(51, 51, 51);
}
.product-rating .rate {
  font-size: 0.9rem;
  padding: 4px;
}

/* @media only screen and (min-width:768px) and (max-width:820px){
  .product-card-header{
    height: 150px;
  }
}
@media only screen and (min-width:1000px) and (max-width:3000px){
  .product-card-header{
    height: 120px;
  }
} */

@media (max-width: 576px) {
  ion-col .product-name {
    padding: 0 0 0 20px;
  }
  ion-col .product-filter {
    padding: 0 20px 0 0;
  }
    .filter{
      z-index: 99;
      position: fixed;
      width: 100%;
      background: #fff;
      top: 9.5%;
      padding: 9px 0 0 0;
    }

  .all-product{
    margin: 4rem 0 0 0;
  }
  /* .product-card-header{
    height: 115px;
  } */
}
</style>
 