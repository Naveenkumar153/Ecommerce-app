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
   async addToCart(context,payload){ 
        try{
            const api               = `carts/${payload.cartValue.cartId}`;
            const {data:addProduct} = await axios.post(api,
                {"id":`${payload.cartValue.proId}`,"quantity":`${payload.cartValue.quantity}`},
                {headers:{'Content-Type': 'application/json'}});
                context.commit('addToCart',addProduct)
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
    },
    async updateCartItem(context,payload){
        try {
            let data = payload
            console.log(data);
            const api = `carts/${data.cartValue.cartId}/items/${data.cartValue.productId}`;
            const {data:updateData} = await axios.put(api,{"quantity":`${data.cartValue.quantity}`},
            {headers:{'Content-Type': 'application/json'}}
            )
            context.commit('updateCartItem',updateData)
            console.log(updateData)
        } catch (error) {
            console.error(error + ' update cart item error')
        }
    },
    async deleteItemToCart(context,payload){
        try {
            let data = payload
            console.log(data);
            const api = `carts/${data.cartValue.cartId}/items/${data.cartValue.productId}`;
            const { data:deleteData } = await axios.delete(api);
            console.log(deleteData);
            context.commit('deleteItemToCart',deleteData)
        } catch (error) {
            console.error(error + ' Delete cart item error')
        }
    }
};
