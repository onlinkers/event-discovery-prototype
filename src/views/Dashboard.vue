<template>
  <div class="Dashboard">
    <SearchBar />
    <mq-layout mq="desktop">
      <ExploreBar />
    </mq-layout>
    <!-- <div class="event-list">
           <h2>Popular Events World, or any date</h2>
           <DashboardCard />

    </div>-->
    <div class="event-list">
      <DashboardCard />
    </div>
  </div>
</template>

<script>
/* MAIN COMPONENTS */
import SearchBar from "../components/searchBar";
import ExploreBar from "../components/exploreBar";
import DashboardCard from "../components/dashboardCard";
import { mapActions, mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    SearchBar,
    ExploreBar,
    DashboardCard
  },
  data() {
    return {};
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
  method: {
    ...mapActions("events", ["queryAllEvents"])
  }
};
</script>

<style lang="scss" scoped>
.Dashboard {
  width: 100vw;
  height: 100%;
  background: $background;
}
.event-list {
  position: absolute;
  top: 30%;
  left: 5%;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>