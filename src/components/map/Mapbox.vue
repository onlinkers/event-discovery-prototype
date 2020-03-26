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
      <!-- <img src="@/assets/icons/search.png" alt class="search-icon" /> -->
      <MglGeocoderControl
        v-model="searchQuery"
        :access-token="accessToken"
        class="map-search"
        @results="handleSearch"
      />
    </MglMap>
    <!-- <SearchBar id="searchbar" @update:query="updateQuery" /> -->
  </div>
</template>

<script>
/* MAPBOX COMPONENTS */
import MapboxStyle from "@/assets/js/mapbox/style.json";
import MapMarker from "./marker";
import { MglMap } from "vue-mapbox";
import MglGeocoderControl from "vue-mapbox-geocoder";
import SearchBar from "@/components/searchBar";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

/* UTILITIES */
// import { EventBus } from "@/event-bus.js";

export default {
  name: "Map",
  components: {
    MglMap,
    MapMarker,
    // SearchBar,
    MglGeocoderControl
  },
  props: {
    events: {
      type: Array
    }
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoib25saW5rZXJzIiwiYSI6ImNrMWQyOHV6MDAzcnIzbm9laDdna213MWYifQ.-9uLdEhCUfIYP3ot-u5zeg",
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
  mounted() {
    // EventBus.$on("results", event => {
    //   console.log("payload: ", event);
    //   this.defaultInput = event;
    // });
    // this.geocoderControl = new MapboxGeocoder({
    //   accessToken: this.accessToken
    // });
    // console.log(this.geocoderControl);
    // this.geocoderControl.addTo("#map");
    // this.geocoderControl.on("loading", data => {
    //   console.log(data);
    // });
    // this.geocoderControl.on("results", results => {
    //   console.log(results.features);
    //   EventBus.$emit("sendSuggestions", results.features);
    //   // const input = results.query ? results.query.join("") : "";
    //   // this.$emit("update:input", input);
    //   // this.map.flyTo({
    //   //   center: [
    //   //     -74.5 + (Math.random() - 0.5) * 10,
    //   //     40 + (Math.random() - 0.5) * 10
    //   //   ],
    //   //   essential: true // this animation is considered essential with respect to prefers-reduced-motion
    //   // });
    // });
  },

  methods: {
    onMapLoaded(event) {
      // console.log("Map loaded!");
      this.map = event.map;
    },
    navigateToEvent(event) {
      const { _id: id } = event;
      this.$router.push({ path: `/eventpage/${id}` });
    },
    updateQuery(payload) {
      // console.log(payload);
      const results = this.geocoderControl.query(payload);
      // console.log(results);
    },
    handleSearch(event) {
      // console.log(event);
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
