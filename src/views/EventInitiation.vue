<template>
  <div class="page-container">
    <NavBtns
      :topType="'share-dark'"
      :botType="currStep === 0 ? 'next-only' : 'default'"
      @next="nextStep()"
      @back="prevStep()"
    />

    <!-- step 1 -->
    <div class="step-1 step" v-if="currStep === 0">
      <img src="../assets/icons/event-initiation/hourglass-icon.svg" alt class="step-icon" />
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
            <textarea
              type="text"
              v-on="on"
              placeholder="When should the event be held?"
              class="step-input"
              v-model="eventDate"
            ></textarea>
          </template>
          <v-date-picker v-model="eventDate">
            <v-btn text color="primary" @click="showCalendar = false">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="
                $refs.calendarMenu.save(eventDate);
                showDatePicker = false;
                showTimePicker = true;
              "
            >Save</v-btn>
          </v-date-picker>
          <!-- <v-time-picker v-model="eventTime">
            <v-btn text color="primary" @click="showTimePicker = false"
              >Cancel</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="$refs.calendarMenu.save(eventTime)"
              >Save</v-btn
            >
          </v-time-picker>-->
        </v-menu>
      </div>
      <div class="media">
        <img src="../assets/vectors/date-vector.svg" class="step-vector" />
      </div>
      <div class="step-options">
        <div class="checkbox">
          <v-checkbox label v-model="establishedEvent" value="value" color="primary"></v-checkbox>
          <label class="checkbox-label">Established Event?</label>
        </div>
      </div>
    </div>

    <!-- step 2 -->
    <div class="step step-2" v-if="currStep === 1">
      <img src="../assets/icons/event-initiation/bonfire-icon.svg" alt class="step-icon" />
      <h1 class="step-title">Event Title</h1>
      <textarea
        type="text"
        v-on="on"
        placeholder="Give your event a title!"
        class="step-input"
        v-model="eventTitle"
      ></textarea>
      <div class="media">
        <img src="../assets/vectors/ticket-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 3 -->
    <div class="step step-3" v-if="currStep === 2">
      <img src="../assets/icons/event-initiation/location-icon.svg" alt class="step-icon" />
      <h1 class="step-title">Event Location</h1>
      <textarea
        type="text"
        v-on="on"
        placeholder="Where is the event going to be held?"
        class="step-input"
        v-model="eventLocation"
      ></textarea>
      <div class="media">
        <img src="../assets/vectors/location-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 4 -->
    <div class="step step-4" v-if="currStep === 3">
      <img src="../assets/icons/event-initiation/chat-icon.svg" alt class="step-icon" />
      <h1 class="step-title">Event Description</h1>
      <textarea
        type="text"
        v-on="on"
        placeholder="Where is the event going to be held?"
        class="step-input"
        v-model="eventDescription"
      ></textarea>
      <div class="media">
        <img src="../assets/vectors/chill-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 4 -->
    <div class="step step-4" v-if="currStep === 4">
      <img src="../assets/icons/event-initiation/chat-icon.svg" alt class="step-icon" />
      <h1 class="step-title">Cover Image</h1>
      <v-file-input
        v-on="on"
        placeholder="Add a cover image!"
        class="step-input file-input"
        v-model="coverImage"
        solo
        flat
        prepend-icon
        color="primary"
      ></v-file-input>
      <div class="media">
        <img src="../assets/vectors/media-vector.svg" class="step-vector" />
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
      establishedEvent: false,

      eventTitle: null,
      eventLocation: null,
      eventDescription: null,
      coverImage: null
    };
  },
  methods: {
    nextStep() {
      if (this.currStep !== 4) {
        this.currStep++;
      }
    },
    prevStep() {
      if (this.currStep !== 0) {
        this.currStep--;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 700px) {
  .page-container {
    position: absolute;
    display: flex;
    left: 50%;
    width: 30%;
    height: 100%;
    transform: translateX(-50%);
  }
}

.step {
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
      max-width: 500px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
