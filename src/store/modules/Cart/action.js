/* eslint-disable */
import axios from "@/Services/AxiosInterceptor";
export default {
   async createCart({commit}){
       let response;
        try {
            const api      = 'carts';
                  response = await axios.get(api);
        } catch (err) {
            const error = new Error(err || 'Failed to fetch')
            throw error
        }
        if(response.status >= 200 && response.status <= 299){
            commit('createTheCart',response.data)
        }
    },
   async addToCart(context,payload){ 
       let response;
        try{
            const api      = `carts/${payload.cartValue.cartId}`;
                  response = await axios.post(api,
                {"id":`${payload.cartValue.proId}`,"quantity":`${payload.cartValue.quantity}`},
                {headers:{'Content-Type': 'application/json'}});
                
        }catch(err){
            const error = new Error(err || 'Failed to fetch')
            throw error 
        }

        if(response.status >= 200 && response.status <= 299){
            context.commit('addToCart',response.data)
        }
    },
    async retriveCart({commit,getters}){
        let response;
        try {
            const cartId = getters.createCart;
            const api    = `carts/${cartId.id}`;
            response     = await axios.get(api);
            console.log(response)
        } catch (err) {
            const error = new Error(err || 'Failed to fetch')
            throw error
        }

        if(response.status >= 200 && response.status <= 299){
            commit('retriveCart',response.data);
        }
    },
    async updateCartItem(context,payload){
        let response;
        try {
            let data = payload
            const api = `carts/${data.cartValue.cartId}/items/${data.cartValue.productId}`;
            response  = await axios.put(api,{"quantity":`${data.cartValue.quantity}`},
            {headers:{'Content-Type': 'application/json'}}
            )
        } catch (err) {
            const error = new Error(err || 'Failed to fetch')
            throw error
        }
        if(response.status >= 200 && response.status <= 299){
            context.commit('updateCartItem',response.data)
        }

    },
    async deleteItemToCart({commit},payload){
        let response;
        try {
            let data = payload
            console.log(data);
            const api = `carts/${data.cartValue.cartId}/items/${data.cartValue.productId}`;
            response = await axios.delete(api);
        } catch (err) {
            const error = new Error(err || 'Failed to fetch')
            throw error
        }
        if(response.status >= 200 && response.status <= 299){
            commit('deleteItemToCart',response.data);
        }
        
    },
    // checkout
    async checkout({commit},payload){
        let response;
        console.log(payload)
        try{
            let data = payload.cartId.id;
            let api  = `checkouts/${data}`;
            response = await axios.get(api);;
            console.log(response)
        }catch(err){
            const error = new Error(err || 'Failed to checkout');
            throw error
        }

        if(response.status === 200 || response.status === 201){
            commit('deleteItemToCart',response.data);
        }
    }
};

   
