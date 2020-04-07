<template>
  <div class="Dashboard">
    <div class="background" />
    <SearchBar id="searchbar" />
    <!-- <mq-layout mq="desktop">
      <ExploreBar />
    </mq-layout>-->
    <!-- <div class="event-list">
           <h2>Popular Events World, or any date</h2>
           <DashboardCard />

    </div>-->
    <div class="event-list">
      <div class="list-container">
        <DashboardCard
          v-for="(event, index) in localEvents"
          :key="`event-${index}`"
          :event="event"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* MAIN COMPONENTS */
import SearchBar from "../components/searchBar";
import DashboardCard from "../components/dashboardCard";
import { mapActions, mapState } from "vuex";

import eventData from "../assets/js/eventData";

export default {
  name: "Dashboard",
  components: {
    SearchBar,
    DashboardCard
  },
  data() {
    return {
      localEvents: eventData
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
  methods: {
    ...mapActions("events", ["queryAllEvents"])
  }
};
</script>

<style lang="scss" scoped>
.Dashboard {
  position: absolute;
  width: 100vw;
  min-height: 100%;
  height: auto;
  overflow-y: scroll;
  background: $background;

  #searchbar {
    position: fixed;
    z-index: 99;
  }
}
.event-list {
  position: absolute;
  top: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  // overflow: none;

  .list-container {
    left: 7.5%;
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    // overflow: none;
  }
}
</style>
