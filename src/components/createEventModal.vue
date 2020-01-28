<template>
<div class="modal-backdrop">
  <div class="modal-container">
    <div class="nav-icons">
      <router-link to="/">
        <font-awesome-icon icon="arrow-left" class="back-btn fa-2x" color="#1F2845"/>
      </router-link>
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
          ></v-text-field>
        </v-form>
      </div>
    </div>
    <div class="input-box">
      <!-- <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
        class="input-form"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            readonly
            v-on="on"
            class="event-info-input"
            prepend-icon="mdi-calendar-range"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu> -->
      <div class="date-wrapper">
        <v-menu max-width="290">
          <template v-slot:activator="{ on }">
              <v-text-field :value="eventDate" label="Date" v-on="on" class="event-info-input event-date-input" clearable></v-text-field>
          </template>
          <v-date-picker v-model="eventDate"></v-date-picker>
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
          ></v-text-field>
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
          ></v-textarea>
        </v-form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      eventDate: null,
    }
  },
  methods: {
    dismissModal() {
      this.$emit('close');
    }
  },
  created: {

  },
  props: {

  }
}
</script>
<style lang="scss">
@media only screen and (max-width: 700px){
  .modal-container {
    width: 500px;
    display: block;
    // height: 100vh;
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
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(228, 235, 255, 0.897);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // .modal {
  //   background: #FFFFFF;
  //   box-shadow: 2px 2px 20px 1px;
  //   overflow-x: auto;
  //   display: flex;
  //   flex-direction: column;
  // }
}
.nav-icons {
  // text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
  // padding: 10% 5%;
}
.input-box {
  position: relative;
  margin: 2% auto;
  height: 10%;
  width: 80%;
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
    font-family: 'Montserrat', sans-serif;
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
  .description-wrapper {

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
  font-family: 'Montserrat', sans-serif;
}
</style>