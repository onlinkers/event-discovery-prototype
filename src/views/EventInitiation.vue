<template>
  <div class="page-container">
    <NavBtns
      :topType="'share-dark'"
      :botType="currStep === 0 ? 'next-only' : 'default'"
    />

    <div class="information">
      <img
        src="../assets/icons/event-initiation/hourglass-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">Date / Time</h1>
      <div class="date-wrapper">
        <v-menu
          ref="calendarMenu"
          max-width="290"
          :close-on-content-click="false"
          offset-y
          :return-value.sync="eventDate"
        >
          <template v-slot:activator="{ on }">
            <!-- <v-text-field
              v-model="eventDate"
              label="Date"
              v-on="on"
              class="event-info-input event-date-input"
              clearable
            ></v-text-field>-->
            <textarea
              type="text"
              v-on="on"
              placeholder="When should the event be held?"
              class="step-input"
              v-model="eventDate"
            ></textarea>
          </template>
          <v-date-picker v-model="eventDate">
            <v-btn text color="primary" @click="showCalendar = false"
              >Cancel</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="
                $refs.calendarMenu.save(eventDate);
                showDatePicker = false;
                showTimePicker = true;
              "
              >Save</v-btn
            >
          </v-date-picker>
          <!-- <v-time-picker v-model="eventTime">
            <v-btn text color="primary" @click="showTimePicker = false"
              >Cancel</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="$refs.calendarMenu.save(eventTime)"
              >Save</v-btn
            >
          </v-time-picker> -->
        </v-menu>
      </div>
      <div class="media">
        <img src="../assets/vectors/date-vector.svg" class="step-vector" />
      </div>
      <div class="step-options">
        <div class="checkbox">
          <v-checkbox
            label=""
            v-model="establishedEvent"
            value="value"
            ripple="false"
            color="primary"
          ></v-checkbox>
          <label class="checkbox-label">Established Event?</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBtns from "../components/navButtons";

export default {
  components: {
    NavBtns
  },
  data() {
    return {
      currStep: 0,

      eventDate: null,
      eventTime: null,
      showDatePicker: false,
      showTimePicker: false,

      establishedEvent: false
    };
  }
};
</script>

<style lang="scss" scoped>
.information {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  .step-icon {
    padding-left: 5%;
  }
  .step-title {
    font-family: $title-lg;
    font-weight: 700;
    font-size: 36px;
    color: $dark;
  }
  .step-input {
    width: 100%;
    font-family: $title-md;
    font-size: 28px;
    font-weight: 700;
    color: $dark;
    outline: none;
  }
  .media {
    img {
      width: 100%;
    }
  }
  .checkbox {
    display: flex;
    align-items: center;
    .checkbox-label {
      font-family: $title-md;
      font-weight: 700;
      font-size: 20px;
      padding-bottom: 0.5%;
    }
  }
}
</style>
