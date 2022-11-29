<template>
  <!-- eslint-disable -->
  <base-layout  pageDefaultBackLink="/">
     <div class="container">
        <ion-grid v-if="dataHereOrNot(retreiveData)">
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
                    v-for="cart in cartItem(retreiveData)"
                    :key="cart.id">
              <ion-col size="6" class="product-img"> 
                 <ion-list lines="none">
                    <ion-item>
                       <ion-thumbnail class="img">
                         <img :src="cart.image.url" alt="cart-product">
                       </ion-thumbnail>
                      <div class="product-details">
                        <h5 class="product-name">{{ cart.product_name.slice(0,10) }}...</h5>
                        <ion-button class="remove-cart" color="secondary" 
                        @click="deleteItemToCart(cart.id)">
                          <ion-icon :icon="trashSharp" color="light"></ion-icon>
                        </ion-button>
                      </div>
                    </ion-item>
                 </ion-list>
              </ion-col>
              <ion-col  size="3" class="col-start"> 
                  <div class="product-quantity">
                    <!-- :disabled="quantity" -->
                     <ion-button :disabled="disableBtn(cart.quantity)" color="light"
                      @click="removeItemToCart(cart.id)">
                        <ion-icon :icon="removeSharp"></ion-icon>
                     </ion-button>
                     <span class="quantity">{{ quantity(cart.quantity) }}</span>
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
                  <p>{{ subTotal(retreiveData) }}</p>
                </div>
             </ion-col>
           </ion-row>
        </ion-grid>
        <ion-grid v-else>
            <ion-row>
              <ion-col size="12" class="ion-align-items-center">
                  <div class="emp-cart">
                      <h4>Your cart is empty</h4>
                      <div class="emp-cart-img">
                        <img src="../../assets/empty-cart.png" alt="">
                      </div>
                      <ion-button class="emp-cart-btn" color="danger" fill="outline" @click="goToProduct"> Purcharse </ion-button>
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
import { reactive,computed,watch,onUnmounted } from 'vue';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { addOutline,removeSharp,trashSharp } from "ionicons/icons";
import  useCartItemCURD from '../../hooks/cart/cartItemsCURD';
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
    retreiveData = computed(() => {
      return store.getters['cart/retriveCart']; 
    })
    // destory
    onUnmounted(() => {
      retreiveData.value = null;
      console.log(retreiveData.value)
    })
    // check data if here or not
    let dataHereOrNot = reactive({});
        dataHereOrNot = computed(() => {
      return function(retreiveData){
        if(retreiveData.line_items == 0){
          console.log('first')
          console.log( retreiveData)
           return false;
         }else if(retreiveData.line_items){
           console.log('second ' )
           console.log( retreiveData)
           return true;
         }else if(retreiveData.cart.total_items == 0){
           console.log('thired')
           console.log(retreiveData)
           return false;
         }else if(retreiveData.cart.line_items){
           console.log('fourth')
           console.log(retreiveData)
           return true;
         }
      }
    })
    // update cart data
     let  cartItem = computed(() => {
       return function(retreiveData){
         if(retreiveData.line_items){
           return retreiveData.line_items
         }else if(retreiveData.cart.line_items){
           return retreiveData.cart.line_items
         }
       }
    })
     let  quantity = computed(() => {
        return function(price){
          return price
        }
    });
     let  disableBtn = computed(() => {
       return function(price){
          if(1 == price) 
             return true;
          else 
            return false;
       }
    });
     let  subTotal = computed(() => {
       return function(retreiveData){
            if(retreiveData.line_items){
              return retreiveData.subtotal.formatted_with_symbol
            }else if(retreiveData.cart){
              return retreiveData.cart.subtotal.formatted_with_symbol
            }
       }
    }); 

    let  addItemToCart  =  async (id) => {
       if(retreiveData.value.cart){
         let { product } = useCartItemCURD(retreiveData,id);
           // await// BaseAlert.loaderEnabled("Added...","dots");
           await store.dispatch('cart/updateCartItem',{
            cartValue:{
              cartId   : retreiveData.value.cart.id,
              productId: product.id,
              quantity : ++product.quantity
            }
          })
         // BaseAlert.loaderDisabled();
        }else if(retreiveData.value.line_items){
            let { product } = useCartItemCURD(retreiveData,id);
            // await// BaseAlert.loaderEnabled("Added...","dots");
            await store.dispatch('cart/updateCartItem',{
              cartValue:{
                cartId   : retreiveData.value.id,
                productId: product.id,
                quantity : ++product.quantity
              }
            })
           // BaseAlert.loaderDisabled();
        }else {
          console.log('failed');
        }
    };
    let removeItemToCart = async (id) => {
        if(retreiveData.value.cart){
          let { product } = useCartItemCURD(retreiveData,id);
          // await// BaseAlert.loaderEnabled("Removed...","dots");
           await store.dispatch('cart/updateCartItem',{
            cartValue:{
              cartId   : retreiveData.value.cart.id,
              productId: product.id,
              quantity : --product.quantity
            }
          })
         // BaseAlert.loaderDisabled();
        }else if(retreiveData.value.line_items){
            console.log(retreiveData.line_items)
            let { product } = useCartItemCURD(retreiveData,id);
             // await// BaseAlert.loaderEnabled("Removed...","dots");
             await store.dispatch('cart/updateCartItem',{
              cartValue:{
                cartId   : retreiveData.value.id,
                productId: product.id,
                quantity : --product.quantity
              }
            })
           // BaseAlert.loaderDisabled();
        }else {
          console.log('failed');
        }
    };
    let deleteItemToCart = async (id) => {
         if(retreiveData.value.cart){
          let { product } = useCartItemCURD(retreiveData,id);
          console.log(product)
          // await// BaseAlert.loaderEnabled("Deleted...","dots");
          await store.dispatch('cart/deleteItemToCart',{
            cartValue:{
              cartId   : retreiveData.value.cart.id,
              productId: product.id,
            }
          })
         // BaseAlert.loaderDisabled();
          console.log(retreiveData)
        }else if(retreiveData.value.line_items){
            console.log(retreiveData)
            console.log(retreiveData.value.line_items)
            let { product } = useCartItemCURD(retreiveData,id);
            // await// BaseAlert.loaderEnabled("Deleted...","dots");
            await store.dispatch('cart/deleteItemToCart',{
                cartValue:{
                  cartId   : retreiveData.value.id,
                  productId: product.id,
                }
             })
           // BaseAlert.loaderDisabled();
            console.log(retreiveData)
        }else {
          console.log('failed');
        }
    };
    function goToProduct(){
      router.replace('/');
    }
    return{
      addOutline,
      removeSharp,
      trashSharp,
      retreiveData,
      addItemToCart,
      removeItemToCart,
      goToProduct,
      quantity,
      subTotal,
      cartItem,
      deleteItemToCart,
      dataHereOrNot,
      disableBtn
    }
  },
};
</script>

<style lang="scss" scoped>
/* eslint-disable */
/* .product-cart-items{
  border-bottom:1px solid #000;
} */
.product-cart-header{
  background: var(--ion-color-danger);
  margin:2rem 0 0 0;
}

.product-details{
  margin:0 0 0 15px;
  .product-name{
    font-size:.9rem;
  }
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

.emp-cart{
  text-align:center;
  .emp-cart-btn{
    margin:20px 0;
  }
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
