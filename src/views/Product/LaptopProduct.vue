<template>
  <!-- eslint-disable -->
  <base-layout pageDefaultBackLink="/">
    <div class="container">
      <ion-grid>
          <ion-row class=" ion-justify-content-center filter">
            <ion-col size="6" size-sm="4" size-md="3" size-lg="3" size-xl="3">
              <div class="product-name">
                <h2>{{ booksData.name }}</h2>
              </div>
            </ion-col>
            <ion-col  size="6" size-sm="4" size-md="3" size-lg="3" size-xl="3">
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
            <ion-row class="all-product">
                <ion-col
                  v-for="product of displayUser"
                  :key="product.id"
                  size="12"
                  size-sm="6"
                  size-md="4"
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
    </div>
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
import { reactive, } from "vue";
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
      booksData = store.getters["product/filterProduct"];

    // share the each productDetails datas
    function productDetails(productId) {
      const productDetail = displayUser.value.find(
        (proId) => proId.id === productId
      );
      store.dispatch("product/productDetails", productDetail);
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
<style lang="scss" scoped>
/* eslint-disable */
.product-filter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
ion-list {
  max-width: 185px;
}
img {
  height: 200px;
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.product-card {
  transition: 0.6s;
  .product-card:hover{
    cursor: pointer;
    transform: scale(1.05); 
    z-index: 10;
    box-shadow: 0 0 20px 3px rgba(234, 220, 220, 0.1);
  }
  .product-card-header{
    .product-card-subtitle{
      padding: 10px;
      font-size: .9rem;
      letter-spacing: var(--ion-letter-spacing);
      color: rgb(51, 51, 51);
    }
  }
  .product-card-body{
    .price-card {
      padding: 10px;
        h4{
          color: rgb(51, 51, 51);
          font-size: 1.4rem;
          letter-spacing: var(--ion-letter-spacing);
        }
        p{
          font-size: 0.9rem;
          text-decoration: line-through;
          letter-spacing: var(--ion-letter-spacing);
        }
        span{
          font-size: 0.8rem;
          color: var(--ion-color-success);
          letter-spacing: var(--ion-letter-spacing);
        }
    }
  }
  .product-rating{
    .rate {
     font-size: 0.9rem;
     padding: 4px;
   }
  }
}



@media (min-width:1200px){
  .product-card-subtitle{
    height:145px;
  }
}
@media (min-width:992px) and (max-width:1200px){
  .product-card-subtitle{
    height: 210px;
  }
}
@media (max-width:992px){
  .product-card-subtitle{
        height: 192px;
  }
}
@media (max-width:768px){
  .product-card-subtitle{
    height:140px;
  }
}
@media (max-width: 576px) {
  .filter{
      z-index: 99;
      position: fixed;
      width: 100%;
      background: #fff;
      top: 11%;
      left: 0;
    }
  .all-product{
    margin: 4rem 0 0 0;
  }
  .product-card-subtitle{
    height:140px;
  }
}

</style>
