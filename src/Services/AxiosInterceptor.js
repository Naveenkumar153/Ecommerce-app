/* eslint-disable */
import Axios from "axios";

const apiClient = Axios.create({ baseURL: `https://api.chec.io/v1/` });

apiClient.interceptors.request.use(
  (config) => {
    const token = process.env.VUE_APP_PRODUCT_API_PUBLIC_KEY;
    config.headers["X-Authorization"] = token;
    return config;
  },
  (error) => {
    return Promise.reject(error + " Api request Error");
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error + " Api response Error");
  }
);

export default apiClient;
