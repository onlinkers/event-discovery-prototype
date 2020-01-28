<template>
<div class="search-wrapper">
  <div class="search-bar">
    <div class="search-icon">
      <img src="@/assets/icons/search.png" alt="">
    </div>
    <input v-model="searchQuery" ref="autocomplete" placeholder="Search events, locations, dates">
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
  mounted() {

  }
}
</script>
<style lang="scss">
.search-wrapper {
  position: absolute;
  top: 10%;
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
    font-size: 18px;
    height: 3em;
    width: 30vw;
    transition: width 0.5s;
    @media screen and (max-width: 850px) {
      font-size: 16px;
      width: 70vw;
    }
    @media screen and (max-width: 650px) {
      font-size: 14px;
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