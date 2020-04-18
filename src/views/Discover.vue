<template>
  <div class="map-components-wrapper">
    <Map :events="Object.values(events)" @mapLoad="loadMap"/>
    <SearchBar />
    <mq-layout mq="desktop">
      <ExploreBar />
    </mq-layout>
  </div>
</template>

<script>
/* MAIN COMPONENTS */
import Map from "@/components/map/Mapbox";
import SearchBar from "@/components/searchBar";
import ExploreBar from "../components/exploreBar";

import { mapActions, mapState } from "vuex";

/* STYLES */

export default {
  name: "Discover",
  components: {
    Map,
    SearchBar,
    ExploreBar
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      mapLoaded: false
    };
  },
  computed: {
    ...mapState("events", {
      events: state => state.general
    })
  },
  created() {
    // QUERY logic should be handled here
    // it will be easier to handle map re-loads, async calls, loading, etc
    this.queryAllEvents();
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    });
  },
  methods: {
    ...mapActions("events", [
      "queryAllEvents"
    ]),
    loadMap() {
      setTimeout(() => {
        this.mapLoaded = true;
      }, 2000);
    }
  },
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
