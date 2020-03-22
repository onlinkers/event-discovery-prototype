<template>
  <div>
    <!-- top nav buttons -->
    <div v-show="topType === 'default-light'" class="top-nav-btns">
      <router-link :to="backRoute">
        <img src="../assets/icons/arrow-left-light.svg" alt>
      </router-link>
    </div>
    <div v-show="topType === 'default-dark'" class="top-nav-btns">
      <router-link :to="backRoute">
        <img src="../assets/icons/arrow-left-dark.svg" alt>
      </router-link>
    </div>
    <div v-show="topType === 'share-light'" class="top-nav-btns">
      <router-link :to="backRoute">
        <img src="../assets/icons/arrow-left-light.svg" alt>
      </router-link>
      <img src="../assets/icons/share-light.svg" alt>
    </div>
    <div v-show="topType === 'share-dark'" class="top-nav-btns">
      <router-link :to="backRoute">
        <img src="../assets/icons/arrow-left-dark.svg" alt>
      </router-link>
      <img src="../assets/icons/share-dark.svg" alt>
    </div>

    <!-- bottom nav buttons -->
    <div v-show="botType === 'next-only'" class="bot-nav-btns">
      <h5 @click="nextStep()">Next</h5>
    </div>
    <div v-show="botType === 'default'" class="bot-nav-btns">
      <h5 @click="nextStep()">Next</h5>
      <h5 @click="prevStep()">Back</h5>
    </div>
    <div v-show="botType === 'default-confirm'" class="bot-nav-btns">
      <h5 v-if="currStep !== maxStep" @click="nextStep()">Next</h5>
      <h5 v-else @click="confirm()">Confirm</h5>
      <h5 @click="prevStep()">Back</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topType: {
      type: String,
      default: "default-dark"
    },
    botType: {
      type: String,
      required: false
    },
    maxStep: {
      type: Number,
      required: false
    },
    currStep: {
      type: Number,
      required: false
    },
    backRoute: {
      type: String,
      required: true
    }
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

  a {
    @include hoverAnims--largeZoom;
    z-index: 1000;
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
