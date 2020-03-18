<template>
  <div class="page-container">
    <!-- loaded contents || TODO: create skeleton screen -->
    <NavBtns v-bind="navOptions" class="nav-btns" />
    <!-- background img -->
    <div class="background-img">
      <!-- TODO: create a copy for a dark overlay -->
      <div class="light-gradient-overlay" />
      <img :src="event.mediaLink.cover" alt class="background-img" />
    </div>

    <!-- <ExploreBar /> -->

    <!-- event details -->
    <div v-rellax="{ speed: 5 }" class="event-container">
      <!-- gallery -->
      <div class="gallery">
        <div v-for="(img, index) in activeImages" :key="`tag-${index}`" class="image-container">
          <img :src="img" alt />
        </div>
        <div v-if="event.mediaLink.host.length > 3" class="image-container">
          <h4>+{{ event.mediaLink.host.length - 3 }}</h4>
        </div>
      </div>

      <!-- tags -->
      <div class="event-tags">
        <div v-for="(tag, index) in activeTags" :key="`tag-${index}`" class="event-tags__tag">
          <h5>{{ tag }}</h5>
        </div>
      </div>

      <!-- title -->
      <div class="title-container">
        <h1>{{ event.pub.name }}</h1>
      </div>
      <!-- TODO: create a copy for dark overlay -->

      <!-- details -->
      <div class="event-details">
        <div class="event-details__detail event-location">
          <img src="../assets/icons/event-page/location.svg" alt />
          <h5>{{ event.pub.venue }}</h5>
        </div>
        <div class="event-details__detail event-date">
          <img src="../assets/icons/event-page/hourglass.svg" alt />
          <h5>{{ event.pub.date }}</h5>
        </div>
      </div>

      <!-- description -->
      <div class="event-description">
        <h5>OVERVIEW</h5>
        <p v-if="snipped">{{ event.pub.description | descriptionSnippet }}</p>
        <p v-else>{{ event.pub.description }}</p>
        <h5 v-if="snipped" @click="snipped = false">Read More</h5>
        <h5 v-else @click="snipped = true">See Less</h5>
        <!-- TODO: create copies for dark overlay -->
      </div>
    </div>
  </div>
</template>

<script lang="js">
import NavBtns from "../components/navButtons";
import * as eventData from "../assets/js/eventData.js";

export default {
  components: {
    NavBtns,
  },
  filters: {
    descriptionSnippet(value) {
      if (value.length > 300) {
        return value.slice(0, 300) + "...";
      } else {
        return value;
      }
    },
    descriptionHardSnippet(value) {
      if (value.length > 450) {
        return value.slice(0, 450) + "...";
      } else {
        return value;
      }
    },
    tagSnippet(value) {
      if (value.length > 8) {
        return value.slice(0, 8) + "...";
      } else {
        return value;
      }
    }
  },
  props: {
    eventProp: Object,
  },
  data() {
    return {
      event: this.eventProp,
      snipped: true,
      /* navButtons options */
      navOptions: {
        topType: 'share-light',
        backRoute: '/discover'
      },

      loadedContents: false
    };
  },
  computed: {
    eventRefresh() {
      const fetchedEvent = eventData.default.find(event => {
        return event.priv.id.toString() === this.$route.params.id;
      });
      return fetchedEvent;
    },
    activeTags() {
      const tagList = this.event.eventTags.host.filter(tag => {
        return tag !== '';
      });
      if (tagList.length > 4) {
        return tagList.slice(0, 4);
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
  created() {
    /* change navButtons to dark if no picture in event */
  },
  mounted() {
    /* TODO: get event from API call instead of passing an object as a prop */
    if (this.eventProp) {
      this.loadedContents = true;
    } else {
      const fetchedEvent = eventData.default.find(event => {
        return event.priv.id.toString() === this.$route.params.id;
      });
      this.event = fetchedEvent;
      /* ------------ */

      if (this.event.mediaLink.cover === "") {
        this.navOptions.topType = 'share-dark';
      }

      /* TODO: show skeleton screen before this */
      this.loadedContents = true;
    }

  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
/* DESKTOP */
@media screen and (min-width: 1000px) {
  .event-container {
    max-width: 30%;
  }
}

/* MAIN DIV */
.page-container {
  @include page-container-middle--scrollable;

  .nav-btns {
    z-index: 1000;
  }

  /* BACKGROUND IMG */
  .background-img {
    @include background-img;

    .light-gradient-overlay {
      @include background-img-gradient(true);
    }
  }

  /* ALL EVENT DETAILS */
  .event-container {
    position: absolute;
    top: 35%;
    z-index: 10;
    width: 85%;
    height: auto;
    margin-bottom: 10vh;
    // max-height: 70vh;

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
      overflow-x: hidden;
      flex-wrap: wrap;
      align-content: flex-start;
      // white-space: nowrap;
      // -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .event-tags__tag {
        @include flex-middle;
        border-radius: 15px 15px 15px 0px;
        background: white;
        height: 2.5em;
        // width: auto;
        padding: 0 1.5em 0;
        margin: 0 1em 1em 0;

        h5 {
          @include event-tag;
          user-select: none;
        }
      }
    }

    /* TITLE */
    .title-container {
      h1 {
        @include title-serif-dark;
        // display: inline;
        font-size: clamp(1.5em, 8vw, 3.5em);
      }
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
        color: $dark;
        margin-bottom: 1em;
      }
      p + h5 {
        color: $primary-alt;
      }

      h5 + h5 {
        color: $primary-alt;
      }
    }
  }
}
</style>
