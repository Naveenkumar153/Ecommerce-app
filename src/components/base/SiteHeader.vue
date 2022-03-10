<template>
<!-- eslint-disable  -->
    <ion-page>
        <ion-header collapse="fade" :translucent="true" class="mobile-header">
          <ion-toolbar>
            <ion-buttons slot="start" class="menuBtn">
              <ion-menu-button menu="myMenu"></ion-menu-button>
            </ion-buttons>
            <ion-title slot="start">
               <div class="site-logo">
                  <img src="../../assets/img/logo.png" alt="logo" class="logo">
               </div>
            </ion-title>
            <ion-list slot="start" class="list ion-text-center" lines="none" >
              <ion-item class="list-item">Men</ion-item>
              <ion-item class="list-item">Woman</ion-item>
              <ion-item class="list-item">Laptop</ion-item>
              <ion-item class="list-item">Mobile</ion-item>
              <ion-item class="list-item">Books</ion-item>
            </ion-list>
            <ion-buttons slot="end">
              <div class="header-icons">
                <ion-button>
                  <div>
                    <ion-icon :icon='personOutline' class="icon"/>
                    <span class="icon-text">person</span>
                  </div>
                </ion-button>
                <ion-button>
                  <div>
                    <ion-icon :icon="cartOutline" class="icon"/>
                    <span class="icon-text">cart</span>
                  </div>
                </ion-button>
              </div>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
        </ion-content>
    </ion-page>
</template>

<script>
/* eslint-disable */
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonMenuButton,
  } from '@ionic/vue';
import { cartOutline,personOutline } from 'ionicons/icons';
export default {
  components:{
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonMenuButton,
  },
  setup(){
    return{
      cartOutline,
      personOutline
    }
  }
}
</script>

<style scoped>
/* eslint-disable */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

html{
  font-family: 'Roboto', sans-serif;
}
.site-logo{
  width: 60px;  
  height: 75px;
  object-fit: cover;
}
.site-logo .logo{
  object-fit: cover;
  width:100%;
  height:100%;
}
.list{
    display: flex;
    width: calc(60% - 10px);
}
 .list-item{
   padding: 0 6px;
   font-weight:500;
   letter-spacing: 0.7px;
   color:#282c3f;
   cursor:pointer;
 } 
 .header-icons .icon{
    width: 30px;
    height: 23px;
 }
 .header-icons .icon-text{
    display: block;
    font-size: 10px;
 }
 .list-item:hover{
   border-bottom:2px solid #ee5f73;
   color:#ee5f73;
 }
@media(min-width:820px){
  .menuBtn{
    display: none;
  }
}
@media(max-width:820px){
  .list{
    display:none;
  }
}
</style>