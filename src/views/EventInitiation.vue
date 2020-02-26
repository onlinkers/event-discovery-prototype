<template>
  <div class="page-container">
    <NavBtns
      :topType="'default-dark'"
      :botType="currStep === 0 ? 'next-only' : 'default-confirm'"
      :currStep="currStep"
      :maxStep="4"
      :backRoute="'/discover'"
      @next="nextStep()"
      @back="prevStep()"
      @confirm="confirm()"
    />

    <!-- step 1 -->
    <div class="step-1 step" v-if="currStep === 0">
      <img src="../assets/icons/event-initiation/hourglass-icon.svg" alt class="step-icon" />
      <h1 class="step-title">Date / Time</h1>
      <div class="date-wrapper">
        <!-- date-time picker -->
        <v-menu
          ref="calendarMenu"
          max-width="290"
          :close-on-content-click="false"
          offset-y
          :return-value.sync="eventDateTimeString"
        >
          <!-- activates the menu which contains both date and time pickers -->
          <template v-slot:activator="{ on }">
            <textarea
              type="text"
              v-on="on"
              placeholder="When should the event be held?"
              class="step-input"
              v-model="eventDateTimeString"
            ></textarea>
          </template>
          <v-date-picker v-model="eventDate" v-if="showDatePicker === true">
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="saveDate(eventDate)">Save</v-btn>
          </v-date-picker>
          <v-time-picker
            v-model="eventTime"
            v-if="showTimePicker === true && showDatePicker === false"
            ampm-in-title
          >
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="saveTime(eventTime)">Save</v-btn>
          </v-time-picker>
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
        placeholder="Where is the event going to be held?"
        class="step-input"
        v-model="eventDescription"
      ></textarea>
      <div class="media">
        <img src="../assets/vectors/chill-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 4 -->
    <div class="step step-5" v-if="currStep === 4">
      <img src="../assets/icons/event-initiation/chat-icon.svg" alt class="step-icon" />
      <h1 class="step-title">Cover Image</h1>
      <v-file-input
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

      eventDate: "",
      eventTime: "",
      eventDateTimeString: "",

      showDatePicker: true,
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
      if (this.currStep < 4) {
        this.currStep++;
        console.log(this.currStep);
      }
    },
    prevStep() {
      if (this.currStep !== 0) {
        this.currStep--;
        console.log(this.currStep);
      }
    },
    confirm() {
      console.log("confirm");
    },
    saveDate(eventDate) {
      this.eventDateTimeString = eventDate;
      this.showDatePicker = false;
      this.showTimePicker = true;
    },
    saveTime(eventTime) {
      this.eventDateTimeString = this.eventDate + ", " + eventTime;
      this.$refs.calendarMenu.save(this.eventDate + ", " + eventTime);
      setTimeout(() => {
        this.showDatePicker = true;
      }, 200);
      console.log(eventTime);
      console.log(this.eventDateTimeString);
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
.page-container {
  overflow: hidden;
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
    user-select: none;
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
      max-width: 400px;
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
