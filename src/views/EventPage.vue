<template>
  <div class="page-container">
    <NavBtns v-bind="navOptions" />
    <div class="background-img">
      <!-- <img
        src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
      /> -->
    </div>
    <div class="media-assets">
      <img
        v-for="n in 3"
        :key="n.id"
        :src="eventDetails.mediaLink"
      >
    </div>
  </div>
</template>

<script lang="js">
import NavBtns from '../components/navButtons';

export default {
  components: {
    NavBtns
  },
  props: {
    eventDetails: Object
  },
  data() {
    return {
      // navigation component options
      navOptions: {
        topType: 'default-light',
        backRoute: '/discover'
      }
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  @include page-container-middle;
  .background-img {
    @include gradient-white-background(
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      true
    );
  }
}
</style>
