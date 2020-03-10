<template>
  <div class="WelcomePage">
    <div class="WelcomePage-container">
      <div class="welcome-text">
        <font-awesome-icon
          icon="location-arrow"
          class="location-icon fa-3x"
          color="#1F2845"
        />
        <h1>Welcome!</h1>
        <h4>Enter your login details below to sign in.</h4>
      </div>
      <div class="auth">
        <v-form class="auth-form">
          <v-text-field
            v-model="inputEmail"
            name="Email"
            label="E-mail"
            class="auth-input"
            clearable
            :rules="[rules.required, rules.email]"
          />
        </v-form>
        <v-form class="auth-form">
          <v-text-field
            v-model="inputPassword"
            name="Password"
            label="Password"
            class="auth-input"
            clearable
            :rules="[rules.required]"
          />
        </v-form>
        <div class="alt-accounts">
          <h3>Or sign in using</h3>
          <div class="alt-icons">
            <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x alt-icon" />
            <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x alt-icon" />
            <font-awesome-icon :icon="['fab', 'google-plus']" class="fa-2x alt-icon" />
          </div>
        </div>
        <div class="nav-btns">
          <div class="auth-btn">
            <v-btn
              color="primary"
              block
              elevation="5"
              to="/discover"
            >
              Sign In
            </v-btn>
          </div>
          <div class="create-acc-btn">
            <v-btn
              color="accent"
              text
              block
              to="/signup"
            >
              Create Account
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { rules } from '../utils'
export default {
  data() {
    return {
      inputEmail: '',
      inputPassword: '',
      rules: rules,
    }
  }
}
</script>
<style lang="scss">
.WelcomePage {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
}

.WelcomePage-container {
  display: block;
  width: 500px;
  max-width: 50%;
  max-height: 100vh;

  @media (max-height: 800px) {
    height: 90vh;
  }

  .welcome-text {
    font-family: 'Josefin Sans', sans-serif;
    margin: 10% 10% 0 10%;
    
    svg {
      margin: 0.3em;
      margin-bottom: 1em;
    }

    h1 {
      font-weight: 800;
      font-size: 3em;
      color: #1F2845;
    }
    h4 {
      font-family: 'Nunito', sans-serif;
      color: grey;
      font-weight: 600;
    }
  }
  .auth {
    margin-top: 1.5em;
    width: 100%;
    .auth-form {
      display: flex;
      padding-top: 1em;
      padding-bottom: 1em;
      border-radius: 0 1em 1em 0;
      font-family: 'Nunito', sans-serif;

      .auth-input {
        margin: 0 10%;
        color: #939DBE;
        font-weight: 700;

        input, .v-label {
          font-size: 1em;
          height: 2em;
        }

        .v-messages__message {
          font-size: 0.9em;
        }
      }
    }
    .auth-form:hover {
      background: rgb(249, 249, 255);
    }
  }

  .alt-accounts {
    margin: 1.5em 10%;
    h3 {
      font-family: 'Montserrat';
      font-size: 1.5em;
    }
    .alt-icons {
      margin-top: 0.5em;
      
      .alt-icon {
        margin-right: 0.5em;
        margin-top: 0.5em;
        transition: all 0.5s;
      }
      .alt-icon:hover { // DESPERATELY NEED MIXIN FOR "HOVER-ZOOM" ANIMS
        transform: scale(1.2);
        transition: all 0.5s;
        cursor: pointer;
      }
    }
  }
  .nav-btns {
    bottom: 10%;
    width: 80%;
    margin: 0 10%;
    display: flex;
    flex-direction: column;
    .auth-btn, .create-acc-btn {
      width: 100%;
      margin: 0.5em 0;
      .v-btn {
        font-size: 1.2em;
      }
    }
  }
  .auth-input.v-text-field > .v-input__control > .v-input__slot:before {
      border-style: none;
  }

  @media screen and (max-width: 800px) {
    max-width: 75%;
  }
  @media screen and (max-width: 500px) {
    max-width: 100%;
    margin: 0;

    .welcome-text {
      margin-top: 10vh;
    }

    .auth {
      font-size: 0.8em;

      .auth-form {
        width: 90%;
      }

      .nav-btns {
        margin: 0 auto;
        width: 80%;
      }
    }
  }

  @media screen and (min-width: 1500px) {
    width: 50%;
  }
}

</style>