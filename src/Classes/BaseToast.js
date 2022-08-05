import { toastController } from "@ionic/vue";

export class BaseToast{
    static async toastMessageEnabled(message){
       const toast = await toastController.create({
            message  :  message,
            duration :  4000,
            position : 'bottom',
        })
        await toast.present();
    };
    static error(message){
        this.toastMessageEnabled(message);
    }
    static info(message){
        this.toastMessageEnabled(message);
    }
    static warning(message){
        this.toastMessageEnabled(message);
    }
    static success(message){
        this.toastMessageEnabled(message);
    }
     
}