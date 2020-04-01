x<template>
  <!-- <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-container class="pa-1">
      <v-item-group
        v-model="selected"
        multiple
      >
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="6"
          >
            <v-item v-slot:default="{ active, toggle }">
              <v-img
                :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                height="150"
                class="text-right pa-2"
                @click="toggle"
              >
                <v-btn
                  icon
                  dark
                >
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>-->
  <div class="card-container">
    <img src="../assets/icons/like-button.svg" class="like-btn" alt />
    <img src="../assets/media/test-card-img.png" class="card-cover-img" alt />
    <div class="card-details">
      <h2 class="card-title card-details__detail">Island Cruise</h2>
      <div class="card-tags card-details__detail">
        <p>
          <span>Tag1</span>
          <span>Tag2</span>
          <span>Tag3</span>
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
  data() {
    return {
      items: [
        {
          src: "backgrounds/bg.jpg"
        },
        {
          src: "backgrounds/md.jpg"
        },
        {
          src: "backgrounds/bg-2.jpg"
        },
        {
          src: "backgrounds/md2.jpg"
        }
      ],
      selected: []
    };
  }
};
</script>


<style lang="scss" scoped>
.card-container {
  position: absolute;
  width: 290px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: #f5f5f6;
  border-radius: 10px;

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