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
        try{
            const api               = `carts/${payload.cartValue.cartId}`;
            const {data:addProduct} = await axios.post(api,
                {"id":`${payload.cartValue.proId}`,"quantity":`${payload.cartValue.quantity}`},
                {headers:{'Content-Type': 'application/json'}});
        }catch(error){
            console.error(error + ' Add Cart Error') 
        }
    },
    async retriveCart({commit,getters}){
        try {
            const cartId = getters.createCart;
            const api    = `carts/${cartId.id}`;
            const {data:getCartData} = await axios.get(api);
            commit('retriveCart',getCartData);
            console.log(getCartData)
        } catch (error) {
            console.error(error + 'Retrive Cart Error');
        }
    }
};
