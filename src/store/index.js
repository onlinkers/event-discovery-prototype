import Vue from "vue";
import Vuex from "vuex";

import events from "./events";
import userData from "./userData";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    events,
    userData
  }
});