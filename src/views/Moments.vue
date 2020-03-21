<template>
    <div class="Moments">
        <SearchBar />
        <mq-layout mq="desktop">
         <ExploreBar />
        </mq-layout>
    </div>
</template>

<script>
/* MAIN COMPONENTS */
import SearchBar from "../components/searchBar";
import ExploreBar from "../components/exploreBar";

export default {
    name: "Moments",
    components: {
        SearchBar,
        ExploreBar
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
@import "@/assets/scss/variables.scss";
</style>