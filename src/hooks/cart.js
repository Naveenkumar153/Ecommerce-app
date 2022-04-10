/* eslint-disable */
import { loadingController } from '@ionic/vue';
import { reactive } from 'vue';
import { useStore } from "vuex";
import {useRouter} from 'vue-router';

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
            const loading = await loadingController.create({
                message:"Added...",
                spinner:"dots"
            })
            await loading.present();
            store.dispatch('cart/addToCart',{ 
                cartValue:{
                    cartId:getCart.id,
                    proId:product.id,
                    quantity: ++cartQuandity
                } 
            })
            loading.dismiss();
            }else{
            const loading = await loadingController.create({
                message:"go to cart...",
                spinner:"dots"
            })
            await loading.present();
            await store.dispatch('cart/retriveCart');
            loading.dismiss();
            await router.push('/cart');
            }
        };
        return {
            cartName,
            addCart
        };
}

export default useCart;