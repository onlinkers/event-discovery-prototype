<template>
  <transition name="fade" mode="out-in">
    <div class="modal-backdrop">
      <div class="nav-icons">
        <router-link to="/discover">
          <font-awesome-icon
            icon="arrow-left"
            class="back-btn fa-2x"
            color="#1F2845"
          />
        </router-link>
      </div>

      <div class="modal-container">
        <div class="ini-icon">
          <img src="@/assets/icons/event-initiation/initiation-icon.svg" alt="">
        </div>
        <div class="title">
          <h1 font-family="Josefin Sans"> Event Initation </h1>
        </div>
        <div class="input-box">
          <div class="input-wrapper">
            <v-form class="input-form">
              <v-text-field
                name="event-title"
                label="Event Title"
                class="event-info-input"
                clearable
                required
              />
            </v-form>
          </div>
        </div>
      
        <div class="input-box">
          <div class="date-wrapper">
            <v-menu
              ref="calendarMenu"
              v-model="showCalendar"
              max-width="290"
              :close-on-content-click="false"
              offset-y
              :return-value.sync="eventDate"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="eventDate"
                  label="Date"
                  class="event-info-input event-date-input"
                  clearable
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="eventDate">
                <v-btn
                  text
                  color="primary"
                  @click="showCalendar = false"
                >
                  Cancel
                </v-btn>
                <v-spacer />
                <v-btn color="primary" @click="$refs.calendarMenu.save(eventDate)">Save</v-btn>
              </v-date-picker>
            </v-menu>
          </div>
        </div>
        <div class="input-box">
          <div class="input-wrapper">
            <v-form class="input-form">
              <v-text-field
                name="event-location"
                label="Location"
                class="event-info-input"
                clearable
                required
              />
            </v-form>
          </div>
        </div>
        <div class="input-box description-box">
          <div class="description-wrapper">
            <v-form class="input-form">
              <v-textarea
                name="event-description"
                label="Description"
                class="event-info-input"
                clearable
                required
              />
            </v-form>
          </div>
        </div>
        <div class="nav-btns">
          <v-btn
            class="nav-btn"
            color="primary"
            @click="dismissModal()"
          >
            Initiate
          </v-btn>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { EventBus } from '@/event-bus.js';

export default {
  props: {

  },
  data() {
    return {
      eventDate: null,
      showCalendar: false,
    }
  },
  created: {
    handleCreated() {
      EventBus.$emit('eventModalActivated', 'Discover');
    }
  },
  methods: {
    dismissModal() {
      this.$emit('close');
    },
    saveDate() {
      this.$refs
    }
  }
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (min-width: 700px){
  .modal-container {
    width: 500px;
    display: block;
    margin: 0 auto;
    position: absolute;
  }
}
.modal-container {
  height: 100vh;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Josefin Sans";
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.788);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title{
    align-content:left;
    font-family: "Josefin Sans";
}

.nav-icon {
  position: absolute;
  top: 5%;
  left: 5%;
}
.input-box {
  position: relative;
  margin: 2% auto;
  height: 10%;
  width: 90%;
  background: white;
  border-radius: 10px;
  margin-bottom: 1%;
  .input-menu {
    v-text-field {
      width: 90%;
    }
  }


  .input-form {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
  }
  .event-info-input {
    width: 100%;
    font-family: "Josefin Sans";
    font-size: 1.1em;
    outline: none;
    color: #939DBE;
    font-weight: 700;
  }
  .event-date-input {
    // extra margin needed here
    margin-top: 6%;
  }
  .date-wrapper, .input-wrapper, .description-wrapper {
    width: 80%;
    margin: 4% auto;
  }

.title{
  text-align: left;
}
}
.description-box {
  height: 22%;
}
// input no border!!
.event-info-input.v-text-field>.v-input__control>.v-input__slot:before {
    border-style: none;
}
.v-text-field__slot>label {
  font-size: 18px;
  font-family: "Josefin Sans";
}
.nav-btns {
  text-align: center;
  display: flex;
  justify-content: space-between;
  .nav-btn {
    margin-top: 2%;
  }
}
</style>