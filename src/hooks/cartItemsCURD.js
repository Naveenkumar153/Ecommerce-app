/* eslint-disable */

import { reactive } from 'vue';

function useCartItemCURD(retreiveData,id){
    let product = reactive({});
    function returnProduct(){
        if(retreiveData.value.cart){
           let product = retreiveData.value.cart.line_items.find(proId => {
                if(proId.id === id){
                    console.log(proId);
                    return proId
                }
            })
            return product
        }else if(retreiveData.value.line_items){
            let  product = retreiveData.value.line_items.find(proId => {
                if(proId.id === id){
                    return proId
                }
            })
            // console.log(product);
            return product
        }
    }
    product = returnProduct();
    return {
        product
    }
}

export default useCartItemCURD