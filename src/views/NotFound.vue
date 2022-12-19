<template>
  <h2>Not Found</h2>
  <div class="btn-container">
    <ion-button @click="goToProduct" class="btn">Go Home Page</ion-button>
  </div>
</template>

<script>
/* eslint-disable */
import { IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
export default {
  components:{
    IonButton
  },
  setup(){
    const router = useRouter();
    // go home page
    function goToProduct(){
      // router.replace('/');
      router.replace('/')
    }

    return {
      goToProduct
    }
  }
}
</script>

<style lang="scss" scoped>
//  .btn-container{
//   .btn{

//   }
//  }
</style>
