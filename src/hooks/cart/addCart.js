/* eslint-disable */
import { reactive } from 'vue';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { BaseAlert } from '@/Classes/BaseAlert';

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
                await BaseAlert.loaderEnabled("Added...","dots")
                store.dispatch('cart/addToCart',{ 
                    cartValue:{
                        cartId:getCart.id,
                        proId:product.id,
                        quantity: ++cartQuandity
                    } 
                })
                BaseAlert.loaderDisabled();
            }else{
                await BaseAlert.loaderEnabled("go to cart...","dots")
                await store.dispatch('cart/retriveCart');
                BaseAlert.loaderDisabled();
                await router.push('/cart');
            }
        };
        return {
            cartName,
            addCart
        };
}

export default useCart;