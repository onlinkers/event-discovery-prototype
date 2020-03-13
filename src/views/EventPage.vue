<template>
  <div class="page-container">
    <!-- background img -->
    <div class="background-img">
      <div class="gradient-overlay" />
      <img :src="backgroundImg" alt class="background-img" />
    </div>

    <NavBtns v-bind="navOptions" class="nav-btns" />
    <!-- <ExploreBar /> -->

    <!-- event details -->
    <div v-rellax="{ speed: 10 }" class="event-container">
      <!-- gallery -->
      <div class="gallery">
        <div
          v-for="(img, index) in activeImages"
          :key="`tag-${index}`"
          class="image-container"
        >
          <img :src="img.baseSrc" alt />
        </div>
        <div v-if="numPhotos > 3" class="image-container">
          <h4>+{{ numPhotos }}</h4>
        </div>
      </div>

      <!-- tags -->
      <div class="event-tags">
        <div
          v-for="(tag, index) in activeTags"
          :key="`tag-${index}`"
          class="event-tags__tag"
        >
          <h5>{{ tag }}</h5>
        </div>
      </div>

      <!-- title -->
      <h1>{{ eventName }}</h1>

      <!-- details -->
      <div class="event-details">
        <div class="event-details__detail event-location">
          <img src="../assets/icons/event-page/location.svg" alt />
          <h5>{{ venueName }}</h5>
        </div>
        <div class="event-details__detail event-date">
          <img src="../assets/icons/event-page/hourglass.svg" alt="" />
          <h5>{{ startDate }}</h5>
        </div>
      </div>

      <!-- description -->
      <div class="event-description">
        <h5>OVERVIEW</h5>
        <p v-if="snipped">{{ description | snippet }}</p>
        <p v-else>{{ description }}</p>
        <h5 v-if="snipped" @click="snipped = false">Read More</h5>
        <h5 v-else @click="snipped = true">See Less</h5>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import NavBtns from "../components/navButtons";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    NavBtns,
  },
  filters: {
    snippet(value) {
      if (value.length > 150) {
        return value.slice(0, 150) + "...";
      } else {
        return value;
      }
    },
    hardSnippet(value) {
      if (value.length > 300) {
        return value.slice(0, 300) + "...";
      } else {
        return value;
      }
    }
  },
  data() {
    return {
      // navigation component options
      navOptions: {
        topType: 'share-light',
        backRoute: '/discover'
      },
      snipped: true,

      backgroundImg: null,
      numPhotos: 0,
      imageList: [],
      tags: [],
      eventName: '',
      venueName: '',
      startDate: '',
      description: '',
    };
  },
  computed: {
    ...mapState('events', {
      event: state => state.local
    }),
    activeTags() {
      const tagList = this.tags.filter(tag => {
        return tag !== '';
      });
      if (tagList.length > 3) {
        return tagList.slice(0, 3);
      } else {
        return tagList;
      }
    },
    activeImages() {
      if (this.imageList.length > 3) {
        return this.imageList.slice(0, 3);
      } else {
        return this.imageList;
      }
    },
  },
  created() {
    this.queryLocalEvent(this.$route.params.eventId)
    .then(() => {
      // Import queried events into data
      this.eventName = this.event.name
      this.description = this.event.description
      this.startDate = this.event.startDate
      this.venueName = this.event.venue.name
      this.tags = this.event.tags.hostTags

      this.backgroundImg = this.event.media.coverPhoto.baseSrc
      this.numPhotos = this.event.media.hostPhotos.length + this.event.media.userPhotos.length
      this.imageList = [ ...this.event.media.hostPhotos, ...this.event.media.userPhotos ]
    })
  },
  methods: {
    ...mapActions('events', [
      'queryLocalEvent'
    ]),
  }
};
</script>

<style lang="scss" scoped>
/* DESKTOP */
@media screen and (min-width: 1000px) {
  .event-container {
    max-width: 30%;
  }
  html {
    border-style: none;
    overflow-x: hidden;
  }
  img {
    border-style: none;
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

    .gradient-overlay {
      @include background-img-gradient(true);
    }
  }

  /* ALL EVENT DETAILS */
  .event-container {
    position: absolute;
    top: 30%;
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
