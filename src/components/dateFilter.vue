<template>
    <v-menu
        v-model="pickerState"
        class="DateFilter"
        :close-on-click="true"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
    >
        <template v-slot:activator="{ on }">
            <v-btn
                class="DateFilter--button"
                color="primary"
                small
                v-on="on"
            >{{ (!pickerDates[0] && !pickerDates[1]) ? 'No date filter' : `${pickerDates[0]} - ${pickerDates[1]}` }}</v-btn>
            <!-- TODO: use moment-filters to format the dates appropriately -->
        </template>
        <v-date-picker
            v-model="pickerDates"
            class="DateFilter--datePicker"
            header-color="#2351f4"
            color="#2351f4"
            type="date"
            range
            @change="updateDateFilters"
        />
    </v-menu>
</template>

<script>
export default {
  name: "DateFilter",
  data() {
    return {
      pickerDates: [],
      pickerState: false,
    }
  },
  watch: {
    pickerState(state) {
        if(state) { // status passes TRUE when filter menu is OPENED 
          this.$emit('updateState', 'DATE')
        } else { // status passes FALSE when filter menu is CLOSED
          this.$emit('updateState', 'NONE')
        }
    }
  },
  methods: {
    updateDateFilters() {
      // Check if both 'start' and 'end' has been entered before updating parent data
      if(!this.pickerDates[0] || !this.pickerDates[1]) return null
      this.$emit('updateData', this.pickerDates)
    },
  }
}
</script>
<style lang="scss" scoped>
  .DateFilter--button {
    width: 15em;
    font-size: 0.8em;
    margin-right: 1em;
  }
  .DateFilter {
    position: absolute;
    top: 21%;
    left: 50%;
    width: 20vw;

    @media screen and (min-width: 700px){
        left: unset;
        right: 50%;
    }
  }

  .DateFilter--datePicker {
    width: 70vw;

    @media screen and (min-width: 700px){
        width: 40vw;
    }
  }
</style>

