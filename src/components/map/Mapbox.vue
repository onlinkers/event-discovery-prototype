<!-- Landing page (using mapbox) -->
<template>
  <div>
    <MglMap
      id="map"
      container="mapbox-container"
      :access-token="accessToken"
      :map-style="mapStyle"
      :center="defaultMapStyle.center"
      :zoom="defaultMapStyle.zoom"
      @load="onMapLoaded"
    >
      <MapMarker
        v-for="(event, index) in events"
        :key="`marker-${index}`"
        :name="event.name"
        :coords="event.venue.location.coordinates"
        :img-src="event.media.coverPhoto.baseSrc"
        @navigate="navigateToEvent(event)"
      />
      <!-- TODO: wrap geocoder in div and add icons -->
      <MglGeocoderControl
        v-model="searchQuery"
        :access-token="accessToken"
        class="map-search"
        @results="handleSearch"
      />
    </MglMap>
  </div>
</template>

<script>
/* MAPBOX COMPONENTS */
import MapboxStyle from "@/assets/js/mapbox/style.json";
import MapMarker from "./marker";
import { MglMap } from "vue-mapbox";
import MglGeocoderControl from "vue-mapbox-geocoder";

/* UTILITIES */

export default {
  name: "Map",
  components: {
    MglMap,
    MapMarker,
    MglGeocoderControl
  },
  props: {
    events: {
      type: Array
    }
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
      mapStyle: MapboxStyle,
      // https://docs.mapbox.com/help/glossary/style-url/
      // https://studio.mapbox.com/
      defaultMapStyle: {
        center: [-123.120735, 49.28273],
        zoom: 12
      },
      searchQuery: "",
      suggestions: []
    };
  },

  created() {
    this.map = null;
    this.geocoderControl = null;
  },
  mounted() {},

  methods: {
    onMapLoaded(event) {
      this.map = event.map;
    },
    navigateToEvent(event) {
      const { _id: id } = event;
      this.$router.push({ path: `/eventpage/${id}` });
    },
    handleSearch(event) {
      // TODO: middle marker, and possible backend stuff for 'user suggestions'
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

.search-icon {
  position: fixed;
  top: 10%;
}
</style>
