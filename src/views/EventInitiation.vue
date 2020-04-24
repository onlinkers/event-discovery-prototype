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
    <div v-if="$route.params.step === '0'" class="step-1 step">
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
              v-model="eventDateTimeString"
              type="text"
              placeholder="When should the event be held?"
              class="step-input"
              v-on="on"
            />
          </template>
          <v-date-picker v-if="showDatePicker === true" v-model="eventDate">
            <v-spacer />
            <v-btn color="primary" @click="saveDate(eventDate)">
              Save
            </v-btn>
          </v-date-picker>
          <v-time-picker
            v-if="showTimePicker === true && showDatePicker === false"
            v-model="eventTime"
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
            v-model="establishedEvent"
            label
            value="value"
            color="primary"
          />
          <label class="checkbox-label">Established Event?</label>
        </div>
      </div>
    </div>

    <!-- step 2 -->
    <div v-if="$route.params.step === '1'" class="step step-2">
      <img
        src="../assets/icons/event-initiation/bonfire-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">
        Event Title
      </h1>
      <textarea
        v-model="eventTitle"
        type="text"
        placeholder="Give your event a title!"
        class="step-input"
      />
      <div class="media">
        <img src="../assets/vectors/ticket-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 3 -->
    <div v-if="$route.params.step === '2'" class="step step-3">
      <img
        src="../assets/icons/event-initiation/location-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">
        Event Location
      </h1>
      <textarea
        v-model="eventLocation"
        type="text"
        placeholder="Where will the event be held?"
        class="step-input"
      />
      <div class="media">
        <img src="../assets/vectors/location-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 4 -->
    <div v-if="$route.params.step === '3'" class="step step-4">
      <img
        src="../assets/icons/event-initiation/chat-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">
        Event Description
      </h1>
      <textarea
        v-model="eventDescription"
        type="text"
        placeholder="What is the event about?"
        class="step-input"
      />
      <div class="media">
        <img src="../assets/vectors/chill-vector.svg" class="step-vector" />
      </div>
    </div>

    <!-- step 4 -->
    <div v-if="$route.params.step === '4'" class="step step-5">
      <img
        src="../assets/icons/event-initiation/chat-icon.svg"
        alt
        class="step-icon"
      />
      <h1 class="step-title">
        Cover Image
      </h1>
      <v-file-input
        v-model="coverImage"
        placeholder="Add a cover image!"
        class="step-input file-input"
        solo
        flat
        prepend-icon
        color="primary"
      />
      <div class="media">
        <img src="../assets/vectors/media-vector.svg" class="step-vector" />
      </div>
    </div>
    <v-dialog v-model="warning.visible" content-class="warning-dialog" persistent>
      <v-card>
        <v-card-title class="headline">Oops! We couldn't create that event for you!</v-card-title>
        <v-card-text>{{ warning.message }}</v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" @click="redirectToStep(warning.step); warning.visible = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NavBtns from "@/components/navButtons";
import eventService from "@/services/eventService"

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
      coverImage: null,
      warning: {
        visible: false,
      },
    };
  },
  methods: {
    redirectToStep(step) {
      this.$router.push({ path: `/new/${step}` });
    },
    nextStep() {
      if (+this.$route.params.step === 4) return;
      const nextStep = +this.$route.params.step + 1;
      this.redirectToStep(nextStep)
    },
    prevStep() {
      if (+this.$route.params.step === 0) return;
      const nextStep = +this.$route.params.step - 1;
      this.redirectToStep(nextStep)
    },
    async confirm() {
      // This page needs to be refactored to include (AT LEAST) the following fields:
      // name (title), startDate, endDate, venue

      // On making a 'create' request, a 'userId' is also required to be sent to the API.
      // This is to ensure that in the future the particular event has an assigned 'host',
      // and isn't just able to be edited by anyone.

      const emptyFields = [];
      let redirectToStep = null;
      // needs to be done 'in reverse' to get the FIRST unfilled field
      if(!this.eventLocation) {
        emptyFields.push('location')
        redirectToStep = 2;
      }
      if(!this.eventTitle) {
        emptyFields.push('title')
        redirectToStep = 1
      }
      if(!this.eventDateTimeString) {
        emptyFields.push('date/time')
        redirectToStep = 0;
      }

      const hasRequiredFieldsBeenFilled = !emptyFields[0]

      if(!hasRequiredFieldsBeenFilled) {
        this.warning = {
          message: `Sorry! Could not create the event because the following fields have not been filled: ${emptyFields.join(', ')}.
            Please fill in all the required fields before re-submitting.`,
          visible: true,
          step: redirectToStep
        }
      }
      else {

        const payload = {
          name: this.eventTitle,
          venue: this.eventLocation, // needs to be in the form required
          startDate: this.eventDateTimeString,
          endDate: this.eventDate,
          description: this.eventDescription,
          coverPhoto: {
            baseSrc: this.coverImage,
            size: { width: 100, height: 100 } // needs to set a default somehow
          }
        }

        await eventService.createEvent(payload)
        this.$router.push({ path: `/discover` });
      }
      

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
  },
  // Hook to redirect to start if entering from a path that is not /new/*'
  beforeRouteEnter (to, from, next) {
    if(to.query.first !== true) next({ path: '/new/0', query: { first: true } })
    else next()
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
</style>

<style lang="scss">
// Doesn't work with scoped styles
.warning-dialog {
  max-width: 80vw;

  .headline {
    word-break: break-word;
  }

  @media only screen and (min-width: 700px){
    max-width: 50vw;
  }
}
</style>
