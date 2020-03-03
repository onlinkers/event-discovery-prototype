<template>
  <div class="page-container">
    <NavBtns :top-type="'default-dark'" />
    <div class="background-img">
      <img
        src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
        class=""
      >
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
  @include page-container-middle;
}
</style>
