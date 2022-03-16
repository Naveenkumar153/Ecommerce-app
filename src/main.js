/* eslint-disable */
import { createApp } from "vue";
import { IonicVue, IonPage, IonContent } from "@ionic/vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";
import "@/theme/core.css";
import "@/theme/variables.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

// swiper styles
import "swiper/css";
import "swiper/css/bundle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Global component
import SiteHeader from "@/components/Base/SiteHeader.vue";
import SiteFooter from "@/components/Base/SiteFooter.vue";

const app = createApp(App);
app.use(IonicVue);
app.use(router);
app.use(store);
app.component("ion-page", IonPage);
app.component("ion-content", IonContent);
app.component("site-header", SiteHeader);
app.component("site-footer", SiteFooter);
router.isReady().then(() => {
  app.mount("#app");
});
