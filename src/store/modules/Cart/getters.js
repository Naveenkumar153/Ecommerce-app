/* eslint-disable */
export default {
    createCart(state){
        return state.createCart;
    },
    retriveCart(state){
        return state.retriveCartData;
    },
    // productCount(state){
    //     console.log(state.productCount)
    //     return state.productCount;
    // },
    updateCartItem(state){
        return state.retriveCartData;
    },
    addToCart(state){
        return state.qty;
    }
};
