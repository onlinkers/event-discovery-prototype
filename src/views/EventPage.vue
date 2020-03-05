<template>
  <div class="page-container">
    <img :src="event.mediaLink.cover" alt="" class="background-img" />
    <NavBtns v-bind="navOptions" />
    <h1>{{ event.priv.id }}</h1>
    <h1>{{ event.mediaLink.cover }}</h1>
    <div class="media-assets">
      <img v-for="n in 3" :key="n.id" />
    </div>
  </div>
</template>

<script lang="js">
import NavBtns from "../components/navButtons";

export default {
  components: {
    NavBtns
  },
  props: {
    event: Object
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
}
.background-img {
  @include gradient-white-img(true);
}
</style>
