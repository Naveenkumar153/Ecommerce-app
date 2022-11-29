/* eslint-disable */
import Axios from "axios";
import { environment } from '../environment/environment';
import { BaseAlert } from '../Classes/BaseAlert';
import { BaseToast } from "../Classes/BaseToast";
 const apiClient =  Axios.create({ baseURL: environment.apiBaseUrl });

apiClient.interceptors.request.use(
   (config) => {
    // console.log(config);
    BaseAlert.loaderEnabled(null,"dots")
    const token = process.env.VUE_APP_PRODUCT_API_PUBLIC_KEY;
    config.headers["X-Authorization"] = token;
    return config;
  },
  (error) => {
    if(error){
      BaseAlert.loaderDisabled();
      console.log(error);
      return BaseToast.toastMessageEnabled(error)
    }
  }
);

apiClient.interceptors.response.use(
   (response) => {
    BaseAlert.loaderDisabled();
    console.log(response)
    if(response){
      broadcastFriendErrorMsg(response);
      return response;
    }
  },
  (error) => {
    if(error){
      BaseAlert.loaderDisabled();
      console.log(error);
      return BaseToast.toastMessageEnabled(error)
    }
  }
);

export default apiClient;

function broadcastFriendErrorMsg(response){
  if(response.status === 0 && (response.statusText === ''|| response.statusText === 'Unknown Error')){
    BaseAlert.loaderDisabled();
    BaseToast.toastMessageEnabled('Unable to connect the server, please try again in a couple of seconds.')
  }else if(response.status === 404){
    BaseAlert.loaderDisabled()
    BaseToast.toastMessageEnabled('page not found');
  }else if(response.status === 500){
    BaseAlert.loaderDisabled()
    BaseToast.toastMessageEnabled('Server was busy try again in a couple of seconds');
  }else if(response.status === 303 || response.status === 403){
    BaseAlert.loaderDisabled()
    BaseToast.toastMessageEnabled('Server understands the request but refuses to authorize it');
  }else if(response.status === 401){
    BaseAlert.loaderDisabled()
    BaseToast.toastMessageEnabled('Authentication failed');
  }else if(response.status == 400 || response.status === 409){
    BaseAlert.loaderDisabled()
    BaseToast.toastMessageEnabled('Error occured,while uploading file');
  }
}
