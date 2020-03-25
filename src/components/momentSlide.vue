<template>
  <v-sheet
    class="mx-auto"
    max-width="100vw"
  >
    <v-slide-group
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="event in events"
        :key="event.name"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="400"
          width="400"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="50"
                v-text="'mdi-close-circle-outline'"
              />
              <img
                v-if="!active"
                :src="event.media.coverPhoto.baseSrc"
                alt
                class="card-image"
              />
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
    props: {
      events: {
        type: Array
      }
    },
    data() {
        return {
				};
    },
    method: {

    }
};0
</script>

<style lang="scss" scoped>
  .card-image {
    width: 100%;
    height: 100%;
  }
  .card-image:hover {
    opacity: 0.6;
  }
</style>