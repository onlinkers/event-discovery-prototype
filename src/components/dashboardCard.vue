<template>
  <div class="card-container">
    <img src="../assets/icons/like-button.svg" class="like-btn" alt />
    <img src="../assets/media/test-card-img.png" class="card-cover-img" alt />
    <div class="card-details">
      <h2 class="card-title card-details__detail">{{ event.pub.name }}</h2>
      <div class="card-tags card-details__detail">
        <p>
          <span v-for="(tag, index) in capitalizedTags" :key="`tag-${index}`">
            {{ tag }}
          </span>
        </p>
      </div>
      <div class="card-location card-details__detail">
        <img src="../assets/icons/event-page/location.svg" alt />
        <p>Location</p>
      </div>
      <div class="card-participation card-details__detail">
        <img src="../assets/icons/event-page/people.svg" alt />
        <p>144</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: event,
  },
  data() {
    return {};
  },
  computed: {
    capitalizedTags() {
      const tagList = this.event.eventTags.host.map((tag) => {
        return tag.charAt(0).toUpperCase() + tag.substring(1);
      });
      return tagList;
    },
  },
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
  margin: 0 2em 2em 0;

  .like-btn {
    position: absolute;
    top: 7%;
    right: 7%;
  }

  .card-cover-img {
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1em;
  }

  .card-details {
    .card-details__detail {
      margin-bottom: 0.25em;
    }

    .card-title {
      @include card-title;
    }

    .card-tags {
      p {
        @include card-tag;
        margin: 0;
        white-space: nowrap;
        overflow-x: scroll;
        user-select: none;

        span {
          margin-right: 1em;
        }
      }
    }

    .card-location {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 1.25em;
        height: 1.25em;
      }

      p {
        @include card-detail;
        margin: 0;
        padding-left: 0.5em;
      }
    }

    .card-participation {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 1.25em;
        height: 1.25em;
      }

      p {
        @include card-detail;
        margin: 0;
        padding-left: 0.5em;
      }
    }
  }
}
</style>
