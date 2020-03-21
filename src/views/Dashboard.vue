<template>
    <div class="Dashboard">
        <SearchBar />
        <mq-layout mq="desktop">
         <ExploreBar />
        </mq-layout>
        <div class="event-list">
           <h2>Popular Events World, or any date</h2> 
            <DashboardCard />

        </div>
    </div>
</template>

<script>
/* MAIN COMPONENTS */
import SearchBar from "../components/searchBar";
import ExploreBar from "../components/exploreBar";
import DashboardCard from "../components/dashboardCard";

export default {
    name: "Dashboard",
    components: {
        SearchBar,
        ExploreBar,
        DashboardCard
    },
    data() {
        return {
            
        };
    },

    method: {

    }
}
</script>

<style lang="scss" scoped>

.event-list {
    position: absolute;
    top: 20%;
    width: 90%;
    left: 5%;
    display: flex;
    flex-direction: row;
}
</style>