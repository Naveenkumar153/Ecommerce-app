/* eslint-disable */
export default {
    createTheCart(state,cart){
        state.createCart = cart;
    },
    retriveCart(state,cartData){
        // console.log(cartData)
        state.retriveCartData = cartData
    },
    productCount(state,count){
        state.productCount = count
    },
    updateCartItem(state,updateData){
        state.retriveCartData = updateData
        console.log(state.retriveCartData)
    },
    addToCart(state){
        state.qty++;
    },
    deleteItemToCart(state,deleteData){
        console.log(deleteData)
        state.retriveCartData = deleteData;
        state.qty--;
    }
};
