<template>
  <div class="search-wrapper">
    <div class="search-bar">
      <div class="search-icon">
        <img src="@/assets/icons/search.png" alt="">
      </div>
      <input
        ref="autocomplete"
        v-model="searchQuery"
        placeholder="Search events, locations, dates"
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
    }
  },
}
</script>
<style lang="scss">
.search-wrapper {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 700px){
    top: 13%;
  }
  .search-bar {
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
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
    input:focus, textarea:focus, select:focus {
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
}
</style>