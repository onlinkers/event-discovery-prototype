<template>
  <div>
    <!-- top nav buttons -->
    <div class="top-nav-btns" v-show="this.topType === 'default-light'">
      <img src="../assets/icons/arrow-left-light.svg" alt />
    </div>
    <div class="top-nav-btns" v-show="this.topType === 'default-dark'">
      <img src="../assets/icons/arrow-left-dark.svg" alt />
    </div>
    <div class="top-nav-btns" v-show="this.topType === 'share-light'">
      <img src="../assets/icons/arrow-left-light.svg" alt />
      <img src="../assets/icons/share-light.svg" alt />
    </div>
    <div class="top-nav-btns" v-show="this.topType === 'share-dark'">
      <img src="../assets/icons/arrow-left-dark.svg" alt />
      <img src="../assets/icons/share-dark.svg" alt />
    </div>

    <!-- bottom nav buttons -->
    <div class="bot-nav-btns" v-show="this.botType === 'next-only'">
      <h5 @click="nextStep()">Next</h5>
    </div>
    <div class="bot-nav-btns" v-show="this.botType === 'default'">
      <h5 @click="nextStep()">Next</h5>
      <h5 @click="prevStep()">Back</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topType: String,
    botType: String
  },
  data() {
    return {};
  },
  methods: {
    nextStep() {
      this.$emit("next");
    },
    prevStep() {
      this.$emit("back");
    }
  }
};
</script>

<style lang="scss" scoped>
.top-nav-btns {
  position: fixed;
  top: 0%;
  left: 5%;
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.bot-nav-btns {
  position: fixed;
  bottom: 0%;
  left: 10%;
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-content: center;
  h5 {
    font-family: $text-secondary;
    font-weight: 700;
    font-size: 20px;
    color: $primary-alt;
  }
}
</style>
