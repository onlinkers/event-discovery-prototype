<template>
    <div class="CategoryScroller">
        <v-chip
            v-for="categoryKey in activeCategoryKeys"
            :key="categoryKey"
            class="category-chip active-chip"
            color="#2351f4"
            ripple
            small
            @click="removeCategory(categoryKey)"
        >
        {{ eventCategories[categoryKey] }}
        </v-chip>
        <v-chip
            v-for="categoryKey in inactiveCategoryKeys"
            :key="categoryKey"
            class="category-chip inactive-chip"
            color="transparent"
            ripple
            small
            @click="addCategory(categoryKey)"
        >
        {{ eventCategories[categoryKey] }}
        </v-chip>
    </div>
</template>

<script>
import { filterArrayByArray } from '@/utils';

export default {
  name: "CategoryNavigator",
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
      activeCategoryKeys: [],
      inactiveCategoryKeys: this.eventCategoriesKeys || [],
    };
  },
  watch: {
    // watchers and initializers: selected categories
    selectedCategories() {
        this.activeCategoryKeys = this.selectedCategories;
        this.inactiveCategoryKeys = filterArrayByArray(this.eventCategoriesKeys, this.selectedCategories);
    }
  },
  mounted() {
    // watchers and initializers: selected categories
    this.activeCategoryKeys = this.selectedCategories;
    this.inactiveCategoryKeys = filterArrayByArray(this.eventCategoriesKeys, this.selectedCategories);
  },
  methods: {
    addCategory(categoryKeyToAdd) {
      // Hack to overcome the vue 'duplicate' route problem
      const queries = Object.assign({}, this.$route.query);
      const newCategories = this.selectedCategories;
      newCategories.push(categoryKeyToAdd);
      queries.categories = newCategories.join(',');
      this.$router.push({ name: 'discover', query: { ...queries } })
    },
    removeCategory(categoryKeyToRemove) {
      // Hack to overcome the vue 'duplicate' route problem
      const queries = Object.assign({}, this.$route.query);
      const newCategories = this.selectedCategories.filter((category) => category !== categoryKeyToRemove);
      queries.categories = newCategories.join(',');
      this.$router.push({ name: 'discover', query: { ...queries } })
    }
  }
}
</script>
<style lang="scss" scoped>
  .CategoryScroller {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 21%;
    left: 50%;
    margin-left: 15vw;
    transform: translateX(-50%);
    overflow-x: scroll;
    width: 100vw;

    @media screen and (min-width: 700px){
      left: 50%;
      transform: translateX(-50%);
      width: 40vw;
      top: 20%;
      margin-left: 0;

      .v-chip {
        margin-right: 0.3em;
      }
    }

    .v-chip {
      overflow: visible;
      cursor: pointer;
      margin-right: 0.1em;
    }

    .category-chip {
      text-transform: capitalize;
    }

    .active-chip {
      color: white;
    }
    .inactive-chip {
      opacity: 0.5;
    }
  }


  // Hide scrollbar
  .CategoryScroller {
    -ms-overflow-style: none;
  }
  .CategoryScroller::-webkit-scrollbar {
    display: none;
  }
</style>

