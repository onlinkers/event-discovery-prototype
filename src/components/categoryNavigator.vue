<template>
    <div class="CategoryScroller">
        <v-chip
            v-for="categoryKey in activeCategoryKeys"
            :key="categoryKey"
            class="active-chip"
            color="#2351f4"
            ripple
            small
            @click="removeCategory(categoryKey)"
        >
        {{ EVENT_CATEGORIES[categoryKey] }}
        </v-chip>
        <v-chip
            v-for="categoryKey in inactiveCategoryKeys"
            :key="categoryKey"
            class="inactive-chip"
            color="transparent"
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
import { filterArrayByArray } from '../utils';

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
      EVENT_CATEGORIES_KEYS,
      activeCategoryKeys: [],
      inactiveCategoryKeys: EVENT_CATEGORIES_KEYS,
    };
  },
  watch: {
    categories() {
        this.activeCategoryKeys = this.categories;
        this.inactiveCategoryKeys = filterArrayByArray(EVENT_CATEGORIES_KEYS, this.categories);
    }
  },
  mounted() {
    this.activeCategoryKeys = this.categories;
    this.inactiveCategoryKeys = filterArrayByArray(EVENT_CATEGORIES_KEYS, this.categories);
  },
  methods: {
    addCategory(categoryKey) {
      // Hack to overcome the vue 'duplicate' route problem
      const queries = Object.assign({}, this.$route.query);
      const newCategories = this.categories;
      newCategories.push(categoryKey);
      queries.categories = newCategories.join(',');
      this.$router.push({ name: 'discover', query: { ...queries } })
    },
    removeCategory(categoryKey) {
      // Hack to overcome the vue 'duplicate' route problem
      const queries = Object.assign({}, this.$route.query);
      const newCategories = this.categories.filter((category) => category !== categoryKey);
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

