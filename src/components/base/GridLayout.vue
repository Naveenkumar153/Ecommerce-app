<template>

    <ion-grid class="product-grid">
        <ion-row class="product-grid_row">
            <ion-col size-lg="3"  class="product-grid_row-col" 
            v-for="product of productData" :key="product.imageId"> 
                <div class="grid-col-color">
                    <div class="prodtext-container">
                        <span>
                           {{ product.title }}
                        </span>
                    </div>
                    <template v-for="prodImg of product.images" :key="prodImg">
                        <ion-row>
                            <ion-col size="6">
                                <div class="prodimage-container">
                                    <div class="img">
                                        <img :src="prodImg.img" :alt="prodImg.moreDetails">
                                    </div>
                                    <div class="text">
                                        <span>{{ prodImg.moreDetails }}</span>
                                    </div>
                                </div>
                                <div class="prodlink-container">{{product.link }}</div>
                            </ion-col>
                        </ion-row>
                    </template>
                </div>
            </ion-col>
        </ion-row>
    </ion-grid>

</template>


<script>

/* eslint-disable */
import { reactive } from 'vue';
import { IonGrid,IonRow,IonCol } from '@ionic/vue';

export default {

    components:{
        IonGrid,
        IonRow,
        IonCol,
    },
    setup(){
        let productData = reactive([
            {
                imageId:1,
                title:"Starting ₹199 | Men's fashion",
                link:'see all offers',
                images:[
                    // { img: '../../assets/img/productImg/clothes.jpg', moreDetails:'clothing'},
                    { img: '../../assets/img/mobile/Men.png', moreDetails:'clothing'},
                    { img: '../../assets/img/productImg/bags.jpg', moreDetails:'Bages'},
                    { img: '../../assets/img/productImg/footwear.jpg', moreDetails:'footwear'},
                    { img: '../../assets/img/productImg/watches.jpg', moreDetails:'watches'},
                ]
            },
            {
                imageId:2,
                title:"Starting ₹49 | Home, Kitchen & more",
                link:'see all offers',
                images:[
                    { img: '../../assets/img/productImg/computers.jpg', moreDetails:'computers'},
                    { img: '../../assets/img/productImg/refrigerator.jpg', moreDetails:'refrigerators'},
                    { img: '../../assets/img/productImg/kichens-items.jpg', moreDetails:'kichens'},
                    { img: '../../assets/img/productImg/electroces.jpg', moreDetails:'electronics'},
                ]
            },
            {
                imageId:3,
                title:"Starting ₹199 | Men's fashion",
                link:'see all offers',
                images:[
                    { img: '../../assets/img/productImg/clothes.jpg', moreDetails:'clothing'},
                    { img: '../../assets/img/productImg/bags.jpg', moreDetails:'Bages'},
                    { img: '../../assets/img/productImg/footwear.jpg', moreDetails:'footwear'},
                    { img: '../../assets/img/productImg/watches.jpg', moreDetails:'watches'},
                ]
            },
            {
                imageId:4,
                title:"Starting ₹199 | Men's fashion",
                link:'see all offers',
                images:[
                    { img: '../../assets/img/productImg/computers.jpg', moreDetails:'computers'},
                    { img: '../../assets/img/productImg/refrigerator.jpg', moreDetails:'refrigerators'},
                    { img: '../../assets/img/productImg/kichens-items.jpg', moreDetails:'kichens'},
                    { img: '../../assets/img/productImg/electroces.jpg', moreDetails:'electronics'},
                ]
            },
        ]);

        return {
            productData
        }
    }


}


</script>


<style lang="scss" scoped>

.product-grid{
    .product-grid_row{
        .product-grid_row-col{
            background-color: #ffffff;
            .grid-col-color{
                .prodtext-container{
                    span{
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                }
                .prodimage-container{
                    // .img{
                    //     img{

                    //     }
                    // }
                    .text{
                        span{
                            font-size: .85rem;
                        }
                    }
                }
                // .prodlink-container{

                // }
            }
        }
    }
}

</style>