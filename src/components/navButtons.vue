<template>
  <div>
    <!-- top nav buttons -->
    <div class="top-nav-btns" v-show="topType === 'default-light'">
      <router-link :to="backRoute">
        <img src="../assets/icons/arrow-left-light.svg" alt>
      </router-link>
    </div>
    <div class="top-nav-btns" v-show="topType === 'default-dark'">
      <router-link :to="backRoute">
        <img src="../assets/icons/arrow-left-dark.svg" alt>
      </router-link>
    </div>
    <div class="top-nav-btns" v-show="topType === 'share-light'">
      <router-link :to="backRoute">
        <img src="../assets/icons/arrow-left-light.svg" alt>
      </router-link>
      <img src="../assets/icons/share-light.svg" alt>
    </div>
    <div class="top-nav-btns" v-show="topType === 'share-dark'">
      <router-link :to="backRoute">
        <img src="../assets/icons/arrow-left-dark.svg" alt>
      </router-link>
      <img src="../assets/icons/share-dark.svg" alt>
    </div>

    <!-- bottom nav buttons -->
    <div class="bot-nav-btns" v-show="botType === 'next-only'">
      <h5 @click="nextStep()">Next</h5>
    </div>
    <div class="bot-nav-btns" v-show="botType === 'default'">
      <h5 @click="nextStep()">Next</h5>
      <h5 @click="prevStep()">Back</h5>
    </div>
    <div class="bot-nav-btns" v-show="botType === 'default-confirm'">
      <h5 @click="nextStep()" v-if="currStep !== maxStep">Next</h5>
      <h5 @click="confirm()" v-else>Confirm</h5>
      <h5 @click="prevStep()">Back</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topType: {
      type: String,
      default: "default-light"
    },
    botType: {
      type: String,
      default: "default"
    },
    maxStep: Number,
    currStep: Number,

    backRoute: String
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
    },
    confirm() {
      this.$emit("confirm");
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
  z-index: 1000;
  a {
    display: flex;
    align-items: center;
  }
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
  z-index: 1000;
  h5 {
    user-select: none;
    cursor: pointer;
    font-family: $text-secondary;
    font-weight: 700;
    font-size: 20px;
    color: $primary-alt;
  }
}
</style>
