<template>
    <div class="Moments">
        <SearchBar />
        <mq-layout mq="desktop">
            <ExploreBar />
        </mq-layout>
        <div class="event-list">
            <MomentSlide :events="events" />
        </div>
    </div>
</template>

<script>
/* MAIN COMPONENTS */
import SearchBar from "../components/searchBar";
import ExploreBar from "../components/exploreBar";
import MomentSlide from "../components/momentSlide";
import { mapActions, mapState } from "vuex";

export default {
    name: "Moments",
    components: {
        SearchBar,
        ExploreBar,
        MomentSlide
    },
    data() {
        return {
            
        };
    },
    computed: {
        ...mapState('events', {
            events: state => state.general
        })
    },
    created() {
        // QUERY logic should be handled here
        // it will be easier to handle map re-loads, async calls, loading, etc
        this.queryAllEvents()
    },
    methods: {
        ...mapActions('events', [
        'queryAllEvents'
        ]),
    }
}
</script>

<style lang="scss" scoped>

.event-list {
    position: absolute;
    top: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
</style>