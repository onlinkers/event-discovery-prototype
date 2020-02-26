<!-- Landing page (using mapbox) -->
<template>

  <MglMap
    container     = "mapbox-container"
    :accessToken  = "accessToken"
    :mapStyle     = "mapStyle"
    :center       = "defaultMapStyle.center"
    :zoom         = "defaultMapStyle.zoom"
    @load         = "onMapLoaded"
  >
    <MapMarker  v-for = "(m, index) in events"
                :key = "`marker-${index}`"
                :name = "m.pub.name"
                :coords  = "m.priv.coordinates"
                :imgSrc = "m.mediaLink.cover" />
  </MglMap>

</template>

<script>
/* MAPBOX COMPONENTS */
import MapboxStyle from "@/assets/js/mapbox/style.json"
import MapMarker from './marker'
import { MglMap } from "vue-mapbox"

/* EVENT DATA */
import * as eventData from '@/assets/js/eventData.js'

export default {
  components: {
    MglMap,
    MapMarker
  },
  name: "Map",
  data() {
    return {
      accessToken: "pk.eyJ1Ijoib25saW5rZXJzIiwiYSI6ImNrMWQyOHV6MDAzcnIzbm9laDdna213MWYifQ.-9uLdEhCUfIYP3ot-u5zeg",
      mapStyle: MapboxStyle,
      // https://docs.mapbox.com/help/glossary/style-url/
      // https://studio.mapbox.com/
      defaultMapStyle: {
        center: [-123.221412, 49.258983],
        zoom: 12,
      },
      events: eventData.default
    }
  },

  created() {
    this.map = null;
  },

  methods: {
    onMapLoaded(event) {
      console.log("Map loaded!");
      this.map = event.map;
    }
  }
};
</script>

<style lang="scss" scoped>
#mapbox-container {
  position: absolute;
}
.background-blur {
  background: #fff;
  opacity: 0.5;
  filter: blur(1px);
  position: absolute;
  height: 100%;
  width: 100%;
}
.map-container, .map-components-wrapper {
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
</style>
