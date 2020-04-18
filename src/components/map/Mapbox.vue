<!-- Landing page (using mapbox) -->
<template>
  <MglMap
    container="mapbox-container"
    :access-token="accessToken"
    :map-style="mapStyle"
    :center="defaultMapStyle.center"
    :zoom="defaultMapStyle.zoom"
    @load="onMapLoaded"
  >
    <MapMarker
      v-for="(event, index) in filteredEvents"
      :key="`marker-${index}`"
      :name="event.name"
      :coords="event.venue.location.coordinates"
      :img-src="event.media.coverPhoto.baseSrc"
      @navigate="navigateToEvent(event)"
    />
  </MglMap>
</template>

<script>
/* MAPBOX COMPONENTS */
import MapboxStyle from "@/assets/js/mapbox/style.json";
import MapMarker from "./marker";
import { MglMap } from "vue-mapbox";

/* UTILITIES */
import {
  filterEventsByDates,
  filterEventsByCategoryKeys,
  filterEventsByRating
} from '@/utils';

export default {
  name: "Map",
  components: {
    MglMap,
    MapMarker
  },
  props: {
    events: {
      type: Array
    },
    categories: {
      type: Object
    },
    selectedCategories: {
      type: Array
    },
    selectedDateSpan: {
      type: Array
    },
    selectedRating: {
      type: Number
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
      filteredEvents: [],
    };
  },
  watch: {
    // watchers and initializers: (event filters)
    selectedCategories() {
      this.filteredEvents = this.filterEvents(this.events)
    },
    selectedDateSpan() {
      this.filteredEvents = this.filterEvents(this.events)
    },
    selectedRating() {
      this.filteredEvents = this.filterEvents(this.events)
    },
  },

  mounted() {
    // watchers and initializers: (event filters)
    this.filteredEvents = this.filterEvents(this.events)
  },

  methods: {
    onMapLoaded(event) {
      console.log('map loaded!') // eslint-disable-line
      this.map = event.map;
    },
    navigateToEvent(event) {
      const { _id: id } = event;
      this.$router.push({ path: `/eventpage/${id}` });
    },
    filterEvents(events) {
      // filter (TODO: BETTER FILTERING - AFTER FINAL SCHEMA CHANGES MADE)
      const filteredByCategories = filterEventsByCategoryKeys(events, this.selectedCategories)
      const filteredByDates = filterEventsByDates(filteredByCategories, this.selectedDateSpan)
      const filteredByRating = filterEventsByRating(filteredByDates, this.selectedRating)
      return filteredByRating
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
</style>
