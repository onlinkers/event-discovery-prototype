<template>
  <div class="card-container">
    <img :src="event.mediaLink.cover" class="card-cover-img" alt />
    <div class="card-details">
      <div class="card-date">
        <p class="card-date__date">{{ event.pub.date }}, {{ event.pub.time }}</p>
        <img class="card-date__like-btn" src="../assets/icons/event-card/like-btn.svg" alt />
      </div>
      <h2 class="card-title card-details__detail">{{ event.pub.name | trimTitle }}</h2>
      <!-- <div class="card-tags card-details__detail">
        <p>
          <span v-for="(tag, index) in capitalizedTags" :key="`tag-${index}`">{{ tag }}</span>
        </p>
      </div>-->
      <p class="card-venue">{{ event.pub.venue | trimLocation }}</p>
      <!-- <div class="card-location card-details__detail">
      </div>-->
    </div>
  </div>
</template>

<script>
import {
  EVENT_CARD_TITLE_MAX_LENGTH,
  EVENT_CARD_LOCATION_MAX_LENGTH
} from "../constants";

export default {
  filters: {
    trimTitle(value) {
      if (value.length > EVENT_CARD_TITLE_MAX_LENGTH) {
        return value.slice(0, EVENT_CARD_TITLE_MAX_LENGTH) + "...";
      } else {
        return value;
      }
    },
    trimLocation(value) {
      if (value.length > EVENT_CARD_LOCATION_MAX_LENGTH) {
        return value.slice(0, EVENT_CARD_LOCATION_MAX_LENGTH) + "...";
      } else {
        return value;
      }
    }
  },
  props: {
    event: event
  },
  data() {
    return {};
  },
  computed: {
    capitalizedTags() {
      const tagList = this.event.eventTags.host.map(tag => {
        return tag.charAt(0).toUpperCase() + tag.substring(1);
      });
      return tagList;
    }
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}

.card-container {
  position: relative;
  width: 290px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: white;
  border-radius: 10px;
  margin: 1em;

  .card-cover-img {
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1em;
    height: 45%;
  }

  .card-details {
    .card-details__detail {
      margin-bottom: 0.25em;
    }

    /* CARD DATE */
    .card-date {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .card-date__date {
        @include card-date;
        margin: 0;
      }
    }

    /* TITLE */
    .card-title {
      @include card-title;
      line-height: 1.25em;
      max-height: 4em;
      overflow: hidden;
    }

    /* LOCATION */
    .card-venue {
      @include card-detail;
      margin: 0;
    }
  }
}
</style>
