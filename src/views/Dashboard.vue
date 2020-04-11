<template>
  <div class="Dashboard">
    <div class="background" />
    <SearchBar id="searchbar" />
    <div class="event-list">
      <div class="browse-location">
        Exploring in
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <span slot="activator" class="browse-location__query" v-on="on">{{ browseLocation }}</span>
          </template>
          <v-list>
            <v-list-item v-for="item in items" :key="item.key" @click="callback">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
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
      localEvents: eventData,
      browseLocation: "Vancouver",
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ]
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
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // overflow: none;

  .browse-location {
    width: 85%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-family: $title-md;
    color: $dark;
    font-weight: bold;
    font-size: 2em;
    margin: 0 0 1em 1em;

    .browse-location__query {
      color: $primary-alt;
      margin-left: 0.25em;
      border-bottom: 2px $primary-alt solid;
    }
  }

  .list-container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // overflow: none;
  }
}
</style>
