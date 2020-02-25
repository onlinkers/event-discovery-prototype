<template>
<div class="welcome-container">
  <div class="nav-icons">
    <router-link to="/">
      <font-awesome-icon icon="arrow-left" class="back-btn fa-2x" color="#1F2845"/>
    </router-link>
  </div>
  <div class="welcome-text">
    <font-awesome-icon icon="user" class="user-icon fa-3x" color="#1F2845"></font-awesome-icon>
    <h1>Sign Up</h1>
    <h4>Enter a new email and password.</h4>
  </div>
  <div class="sign-up">
    <div class="sign-up-box">
      <v-form class="sign-up-form">
        <v-text-field
          name="Email"
          label="E-mail"
          class="sign-up-input"
          clearable
          :rules="[rules.required, rules.email]"
        ></v-text-field>
      </v-form>
    </div>
    <div class="sign-up-box">
      <v-form class="sign-up-form">
        <v-text-field
          name="Password"
          label="Password"
          class="sign-up-input"
          clearable
          :rules="[rules.required]"
        ></v-text-field>
      </v-form>
    </div>
  </div>
  <div class="next-icon">
    <v-btn color="primary" fab medium to="/discover">
      <font-awesome-icon icon="chevron-right" class="chevron-icon fa-3x"></font-awesome-icon>
    </v-btn>
  </div>
</div>
</template>

<script>
export default {
  props: {
    
  },
  components: {
    
  },
  data() {
    return {
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.nav-icons {
  width: 100%;
  a {
    top: 5%;
    left: 10%;
  }
}
.welcome-text {
  font-family: 'Josefin Sans', sans-serif;
  .user-icon {
    margin: 0 0 5% 10%;
  }
  h1 {
    margin: 0 10% 0;
    font-weight: 800;
    font-size: 3em;
    color: #1F2845; // TODO: COLOR AND FONT NEED MIXINS
  }
  h4 {
    font-family: 'Nunito', sans-serif;
    margin: 2% 10% 5%;
    color: grey;
    font-weight: 600;
  }
}
.sign-up {
  width: 100%;
  position: relative;
}
.sign-up-box {
  display: flex;
  border-radius: 0 15px 15px 0;
  font-family: 'Nunito', sans-serif;
  margin: 2% 0;
  h5 {
    color: #939DBE;
    position: fixed;
  }
  .sign-up-input {
    background: none;
    border: none;
    font-size: 1em;
    line-height: 1.5em;
    margin: 0 0 0 20%;
    outline: none;
    color: #939DBE;
    font-weight: 700;
  }
}
.sign-up-box:hover {
  background: rgb(249, 249, 255);
}
.alt-accounts {
  margin: 5% 10% auto;
  h3 {
    font-family: 'Montserrat';
    font-size: 1em;
  }
  .alt-icons {
    margin: 2% 0;
    .alt-icon {
      margin: 0 2%;
    }
  }
}
.next-icon {
  position: absolute;
  right: 5%;
  bottom: 10%;
  svg {
    width: 0.4em;
    transform: translateX(10%);
  }
}
.sign-up-input.v-text-field > .v-input__control > .v-input__slot:before {
    border-style: none;
}
</style>