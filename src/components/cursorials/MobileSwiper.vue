<template>
<!-- eslint-disable  -->
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="../../assets/img/home/1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/img/home/2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/img/home/3.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/img/home/4.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/img/home/5.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/img/home/6.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/img/home/7.jpg" alt=""></swiper-slide>
  </swiper>
</template>
<script>
/* eslint-disable */
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>

<style scoped>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>