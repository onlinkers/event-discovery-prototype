<template>
  <div :class="'page-container-background ' + mood"> 
    <div :class="'page-container ' + mood">
      <NavBtns v-bind="navOptions" class="nav-btns" />
      <!-- background img -->
      <div class="background-img">
        <div :class="mood+'-gradient-overlay'" />
        <img
          :src="backgroundImg"
          alt
          class="background-img"
          @error="backgroundImageAltSrc" />
      </div>

      <!-- event details -->
      <div v-rellax="{ speed: 5 }" class="event-container">
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
          <div v-for="(tag, index) in activeTags" :key="`tag-${index}`" class="event-tags__tag">
            <h5>{{ tag }}</h5>
          </div>
        </div>

        <!-- title -->
        <div class="title-container">
          <h1>{{ eventName }}</h1>
        </div>

        <!-- details -->
        <div class="event-details">
          <div class="event-details__detail event-location">
            <img src="../assets/icons/event-page/location.svg" alt />
            <h5>{{ venueName }}</h5>
          </div>
          <div class="event-details__detail event-date">
            <img src="../assets/icons/event-page/hourglass.svg" alt="" />
            <h5>{{ startDate | moment("h:mm a, MMMM Do YYYY") }}</h5>
          </div>
        </div>

        <!-- description -->
        <div class="event-description">
          <h5>OVERVIEW</h5>
          <p v-if="isDescriptionSnipped">{{ description | descriptionSnippet }}</p>
          <p v-else>{{ description }}</p>
          <h5 v-if="isDescriptionSnipped && isDescriptionOverflow" @click="isDescriptionSnipped = false">Read More</h5>
          <h5 v-else-if="isDescriptionOverflow" @click="isDescriptionSnipped = true">See Less</h5>
          <!-- TODO: create copies for dark overlay -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import NavBtns from "../components/navButtons";
import { mapActions, mapState } from "vuex";
import {
  EVENT_PAGE_DESCRIPTION_MAX_LENGTH,
  EVENT_PAGE_TAGS_MAX_RENDER,
  EVENT_PAGE_IMAGES_MAX_RENDER
} from "../constants";

export default {
  components: {
    NavBtns,
  },
  filters: {
    descriptionSnippet(value) {
      if (value.length > EVENT_PAGE_DESCRIPTION_MAX_LENGTH) {
        return value.slice(0, EVENT_PAGE_DESCRIPTION_MAX_LENGTH) + "...";
      } else {
        return value;
      }
    },
  },
  data() {
    return {
      // event data
      backgroundImg: null,
      numPhotos: 0,
      imageList: [],
      tags: [],
      eventName: "",
      venueName: "",
      startDate: "",
      description: "",

      // description snipping
      isDescriptionSnipped: true,
      isDescriptionOverflow: false,

      // mood
      mood: "light",
    };
  },
  computed: {
    ...mapState("events", {
      event: state => state.local
    }),
    activeTags() {
      const tagList = this.tags.filter(tag => {
        return tag !== "";
      });
      if (tagList.length > EVENT_PAGE_TAGS_MAX_RENDER) {
        return tagList.slice(0, EVENT_PAGE_TAGS_MAX_RENDER);
      } else {
        return tagList;
      }
    },
    activeImages() {
      if (this.imageList.length > EVENT_PAGE_IMAGES_MAX_RENDER) {
        return this.imageList.slice(0, EVENT_PAGE_IMAGES_MAX_RENDER);
      } else {
        return this.imageList;
      }
    },
    navOptions() {
      return {
        topType: "share-" + this.mood,
        backRoute: "/discover"
      };
    }
  },
  created() {
    this.queryLocalEvent(this.$route.params.eventId)
      .then((event) => {
        console.log({event})
      // Import queried events into data
        this.eventName = event.name;
        this.description = event.description;
        this.startDate = event.startDate;
        this.venueName = event.venue.name;
        this.tags = event.tags.hostTags;
        this.backgroundImg = event.media.coverPhoto && event.media.coverPhoto.baseSrc;
        this.numPhotos = event.media.hostPhotos.length + event.media.userPhotos.length;
        this.imageList = [ ...event.media.hostPhotos, ...event.media.userPhotos ];
      })
      .then(() => {
      // Evaluate description snipping
        if(this.description.length > EVENT_PAGE_DESCRIPTION_MAX_LENGTH) this.isDescriptionOverflow = true;
      });
  },
  methods: {
    ...mapActions("events", [
      "queryLocalEvent"
    ]),
    backgroundImageAltSrc() {
      this.mood = "dark";
    }
  },
};
</script>

<style lang="scss" scoped>
/* DESKTOP */
@media screen and (min-width: 1000px) {
  .event-container {
    max-width: 30%;
  }
}

.page-container-background.dark {
  @include page-container-middle;
  background: black;
  overflow: auto;
}

/* MAIN DIV */
.page-container {
  @include page-container-middle--scrollable;
  height: unset !important; // needed to ensure vue-rellax works

  .nav-btns {
    z-index: 1000;
  }

  /* BACKGROUND IMG */
  .background-img {
    @include background-img;

    .light-gradient-overlay {
      @include background-img-gradient(true);
    }
    .dark-gradient-overlay {
      @include background-img-gradient(false);
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

    /* IMAGE GALLERY */
    .gallery {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      padding-bottom: 5%;

      .image-container {
        @include flex-middle;
        @include hoverAnims--zoom;
        height: 4em;
        width: 4em;
        margin: 0 0.5em;
        background-color: $primary-alt;
        border-radius: 10px;

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
      flex-wrap: wrap;
      align-content: flex-start;

      &::-webkit-scrollbar {
        display: none;
      }

      .event-tags__tag {
        @include flex-middle;
        @include unselectable;
        @include hoverAnims--zoom;
        border-radius: 15px 15px 15px 0px;
        background: white;
        height: 2.5em;
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
        font-size: clamp(1.5em, 8vw, 3.5em);
      }
    }

    /* DATE & LOCATION */
    .event-details {
      @include unselectable;
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
        @include unselectable;
        margin-bottom: 0.5em;
      }

      p {
        @include event-detail;
        color: $dark;
        margin-bottom: 1em;
      }
      p + h5 {
        @include hoverStyle--pointer;
        @include hoverAnims--tinyZoom;
        color: $primary-alt;
      }
    }
  }
}

.page-container.dark {
  background: black;

  .event-container {
    .title-container {
      h1 {
        @include title-serif-light;
      }
    }
    .event-description {
      h5 {
        color: $secondary-dark;
      }
      p {
        color: $light;
      }
      p + h5 {
        @include hoverStyle--pointer;
        @include hoverAnims--tinyZoom;
        color: $primary-alt;
      }
    }
    .event-details {
      h5 {
        color: $secondary-dark;
      }
    }
  }
}
</style>
