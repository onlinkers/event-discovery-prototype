<template>
    <div class="CategoryScroller">
        <v-chip
            v-for="categoryKey in EVENT_CATEGORIES_KEYS"
            :key="categoryKey"
            ripple
            small
            @click="addCategory(categoryKey)"
        >
        {{ EVENT_CATEGORIES[categoryKey] }}
        </v-chip>
    </div>
</template>

<script>
import { EVENT_CATEGORIES, EVENT_CATEGORIES_KEYS } from '../constants';

export default {
  name: "CategoryNavigator",
  props: {
    categories: {
      type: Array
    }
  },
  data() {
    return {
      EVENT_CATEGORIES,
      EVENT_CATEGORIES_KEYS
    };
  },
  methods: {
    addCategory(categoryKey) {
      // Hack to overcome the vue 'duplicate' route problem
      const queries = Object.assign({}, this.$route.query);
      const newCategories = this.categories;
      newCategories.push(categoryKey);
      queries.categories = newCategories.join(',');
      this.$router.push({ name: 'discover', query: { ...queries } })
    }
  }
}
</script>
<style lang="scss" scoped>
  .CategoryScroller {
    width: 40vw;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 21%;
    left: 50%;
    transform: translateX(-50%);
    overflow-x: scroll;
    @media screen and (min-width: 700px){
      top: 20%;
    }
    @media screen and (max-width: 850px) {
      width: 70vw;
    }

    .v-chip {
      overflow: visible;
      cursor: pointer;
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

