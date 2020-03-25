<template>
  <div class="search-wrapper">
    <div class="search-bar">
      <div class="search-icon">
        <img src="@/assets/icons/search.png" alt />
      </div>
      <input
        ref="autocomplete"
        v-model="searchQuery"
        placeholder="Search events, locations, dates"
        @keyup.enter="handleSearch"
        @change="updateQuery"
      />
    </div>
    <!-- <div class="suggestions">
      <ul>
        <li v-for="(suggestion, index) in suggestions" :key="`suggestion-${index}`">{{ suggestion }}</li>
      </ul>
    </div>-->
  </div>
</template>
<script>
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      searchQuery: "",
      suggestions: []
    };
  },
  computed: {},
  watch: {},
  mounted() {
    EventBus.$on("sendSuggestions", payload => {
      console.log(payload);
      this.suggestions = payload;
    });
  },
  methods: {
    handleSearch() {
      this.$emit("update:query", this.searchQuery);
    },
    updateQuery() {
      console.log("loading");
      EventBus.$emit("loading", this.searchQuery);
    }
  }
};
</script>
<style lang="scss">
.search-wrapper {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 700px) {
    top: 13%;
  }
  .search-bar {
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    height: 3em;
    width: 40vw;
    transition: width 0.5s;
    @media screen and (max-width: 850px) {
      width: 70vw;
    }
    input {
      background: white;
      box-sizing: border-box;
      border: none;
      border-radius: 10px;
      color: black;
      font-weight: 600;
      height: 3em;
      padding: 0 1em;
      width: 90%;
      text-overflow: ellipsis;
    }
    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
    }
    .search-icon {
      align-self: center;
      padding: 0.4em 0 0 0.75em;
      img {
        height: 1.3em;
      }
    }
  }

  .suggestions {
    background: white;
    border-radius: 10px;
    min-height: 3em;
    width: 40vw;
    display: flex;
    margin-top: 0.5em;
    @media screen and (max-width: 850px) {
      width: 70vw;
    }

    ul {
      list-style: none;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0.2em 0;
      li {
        font-family: $text-secondary;
        font-size: 1.2em;
        font-weight: 600;
        margin: 0.5em 0 0.5em 2em;
        color: $dark;
      }
    }
  }
}
</style>
