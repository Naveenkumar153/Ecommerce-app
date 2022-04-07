<template>
  <!-- eslint-disable -->
  <base-layout  pageDefaultBackLink="/">
     <div class="container">
        <ion-grid>
          <ion-row class="product-cart-header">
             <ion-col size="6" class="product-cart-header-item">
                <h4 class="product-names">Product</h4>
             </ion-col>
             <ion-col size="3" class="product-cart-header-item col-start">
               <h4 class="product-quantities">Quantity</h4>
             </ion-col>
             <ion-col size="3"  class="product-cart-header-item col-end">
               <h4 class="product-prices">Price</h4>
             </ion-col>
          </ion-row>
           <ion-row class="ion-align-items-center product-cart-items">
              <ion-col size="6" class="product-img"> 
                 <ion-list lines="none">
                    <ion-item>
                       <ion-thumbnail class="img">
                         <img src="../../assets/img/home/1.jpg" alt="cart-product">
                       </ion-thumbnail>
                      <div class="product-details">
                        <h5 class="product-name">Product-name</h5>
                        <ion-button class="remove-cart" color="secondary">
                          <ion-icon :icon="trashSharp" color="light"></ion-icon>
                        </ion-button>
                      </div>
                    </ion-item>
                 </ion-list>
              </ion-col>
              <ion-col  size="3" class="col-start"> 
                  <div class="product-quantity">
                     <ion-button color="light" @click="lessQuantity">
                        <ion-icon :icon="removeSharp"></ion-icon>
                     </ion-button>
                     <span class="quantity">{{ quantity }}</span>
                     <ion-button color="light" @click="addQuantity">
                        <ion-icon :icon="addOutline"></ion-icon>
                     </ion-button>
                  </div>
              </ion-col>
              <ion-col class="col-end"> 
                 <div class="product-price-detail">
                    <span> 50000 </span>
                 </div>
              </ion-col>
           </ion-row>
           <ion-row>
             <ion-col size="6" offset="6" class="product-total">
                <div class="total-item">
                  <h4>Total</h4>
                  <p>5000</p>
                </div>
             </ion-col>
           </ion-row>
        </ion-grid>
     </div>
  </base-layout>
</template>

<script>
/* eslint-disable */
import { useStore } from "vuex";
import { 
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
   IonIcon,
} from "@ionic/vue";
import { ref } from 'vue';
import { addOutline,removeSharp,trashSharp } from "ionicons/icons";
export default {
  components:{
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonIcon,
  },
  setup() {
    let quantity      = ref(0);
    const store       = useStore();
    async function getCartData(){
      await store.dispatch('cart/retriveCart');
      const retriveCart = await store.getters['cart/retriveCart'];
      return retriveCart
    }
    console.log(getCartData())
    function addQuantity(){
      return ++quantity.value
    }
    function lessQuantity(){
      return --quantity.value
    }
    return{addOutline,removeSharp,trashSharp,addQuantity,lessQuantity,quantity}


  },
};
</script>

<style scoped>
/* eslint-disable */
/* .product-cart-items{
  border-bottom:1px solid #000;
} */
.product-cart-header{
  background: var(--ion-color-danger);
}

.product-details{
  margin:0 0 0 15px;
}
.product-details .product-name{
  font-size:.9rem;
}
.col-start{
  text-align: start;
}
.col-end{
  text-align:end;
}
.product-img{
  padding-left:0;
}
.product-total{
  border-top: 2px solid var(--ion-color-danger);
}

.total-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (min-width:576px) {
    .img{
    width:120px;
    height:120px
  }
  .product-quantity{
    width:135px;
    display:flex;
    align-items:center;
    justify-content: space-between;
  }
  .product-quantity span{
    margin:0 5px;
  }
}

@media (max-width:576px) {
  .product-cart-header h4{
    font-size:.95rem;
  }
  .product-quantity{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    justify-content: space-between;
  }
}
</style>
