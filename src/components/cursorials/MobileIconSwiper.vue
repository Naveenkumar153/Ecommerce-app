<template>
  <!-- eslint disable  -->
  <ion-grid class="mobile ion-margin-top">
    <ion-row>
      <ion-col size="12">
        <swiper
          :scrollbar="{
            hide: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <img src="../../assets/img/mobile/Men.png" alt="Men" />
            <img src="../../assets/img/mobile/Chudi.png" alt="Woman" />
            <img src="../../assets/img/mobile/Mobile.png" alt="Mobile" />
            <img src="../../assets/img/mobile/laptop.png" alt="Laptop" />
            <img src="../../assets/img/mobile/book.png" alt="Book" />
          </swiper-slide>
          <!-- <swiper-slide>
          </swiper-slide>
          <swiper-slide>
          </swiper-slide>
          <swiper-slide>
          </swiper-slide>
          <swiper-slide>
          </swiper-slide> -->
        </swiper>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
<script>
/* eslint-disable */
// Import Swiper Vue.js components
import { IonGrid, IonRow, IonCol } from "@ionic/vue";

import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    return {
      modules: [Scrollbar],
    };
  },
};
</script>

<style scoped>
.mobile {
  display: none;
}
.swiper {
  width: 20%;
  height: 30%;
}

.swiper-slide {
  text-align: start;
  /* font-size: 18px; */
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100px;
  height: 100px;
  object-fit: cover;
}

@media (max-width: 568px) {
  .mobile {
    display: block;
  }
}
</style>
