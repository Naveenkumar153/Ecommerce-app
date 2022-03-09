<template>
<!-- eslint-disable  -->
    <ion-menu side="start" menu-id="myMenu" content-id="main">
        <ion-content>
            <ion-icon :icon="addOutline" class="menu-close" @click="menuClose"></ion-icon>
            <div class="menu-header-background"></div>
            <div class="header-content">
                <ion-thumbnail slot="start" class="header-content__img">
                        <img src="https://media.istockphoto.com/photos/portrait-of-a-smiling-young-businessman-picture-id1297832726?b=1&k=20&m=1297832726&s=170667a&w=0&h=L4wrhC9DI1fCmtKs9z2O1tzuOpSuekY9os4zBBaQFJg=" alt="photo">
                </ion-thumbnail>
                <ion-label><h2 class="header-content__username">Naveen</h2></ion-label>
            </div>
            <ion-list lines="none" class="menu-items">
                <ion-item class="menu-item">
                   <ion-icon :icon="personOutline"/>Men</ion-item>
                <ion-item class="menu-item">
                   <ion-icon :icon="personOutline"/>Women</ion-item>
                <ion-item class="menu-item">
                   <ion-icon :icon="personOutline"/>Laptop</ion-item>
                <ion-item class="menu-item">
                   <ion-icon :icon="personOutline"/>Mobile</ion-item>
                <ion-item class="menu-item">
                   <ion-icon :icon="personOutline"/>Books</ion-item>
            </ion-list>
            <ion-menu-toggle>
                <ion-item></ion-item>
            </ion-menu-toggle>
        </ion-content>
    </ion-menu>
    <ion-router-outlet id="main"></ion-router-outlet>
</template>

<script>
/* eslint-disable */
import {
    IonMenu,
    IonRouterOutlet,
    IonItem,
    IonMenuToggle,
    IonLabel,
    IonThumbnail,
    IonList,
    IonIcon,
    menuController,
} from '@ionic/vue';
import { personOutline, addOutline } from 'ionicons/icons';
export default {
    components:{
        IonMenu,
        IonRouterOutlet,
        IonThumbnail,
        IonItem,
        IonMenuToggle,
        IonLabel,
        IonList,
        IonItem,
        IonIcon,
        menuController,
    },
    setup(){
        let menuClose = () => {
            menuController.close('myMenu')
        }
        return{
            personOutline,
            addOutline,
            menuClose
        }
    }
}
</script>

<style scoped>
/* eslint-disable */
.active-item {
    color: var(--ion-color-primary);
    font-weight: 500;
}
ion-icon{
    color:var(--ion-color-secondary-contrast);
    margin: 0 15px 0 0;
}
.menu-close{
    position: absolute;
    font-size: 2.7rem;
    color: #fff;
    right: 0px;
    top: 3px;
    transform: rotate(45deg);
    cursor:pointer;
}
.menu-header-background{
    height: 180px;
    width: 350px;
    background:#7590d6;
    background:linear-gradient(90deg,#7590d6 0%,#4d71d7 100%);
    box-shadow: 0px 1px 10px rgba(98,140,255,0.5);
}
.header-content{
    position: absolute;
    top: 30px;
    left: 15px;
    display:flex;
    align-items:center;
}
.header-content .header-content__img{
    width: 100px;
    height: 100px;
    border: 5px solid #fff;
    /* border:7px solid #5e7ccc; */
}
.header-content .header-content__username{
    color: #fff;
    font-size: 1.5rem;
    margin: 0 0 0 20px;
}
.menu-items{
    margin:0px;
}
.menu-item{
    padding-left:15px;
    margin-bottom:20px;
}



@media(min-width: 768px) {
  ion-router-outlet {
    margin-top: 63px;
  }
}
@media(max-width: 768px) {
    ion-router-outlet {
        margin-top: 56px;
    }
}
</style>