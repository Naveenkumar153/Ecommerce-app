/* eslint-disable */
import { loadingController } from '@ionic/vue';

class BaseAlert{
    constructor(message,spinner){
        this.message = message;
        this.spinner = spinner;
    }
    loaderEnabled(){
        loadingController.create({
            message: this.message,
            spinner: this.spinner
        }).then((res) => {
            res.present();
        })
    };
    loaderDisabled(){
       setTimeout(() => {
           loadingController.dismiss().then((res) => {
               console.log('Loading closed ! ' + res);
           }).catch((err) => {
               console.log('Error occured ' + err);
           })
       },100)
    }        
}

export {
    BaseAlert
};










