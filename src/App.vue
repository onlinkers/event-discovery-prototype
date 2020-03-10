<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <mq-layout mq="mobile">
      <ExploreBar class="explore-bar" />
    </mq-layout>
  </v-app>
</template>

<script>
import ExploreBar from "./components/exploreBar";

import "@/global.scss";
export default {
  name: "App",
  components: {
    ExploreBar
  },

  data: () => ({
    //
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.explore-bar {
  z-index: 1000;
}
</style>
