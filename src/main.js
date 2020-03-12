import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/global.scss";

/* DEPENDENCY IMPORTS */

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vuetify from "./plugins/vuetify";
import VueMq from "vue-mq";
import VueRellax from "vue-rellax";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 600,
    desktop: Infinity
  }
});
library.add(fas, far, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);
/**********************/

Vue.config.productionTip = false;

Vue.use(VueRellax);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
