<template>
  <MglMarker :coordinates="coords" @click="emitNavigationEvent">
    <div slot="marker" class="marker">
      <svg
        width="100%"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33 64.1508L34.8088 62.5714C50.0189 49.2902 57.75 37.6936 57.75 27.5C57.75 13.0643 46.4831 2.75 33 2.75C19.5169 2.75 8.25 13.0643 8.25 27.5C8.25 37.6936 15.9811 49.2902 31.1912 62.5714L33 64.1508Z"
          fill="white"
        />
      </svg>
      <img
        class="marker__image"
        :src="imageSrc"
        :alt="imageKey"
        @error="imageAltSrc" />
    </div>
    <MglPopup
      ><div>{{ name }}</div></MglPopup
    >
  </MglMarker>
</template>

<script>
/**
 * TO DO: Find a way to minimize image resolution and scale marker sizes
 * So then when there is 100000+ images, it doesn't load slowly or quickly
 * Will probably need some resizing done in AWS so that when images are uploaded,
 * smaller size images are generated alongside for icons and stuff.
 */

import { MglPopup, MglMarker } from "vue-mapbox";

export default {
  name: "MapMarker",
  components: {
    MglPopup,
    MglMarker
  },
  props: {
    name: String,
    coords: Array,
    imgSrc: String
  },
  data() {
    return {
      imageSrc: this.imgSrc
    }
  },
  computed: {
    imageKey: function() {
      return (
        "image-" +
        this.name
          .replace(/\s/g, "_")
          .toLowerCase()
          .substring(0, 15)
      );
    },
  },
  methods: {
    emitNavigationEvent() {
      this.$emit("navigate");
    },
    imageAltSrc() {
      this.imageSrc = require("@/assets/media/no-image-default.png")
    }
  }
};
</script>

<style lang="scss" scoped>
.marker {
  max-width: 20vh;
  width: 60px;
  overflow: hidden;

  .marker__image {
    width: 56%;
    height: 56%;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    margin: 22%;
    margin-top: 11%;
  }
}
</style>
