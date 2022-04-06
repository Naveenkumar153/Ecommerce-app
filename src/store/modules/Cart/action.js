/* eslint-disable */
import axios from "@/Services/AxiosInterceptor";
export default {
   async createCart({commit}){
        try {
            const api             = 'carts';
            const {data:cartData} = await axios.get(api);
            commit('createTheCart',cartData)
            console.log(cartData);
        } catch (error) {
            console.error(error)
        }
    },
   async addToCart(_context,payload){
        // let data = JSON.stringify(payload)
        let data     = payload
        let quantity = data.cartValue.quantity.toString()
        console.log(quantity)
        try{
            const api               = `carts/${data.cartValue.cartId}`;
            const {data:addProduct} = await axios.post(api,
                `'{"id":"${data.cartValue.proId}","quantity":${quantity}}'`,
                {
                    headers:{'Content-Type': 'application/json'}
                });
            console.log(addProduct)
        }catch(error){
            console.error(error + ' Add Product Error')
        }
    }
};
