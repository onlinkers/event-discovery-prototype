<template>
<div class="WelcomePage">
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
  <div class="auth">
    <v-form class="auth-form">
      <v-text-field
        name="Username"
        label="Username"
        class="auth-input"
        clearable
      ></v-text-field>
    </v-form>
    <v-form class="auth-form">
      <v-text-field
        name="Email"
        label="E-mail"
        class="auth-input"
        clearable
        :rules="[rules.required, rules.email]"
      ></v-text-field>
    </v-form>
    <v-form class="auth-form">
      <v-text-field
        name="Password"
        label="Password"
        class="auth-input"
        clearable
        :rules="[rules.required]"
      ></v-text-field>
    </v-form>
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
.next-icon {
  position: absolute;
  right: 5%;
  bottom: 10%;
  svg {
    width: 0.4em;
    transform: translateX(10%);
  }
}
</style>