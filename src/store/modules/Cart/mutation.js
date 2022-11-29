/* eslint-disable */
export default {
    createTheCart(state,cart){
        state.createCart = cart;
    },
    retriveCart(state,cartData){
        state.retriveCartData = cartData
    },
    updateCartItem(state,updateData){
        state.retriveCartData = updateData
    },
    addToCart(state,payload){
        state.qty = payload.cart.total_unique_items
    },
    deleteItemToCart(state,deleteData){
        state.retriveCartData = deleteData;
        state.qty = deleteData.cart.total_unique_items;
    },
    checkout(state,checkoutData){
        state.checkout = checkoutData;
    }
};
