<template>
  <div class="page-container">
    <!-- background img -->
    <div class="background-img">
      <div class="gradient-overlay" />
      <img :src="event.mediaLink.cover" alt class="background-img" />
    </div>

    <NavBtns v-bind="navOptions" />
    <ExploreBar />

    <!-- event details -->
    <div class="event-container">
      <!-- gallery -->
      <div class="gallery">
        <div
          class="image-container"
          v-for="(img, index) in activeImages"
          :key="`tag-${index}`"
        >
          <img :src="img" alt />
        </div>
        <div class="image-container" v-if="event.mediaLink.host.length > 3">
          <h4>+{{ event.mediaLink.host.length - 3 }}</h4>
        </div>
      </div>

      <!-- tags -->
      <div class="event-tags">
        <div
          class="event-tags__tag"
          v-for="(tag, index) in activeTags"
          :key="`tag-${index}`"
        >
          <h5>{{ tag }}</h5>
        </div>
      </div>

      <!-- title -->
      <h1>{{ event.pub.name }}</h1>

      <!-- details -->
      <div class="event-details">
        <div class="event-details__detail event-location">
          <img src="../assets/icons/event-page/location.svg" alt />
          <h5>{{ event.pub.venue }}</h5>
        </div>
        <div class="event-details__detail event-date">
          <img src="../assets/icons/event-page/hourglass.svg" alt="" />
          <h5>{{ event.pub.date }}</h5>
        </div>
      </div>

      <!-- description -->
      <div class="event-description">
        <h5>OVERVIEW</h5>
        <p v-if="snipped">{{ event.pub.description | snippet }}</p>
        <p v-else>{{ event.pub.description }}</p>
        <h5 v-if="snipped" @click="snipped = false">Read More</h5>
      </div>
    </div>
    <div class="media-assets">
      <img v-for="n in 3" :key="n.id" />
    </div>
  </div>
</template>

<script lang="js">
import NavBtns from "../components/navButtons";
import ExploreBar from "../components/exploreBar";

export default {
  components: {
    NavBtns,
    ExploreBar
  },
  filters: {
    snippet(value) {
      if (value.length > 150) {
        return value.slice(0, 150) + "...";
      }
    }
  },
  props: {
    event: Object,
  },
  data() {
    return {
      // navigation component options
      navOptions: {
        topType: 'share-light',
        backRoute: '/discover'
      },
      snipped: true
    };
  },
  computed: {
    activeTags() {
      const tagList = this.event.eventTags.host.filter(tag => {
        return tag !== '';
      });
      if (tagList.length > 3) {
        return tagList.slice(0, 3);
      } else {
        return tagList;
      }
    },
    activeImages() {
      const imageList = this.event.mediaLink.host;
      if (imageList.length > 3) {
        return imageList.slice(0, 3);
      } else {
        return imageList;
      }
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

  .event-container {
    position: absolute;
    bottom: 15%;
    z-index: 2;
    width: 85%;

    /* IMAGE GALLERY */
    .gallery {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      padding-bottom: 5%;

      .image-container {
        height: 4em;
        width: 4em;
        margin: 0 0.5em;
        background-color: $primary-alt;
        border-radius: 10px;
        @include flex-middle;

        img {
          object-fit: fill;
          height: 100%;
          width: 100%;
          border-radius: 10px;
        }

        h4 {
          font-size: 1.5em;
          font-weight: 600;
          font-family: $text-primary;
          color: white;
        }
      }
    }

    /* EVENT TAGS */
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

    /* TITLE */
    h1 {
      @include title-serif-dark;
    }

    /* DATE & LOCATION */
    .event-details {
      .event-details__detail {
        display: flex;
        flex-direction: row;
        margin: 0.5em 0;

        h5 {
          @include event-detail;
          margin-left: 0.5em;
        }
      }
    }

    /* DESCRIPTION */
    .event-description {
      margin: 2em 0 1.5em;

      h5 {
        @include event-detail;
        margin-bottom: 0.5em;
      }

      p {
        @include event-detail;
        font-weight: 500;
        margin-bottom: 1em;
      }
      p + h5 {
        color: $primary-alt;
      }
    }
  }
}
</style>
