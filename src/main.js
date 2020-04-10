import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/global.scss";

/* DEPENDENCY IMPORTS */

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vuetify from "./plugins/vuetify";
import VueMq from "vue-mq";
import VueRellax from "vue-rellax";
import toasted from "./plugins/toasted";
import Moment from "vue-moment";

// VueMQ for quick media queries and view rendering
Vue.use(VueMq, {
  breakpoints: {
    mobile: 600,
    desktop: Infinity
  }
});

// FontAwesomeIcon Initializations
library.add(fas, far, fab);
dom.watch();
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Vue relax for parallax effects
Vue.use(VueRellax);

// Vue moment for date and time filter, rendering, and operations
Vue.use(Moment);

/**********************/

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  toasted,
  render: h => h(App)
}).$mount("#app");
