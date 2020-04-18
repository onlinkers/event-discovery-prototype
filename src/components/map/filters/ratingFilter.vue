<template>
    <v-menu
        v-model="ratingState"
        class="RatingFilter"
        :close-on-click="true"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
    >
        <template v-slot:activator="{ on }">
            <v-btn
                class="RatingFilter--button filter-button"
                color="white"
                small
                v-on="on"
            >Rating</v-btn>
        </template>
        <v-rating
            v-model="ratingFilter"
            class="RatingFilter--picker"
            color="yellow"
            clearable
            length=5
            dense
        />
    </v-menu>
</template>

<script>
// import { filterArrayByArray } from '@/utils';

export default {
  name: "RatingFilter",
  data() {
    return {
        ratingFilter: 0,
        ratingState: false,
    };
  },
  watch: {
    ratingState(state) {
        if(state) { // status passes TRUE when filter menu is OPENED 
          this.$emit('updateState', 'RATING')
        } else { // status passes FALSE when filter menu is CLOSED
          this.$emit('updateState', 'NONE')
        }
    },
    ratingFilter(rating) {
      this.$emit('updateData', rating)
    }
  },
}
</script>
<style lang="scss" scoped>
  .RatingFilter--button {
    width: 10em;
    font-size: 0.8em;
    margin-right: 1em;
    color: black;
  }
  .RatingFilter {
    position: absolute;
    top: 21%;
    left: 50%;
    width: 20vw;

    @media screen and (min-width: 700px){
        left: unset;
        right: 50%;
    }
  }

  .RatingFilter--picker {
    background: white;
    padding-top: 0.4em;
    padding-bottom: 0.4em;
    padding-left: 0.6em;
    padding-right: 0.6em;

  }
</style>

