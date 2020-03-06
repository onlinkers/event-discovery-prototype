<template>
  <div class="map-components-wrapper">
    <Map @mapLoad="loadMap" />
    <SearchBar />
  </div>
</template>

<script>
/* MAIN COMPONENTS */
import Map from "@/components/map/Mapbox";
import ExploreBar from "@/components/exploreBar";
import SearchBar from "@/components/searchBar";

/* EVENT DATA */
import events from "@/assets/js/eventData.js";

/* STYLES */

export default {
  name: "Discover",
  components: {
    Map,
    SearchBar
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      eventList: events,
      mapLoaded: false
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    });
  },
  methods: {
    loadMap() {
      setTimeout(() => {
        this.mapLoaded = true;
      }, 2000);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.background-blur {
  background: #fff;
  opacity: 0.5;
  filter: blur(1px);
  position: absolute;
  height: 100%;
  width: 100%;
}
.map-container,
.map-components-wrapper {
  display: block;
  position: absolute;
  width: 100vw;
  height: 100%;
  min-height: 30vh * 2;
  top: 0%;
  margin: 0 auto;
}
.mgl-map-wrapper {
  position: absolute !important;
}
.mapboxgl-canvas-container {
  position: absolute;
}
::-webkit-scrollbar {
  height: 4px;
  width: 4px;
  background: none;
}
::-webkit-scrollbar-thumb {
  background: grey;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  border-radius: 1ex;
  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  -webkit-border-radius: 1ex;
}
::-webkit-scrollbar-corner {
  background: none;
}
</style>
