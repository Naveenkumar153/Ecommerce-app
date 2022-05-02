/* eslint-disable */
import { reactive } from 'vue';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { BaseAlert } from '@/Classes/Base/BaseAlert';

function useCart(product){
        const store  = useStore();
        const router = useRouter();
        // add cart
        let   cartName = reactive({ show:true });
        let   getCart  = store.getters['cart/createCart'];
        const addCart = async () => {
            cartName.show  = !cartName.show
            let cartQuandity = 0;
            if(!cartName.show){
                const loaderEnabled = new BaseAlert("Added...","dots")
                await loaderEnabled.loaderEnabled("Added...","dots")
                store.dispatch('cart/addToCart',{ 
                    cartValue:{
                        cartId:getCart.id,
                        proId:product.id,
                        quantity: ++cartQuandity
                    } 
                })
                 loaderEnabled.loaderDisabled();
            }else{
                const loaderDismiss = new BaseAlert("go to cart...","dots")
                await loaderDismiss.loaderEnabled()
                await store.dispatch('cart/retriveCart');
                 loaderDismiss.loaderDisabled();
                await router.push('/cart');
            }
        };
        return {
            cartName,
            addCart
        };
}

export default useCart;