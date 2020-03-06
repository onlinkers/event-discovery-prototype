<template>
  <div class="page-container">
    <div class="background-img">
      <div class="gradient-overlay" />
      <img :src="event.mediaLink.cover" alt class="background-img" />
    </div>
    <div class="event-details">
      <div class="event-tags">
        <div class="event-tags__tag" v-for="(tag, index) in activeTags" :key="`tag-${index}`">
          <h5>{{ tag }}</h5>
        </div>
      </div>
      <h1>{{ event.pub.name }}</h1>
    </div>
    <NavBtns v-bind="navOptions" />
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
    event: Object,
  },
  data() {
    return {
      // navigation component options
      navOptions: {
        topType: 'default-light',
        backRoute: '/discover'
      },
    };
  },
  computed: {
    activeTags() {
      let tagList = this.event.eventTags.host.filter(tag => {
        return tag !== '';
      });
      if (tagList.length > 3) {
        tagList = tagList.slice(0, 3);
      }
      return tagList;
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  @include page-container-middle;
  .gradient-overlay {
    @include background-img-gradient(true);
  }
  .background-img {
    @include background-img;
  }
  .event-details {
    z-index: 2;
    width: 90%;
    .event-tags {
      display: flex;
      justify-content: flex-start;
      .event-tags__tag {
        @include flex-middle;
        border-radius: 15px 15px 15px 0px;
        background: white;
        height: 2.5em;
        // width: auto;
        padding: 0 1.5em 0;
        margin: 0 1em 0 0;
        h5 {
          @include event-tag;
        }
      }
    }
    h1 {
      @include title-serif-dark;
    }
  }
}
</style>
