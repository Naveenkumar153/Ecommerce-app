<template>
  <!-- eslint-disable -->
  <base-layout  pageDefaultBackLink="/">
     <div class="container">
        <ion-grid v-if="getData.line_items">
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
           <ion-row class="ion-align-items-center product-cart-items" 
                    v-for="cart in getData.line_items"
                    :key="cart.id">
              <ion-col size="6" class="product-img"> 
                 <ion-list lines="none">
                    <ion-item>
                       <ion-thumbnail class="img">
                         <img :src="cart.image.url" alt="cart-product">
                       </ion-thumbnail>
                      <div class="product-details">
                        <h5 class="product-name">{{ cart.product_name.slice(0,10) }}...</h5>
                        <ion-button class="remove-cart" color="secondary">
                          <ion-icon :icon="trashSharp" color="light"></ion-icon>
                        </ion-button>
                      </div>
                    </ion-item>
                 </ion-list>
              </ion-col>
              <ion-col  size="3" class="col-start"> 
                  <div class="product-quantity">
                    <!-- :disabled="lessQuantityDisableOrEnable" -->
                     <ion-button  color="light" @click="removeItemToCart(cart.id)">
                        <ion-icon :icon="removeSharp"></ion-icon>
                     </ion-button>
                     <span class="quantity">{{ cart.quantity }}</span>
                     <!-- :disabled="addQuantityDisableOrEnable"  -->
                     <ion-button color="light" @click="addItemToCart(cart.id)">
                        <ion-icon :icon="addOutline"></ion-icon>
                     </ion-button>
                  </div>
              </ion-col>
              <ion-col class="col-end"> 
                 <div class="product-price-detail">
                    <span> {{ cart.line_total.formatted_with_symbol}} </span>
                 </div>
              </ion-col>
           </ion-row>
           <ion-row>
             <ion-col size="6" offset="6" class="product-total">
                <div class="total-item">
                  <h4>Total</h4>
                  <p>{{ getData.subtotal.formatted_with_symbol }}</p>
                </div>
             </ion-col>
           </ion-row>
        </ion-grid>
        <ion-grid v-else>
            <ion-row>
              <ion-col size="12" class="ion-align-items-center">
                  <div class="render ">
                      <h4>Your cart is empty</h4>
                      <ion-button color="danger" fill="outline" @click="goToProduct"> Purcharse </ion-button>
                  </div>
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
  IonThumbnail,
  IonLabel,
  IonIcon,
  loadingController,
} from "@ionic/vue";
import { reactive,computed } from 'vue';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
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
    loadingController,
  },
  setup() {
    const store       = useStore();
    const router      = useRouter();
    let retreiveData  = reactive({});
    // Cart data logic
    let  getData = computed(() => {
       return retreiveData =  store.getters['cart/retriveCart']; 
     })
    // update cart data
    // let quantity = computed((price) => price);
    // let subTotal = computed((subtotal) => subtotal); 
    
    let  addItemToCart  =  async (id) => {
        let product = getData.value.line_items.find(proId => {
           if(proId.id === id){
             console.log(proId);
             return proId
           }
        })
        console.log(product);
        const loading = await loadingController.create({
                message:"Added...",
                spinner:"dots"
            })
        await loading.present();
        let data =  await store.dispatch('cart/updateCartItem',{
          cartValue:{
            cartId   : getData.value.id,
            productId: product.id,
            quantity : product.quantity++
          }
        })
        let values =  await store.getters['cart/updateCartItem']; 
        retreiveData  = values.cart
        // retreiveData.value = values.cart;
        console.log(retreiveData);
        console.log(getData.value);
        loading.dismiss();
    };
    let removeItemToCart = async (id) => {
        let product = getData.value.line_items.find(proId => {
           if(proId.id === id){
             console.log(proId);
             return proId
           }
        })
        console.log(product);
        const loading = await loadingController.create({
                message:"Removed...",
                spinner:"dots"
            })
        await loading.present();
        let data =  await store.dispatch('cart/updateCartItem',{
          cartValue:{
            cartId   : getData.id,
            productId: product.id,
            quantity : product.quantity--
          }
        })
        loading.dismiss();
        console.log(data)
    }
      console.log(getData.value);
    
    function goToProduct(){
      router.replace('/');
    }
    // Quantity logic
    
    // let addQuantityDisableOrEnable = computed(() => 10 == quantity.value ? true : false)
    // let lessQuantityDisableOrEnable = computed(() => {
    //    if(1 == quantity.value || 1 > quantity.value){
    //      return true;
    //    }else{
    //      false
    //    }
    // })
    // function addQuantity(){
    //   return ++quantity.value
    // }
    // function lessQuantity(){
    //   return --quantity.value
    // }
    return{
      addOutline,
      removeSharp,
      trashSharp,
      // addQuantity,
      // lessQuantity,
      // quantity,
      // addQuantityDisableOrEnable,
      // lessQuantityDisableOrEnable,
      retreiveData,
      addItemToCart,
      removeItemToCart,
      goToProduct,
      getData
      // quantity,
      // subTotal
    }


  },
};
</script>

<style scoped>
/* eslint-disable */
/* .product-cart-items{
  border-bottom:1px solid #000;
} */
 .ripple-parent {
    position: relative;
    overflow: hidden;
  }
.product-cart-header{
  background: var(--ion-color-danger);
  margin:2rem 0 0 0;
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

.render{
  text-align:center;
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
