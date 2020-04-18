<template>
  <div class="PanelRows">
    <div class="FilterPanel">
        <DateFilter
          @updateState="updateFilterState"
          @updateData="updateDateFilter"
        />
        <RatingFilter
          @updateState="updateFilterState"
          @updateData="updateRatingFilter"/>
        <v-btn
          class="CategoryFilter--button"
          color="primary"
          small
          @click="filterState === 'NONE' ? updateFilterState('CATEGORY') : updateFilterState('NONE')"
        >CATEGORIES</v-btn>
    </div>

    <transition name="fade">
      <CategoryFilter
        v-if="filterState === 'CATEGORY'"
        :event-categories="eventCategories"
        :event-categories-keys="Object.keys(eventCategories)"
        :selected-categories="selectedCategories"
      />
    </transition>
  </div>
</template>

<script>
import DateFilter from "@/components/dateFilter";
import RatingFilter from "@/components/ratingFilter";
import CategoryFilter from "@/components/categoryFilter";

// import { filterArrayByArray } from '@/utils';
export default {
  name: "FilterPanel",
  components: {
    DateFilter,
    RatingFilter,
    CategoryFilter
  },
  props: {
    eventCategories: {
      type: Object
    },
    eventCategoriesKeys: {
      type: Array
    },
    selectedCategories: {
      type: Array
    }
  },
  data() {
    return {
      filterState: 'NONE'
    }
  },
  // watch: {
  //   filterState(value) {
  //     console.log('filter state', value)
  //   }
  // },
  methods: {
    updateDateFilter(newDate) {
      this.$emit('updateDateFilters', newDate)
    },
    updateRatingFilter(newRating) {
      this.$emit('updateRatingFilter', newRating)
    },
    updateFilterState(status) {
      this.filterState = status
    }
  }
}
</script>
<style lang="scss" scoped>
  .PanelRows {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 22%;
    margin-left: 15vw;
    transform: translateX(-50%);
    width: 100vw;
    @media screen and (min-width: 700px){
      left: 50%;
      transform: translateX(-50%);
      width: 40vw;
      margin-left: 0;
    }
  }
  .FilterPanel {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: scroll;
    overflow: visible;
  }

  .CategoryFilter--button {
    width: 12em;
    font-size: 0.8em;
    margin-right: 1em;
    color: black;
  }
</style>

