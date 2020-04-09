module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      // sass: {
      //   prependData: `@import "~@/assets/scss/variables.sass"`
      // },
      scss: {
        prependData: `
          @import "~@/assets/scss/variables.scss";
          @import "~@/assets/scss/mixins.scss";
          `
      }
    }
  }
};