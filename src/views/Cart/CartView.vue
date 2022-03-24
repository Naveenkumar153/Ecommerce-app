<template>
  <!-- eslint-disable -->
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size-xl="5" size-lg="5" size-md="5" size-sm="12">
            <ion-card>
              <div class="img">
                <img :src="mainImg" alt="" />
              </div>
            </ion-card>
            <div class="small-img-group">
              <div class="small-img-col">
                <img
                  src="../../assets/img/home/1.jpg"
                  alt=""
                  @click="imgChange($event)"
                />
              </div>
              <div class="small-img-col">
                <img
                  src="../../assets/img/home/2.jpg"
                  alt=""
                  @click="imgChange($event)"
                />
              </div>
              <div class="small-img-col">
                <img
                  src="../../assets/img/home/3.jpg"
                  alt=""
                  @click="imgChange($event)"
                />
              </div>
              <div class="small-img-col">
                <img
                  src="../../assets/img/home/4.jpg"
                  alt=""
                  @click="imgChange($event)"
                />
              </div>
            </div>
          </ion-col>
          <ion-col size-xl="7" size-lg="7" size-md="7" size-sm="12">
            <ion-card>
              <ion-card-content>
                <ion-card-header class="product-card-body">
                  <ion-card-subtitle>Rich Dad Poor Dad</ion-card-subtitle>
                  <div class="price-card">
                    <h4>200</h4>
                    <p>400</p>
                    <span color="success">50%</span>
                  </div>
                  <div class="product-rating">
                    <ion-badge color="success" slot="start" class="rate">
                      4.3
                      <ion-icon :icon="star"></ion-icon>
                    </ion-badge>
                  </div>
                </ion-card-header>
              </ion-card-content>
            </ion-card>
            <ion-card class="ion-margin-top">
              <ion-card-content>
                <!-- <ion-header> -->
                <ion-card-subtitle>Product Details</ion-card-subtitle>
                <!-- </ion-header> -->
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro voluptas, quod iure, vel provident ad deserunt corporis,
                  id atque omnis soluta sequi et error. Nisi quo illo, quos odit
                  nulla reprehenderit, alias officiis natus non perferendis
                  quasi illum deleniti porro nemo voluptates cumque provident
                  rerum minima labore tenetur assumenda aspernatur!
                </p>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
/* eslint-disable */
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonCard,
  IonHeader,
  IonCardSubtitle,
  IonCardHeader,
  IonBadge,
  IonCardContent,
  IonIcon,
} from "@ionic/vue";
import { star } from "ionicons/icons";
import { ref, computed } from "vue";
export default {
  components: {
    IonButton,
    IonList,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonCard,
    IonHeader,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonIcon,
  },
  setup() {
    let mainImg = ref();
    mainImg = "../../assets/img/home/1.jpg";
    // let img = computed(() => {
    // });
    function imgChange(e) {
      console.log(e);
      console.log(e.target.src);
      // img.value = e.path.img.src;
      img.value = e.target.src;
    }
    return { star, mainImg, imgChange };
  },
};
</script>

<style scoped>
ion-row {
  margin: 10px;
}
ion-col {
  padding: 10px;
}

ion-card-subtitle {
  font-size: 1.3rem;
}
.price-card {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 0 0 15px;
}
.price-card h4 {
  font-size: 2rem;
}
.price-card p {
  text-decoration: line-through;
  font-size: 1rem;
}

.product-rating {
  width: 70px;
  padding: 0 0 0 15px;
}

.product-rating ion-badge {
  font-size: 1.1rem;
  border-radius: 50px;
  padding: 4px 8px;
}

.product-rating ion-badge ion-icon {
  font-size: 0.8rem;
}
.price-card span {
  font-size: 1.3rem;
}
.img {
  width: 100%;
  height: 250px;
}

.img img {
  width: 100%;
  height: 100%;
}

.small-img-group {
  display: flex;
  justify-content: space-between;
  margin: 8px 0 0 0;
}
.small-img-group .small-img-col {
  flex-basis: 24%;
  height: 75px;
}
.small-img-group .small-img-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
