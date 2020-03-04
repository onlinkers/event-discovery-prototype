<template>
  <div class="EventInitiation">
    <NavBtns
      :top-type="'default-dark'"
      :bot-type="
        $route.params.step && $route.params.step === '0'
          ? 'next-only'
          : 'default-confirm'
      "
      :curr-step="parseInt($route.params.step) || 0"
      :max-step="4"
      :back-route="'/discover'"
      @next="nextStep()"
      @back="prevStep()"
      @confirm="confirm()"
    />

    <!-- step 1 -->
    <div class="step-1 step" v-if="$route.params.step === '0'">
      <img
        src="../assets/icons/event-initiation/hourglass-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">
        Date / Time
      </h1>
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
            />
          </template>
          <v-date-picker v-model="eventDate" v-if="showDatePicker === true">
            <v-spacer />
            <v-btn color="primary" @click="saveDate(eventDate)">
              Save
            </v-btn>
          </v-date-picker>
          <v-time-picker
            v-model="eventTime"
            v-if="showTimePicker === true && showDatePicker === false"
            ampm-in-title
          >
            <v-spacer />
            <v-btn color="primary" @click="saveTime(eventTime)">
              Save
            </v-btn>
          </v-time-picker>
        </v-menu>
      </div>
      <div class="media">
        <img src="../assets/vectors/date-vector.svg" class="step-vector" />
      </div>
      <div class="step-options">
        <div class="checkbox">
          <v-checkbox
            label
            v-model="establishedEvent"
            value="value"
            color="primary"
          />
          <label class="checkbox-label">Established Event?</label>
        </div>
      </div>
    </div>

    <!-- step 2 -->
    <div class="step step-2" v-if="$route.params.step === '1'">
      <img
        src="../assets/icons/event-initiation/bonfire-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">
        Event Title
      </h1>
      <textarea
        type="text"
        placeholder="Give your event a title!"
        class="step-input"
        v-model="eventTitle"
      />
      <div class="media">
        <img src="../assets/vectors/ticket-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 3 -->
    <div class="step step-3" v-if="$route.params.step === '2'">
      <img
        src="../assets/icons/event-initiation/location-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">
        Event Location
      </h1>
      <textarea
        type="text"
        placeholder="Where will the event be held?"
        class="step-input"
        v-model="eventLocation"
      />
      <div class="media">
        <img src="../assets/vectors/location-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 4 -->
    <div class="step step-4" v-if="$route.params.step === '3'">
      <img
        src="../assets/icons/event-initiation/chat-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">
        Event Description
      </h1>
      <textarea
        type="text"
        placeholder="What is the event about?"
        class="step-input"
        v-model="eventDescription"
      />
      <div class="media">
        <img src="../assets/vectors/chill-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 4 -->
    <div class="step step-5" v-if="$route.params.step === '4'">
      <img
        src="../assets/icons/event-initiation/chat-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">
        Cover Image
      </h1>
      <v-file-input
        placeholder="Add a cover image!"
        class="step-input file-input"
        v-model="coverImage"
        solo
        flat
        prepend-icon
        color="primary"
      />
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
      if (+this.$route.params.step === 4) return;
      const nextStep = +this.$route.params.step + 1;
      this.$router.push({ path: `/new/${nextStep}` });
    },
    prevStep() {
      if (+this.$route.params.step === 0) return;
      const nextStep = +this.$route.params.step - 1;
      this.$router.push({ path: `/new/${nextStep}` });
    },
    confirm() {
      this.$router.push({ path: `/discover` });
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
    }
  }
};
</script>

<style lang="scss" scoped>
.EventInitiation {
  @include page-container-middle;
}

.step {
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
    height: 40vh;
    max-height: 40vh;
    img {
      width: 100%;
      max-width: 300px;
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
