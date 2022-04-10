/* eslint-disable */
export default {
    createTheCart(state,cart){
        state.createCart = cart;
    },
    retriveCart(state,cartData){
        console.log(cartData)
        state.retriveCartData = cartData
    },
    productCount(state,count){
        state.productCount = count
    },
    updateCartItem(state,updateData){
        state.retriveCartData = updateData
    },
    addToCart(state,payload){
        console.log(payload);
        state.qty++;
        // const product = payload;
        // const productInCartIndex = state.items.findIndex(
        //     (ci) => ci.productId === productData.id
        // ); 
        // console.log(product);
        // console.log(productInCartIndex)
    }
};
