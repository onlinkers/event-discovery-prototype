import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  customVariables: ["../global.scss"],
  theme: {
    themes: {
      light: {
        primary: "#4868F8",
        secondary: "#939dbe",
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: "#fff" // Not automatically applied
      },
      dark: {
        primary: colors.blue.lighten3,
        background: colors.indigo.base // If not using lighten/darken, use base to return hex
      }
    }
  }
});
