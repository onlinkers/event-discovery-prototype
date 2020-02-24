<template>
  <div class="page-container">
    <div class="nav-btns">
      <img src="../assets/icons/arrow-left-light.svg" alt />
      <img src="../assets/icons/share-light.svg" alt />
    </div>
    <div class="title-container">
      <h1 class="event-title">Burning Man</h1>
      <v-btn fab text>
        <img src="../assets/icons/like-button.svg" alt />
      </v-btn>
      <img src alt />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      hasLiked: false
    };
  },
  methods: {
    openModal() {},
    dismissModal() {}
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  background-image: url("../assets/sample-img.png");
  height: 100vh;
  width: 100%;

  .nav-btns {
    position: fixed;
    top: 2%;
    width: 80%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }

  .title-container {
    position: absolute;
    top: 40%;
    width: 80%;
    left: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    .like-btn {
    }

    .event-title {
      font-family: "Josefin Sans", sans-serif;
      font-size: 2.2em;
      letter-spacing: -0.05em;
    }
  }
}
</style>