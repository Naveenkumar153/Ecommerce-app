/* eslint-disable */
import { loadingController} from '@ionic/vue';

export class BaseAlert{
    constructor( ){}
    static async loaderEnabled(message,spinner){
       const alert =  await loadingController.create({
            message: message,
            spinner: spinner
        })
        await alert.present();  
    };
    static async loaderDisabled(){
    //    setTimeout(() => {
    //        loadingController.dismiss().then((res) => {
    //            console.log('Loading closed ! ' + res);
    //        }).catch((err) => {
    //            console.log('Error occured ' + err);
    //        })
    //     },100)
    await loadingController.dismiss()
    }  
}












