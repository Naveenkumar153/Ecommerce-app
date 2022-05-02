/* eslint-disable */
import { loadingController,toastController } from '@ionic/vue';

class BaseAlert{
    constructor(){}
    static loaderEnabled(message,spinner){
        loadingController.create({
            message: message,
            spinner: spinner
        }).then((res) => {
            res.present();  
        })
    };
    static loaderDisabled(){
       setTimeout(() => {
           loadingController.dismiss().then((res) => {
               console.log('Loading closed ! ' + res);
           }).catch((err) => {
               console.log('Error occured ' + err);
           })
       },100)
    }     
    static toastMessageEnabled(message,time){
        toastController.create({
            message  :  message,
            duration :  time,
            position : 'bottom',
        }).then((res) => {
            res.present();
        })
    };
    static toastMessageDisabled(){
        setTimeout(() => {
            toastController.dismiss()
        },2000);
    }   
}

export {
    BaseAlert
};










