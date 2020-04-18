<template>
  <div class="map-components-wrapper">
    <Map
      v-if="eventsLoaded"
      :events="Object.values(events)"
      :categories="eventCategories"
      :selected-categories="selectedCategories"
    />
    <SearchBar />
    <FilterPanel
      :selected-categories="selectedCategories"
      :event-categories="eventCategories"
      :event-categories-keys="Object.keys(eventCategories)"
      @updateDateFilters="updateDateFilters"
      @updateRatingFilter="updateRatingFilter"
    />
    <mq-layout mq="desktop">
      <ExploreBar />
    </mq-layout>
  </div>
</template>

<script>
/* MAIN COMPONENTS */
import Map from "@/components/map/Mapbox";
import SearchBar from "@/components/searchBar";
import ExploreBar from "@/components/exploreBar";

import FilterPanel from "@/components/filterPanel";

import { mapActions, mapState, mapMutations } from "vuex";

/* STYLES */

export default {
  name: "Discover",
  components: {
    Map,
    SearchBar,
    ExploreBar,
    FilterPanel,
  },
  data() {
    return {
      selectedCategories: [],
      selectedTimeSpan: [],
      dateFilters: [],
      ratingFilter: ''
    };
  },
  computed: {
    ...mapState('events', {
      events: state => state.general,
      eventCategories: state => state.categories,
      eventsLoaded: state => state.loaded,
    }),
  },
  watch: {
    // listener to reload states on route changes (params, queries)
    '$route.query'() {
      // listener for category filtering
      this.selectedCategories = this.$route.query.categories ? unescape(this.$route.query.categories).split(',') : [];
    },
  },
  async created() {
    // QUERY logic should be handled here
    // it will be easier to handle map re-loads, async calls, loading, etc, all in once place
    this.setEventsLoaded(false)
    await Promise.all([
      this.queryAllEvents(),
      this.queryEventCategories()
    ])
    this.setEventsLoaded(true)
  },
  mounted() {
    // In addition to the watcher, functions need to be run on mounted for the initial load
    this.selectedCategories = this.$route.query.categories ? unescape(this.$route.query.categories).split(',') : [];
  },
  methods: {
    ...mapActions('events', [
      'queryAllEvents',
      'queryEventCategories'
    ]),
    ...mapMutations('events', {
      setEventsLoaded: 'setLoaded'
    }),
    updateDateFilters(value) {
      this.dateFilters = value
    },
    updateRatingFilter(value) {
      this.ratingFilter = value
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
