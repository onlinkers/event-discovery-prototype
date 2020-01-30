<template>
  <div class="explore-bar-wrapper">
    <mq-layout mq="desktop">
      <CreateEventModal v-show="isEventCreateModalVisible" @close="triggerEventCreateModal()"/>
      <div class="navbar">
        <router-link class="logo" to="/">
          <h1>LINK-LINK</h1>
        </router-link>
        <div class="nav-links">
          <router-link to="#" class="page-link">
            <h3 :class="{'active-page': activePage === 'Dashboard'}">Dashboard</h3>
          </router-link>
          <router-link to="/discover" class="page-link">
            <h3 :class="{'active-page': activePage === 'Discover'}">Discover</h3>
          </router-link>
          <router-link to="#" class="page-link">
            <h3 :class="{'active-page': activePage === 'Moments'}">Moments</h3>
          </router-link>
          <router-link to="#" class="page-link" @click.native="triggerEventCreateModal()">
            <h3 :class="{'active-page': activePage === 'Create'}">Create</h3>
          </router-link>
          <!-- <v-btn color="secondary" text @click="triggerEventCreateModal()" class="temp-create-btn">
            <v-icon>mdi-plus</v-icon>
          </v-btn> -->
        </div>
        <v-btn color="primary" fab small text class="profile-icon">
          <font-awesome-icon icon="user-circle" class="fa-2x"></font-awesome-icon>
        </v-btn>
      </div>
    </mq-layout>
    <mq-layout mq="mobile">
      <div class="explore-window__button">
        <!-- <mq-layout mq="desktop">
          <h3 id="explore-text">EXPLORE</h3>
        </mq-layout> -->
        <Eclipse />
      </div>
      <!-- these icons only show up on mobile -->
      <div class="explore-bar-icons">
        <div class="left-icons icon-wrapper">
          <v-btn color="primary" fab small text class="nav-icon">
            <font-awesome-icon icon="home" class="fa-2x"></font-awesome-icon>
          </v-btn>
          <v-btn color="primary" fab small text class="nav-icon">
            <font-awesome-icon icon="globe-africa" class="fa-2x"></font-awesome-icon>
          </v-btn>
        </div>
        <div class="right-icons icon-wrapper">
          <v-btn color="primary" fab small text class="nav-icon">
            <font-awesome-icon icon="inbox" class="fa-2x"></font-awesome-icon>
          </v-btn>
          <v-btn color="primary" fab small text class="nav-icon">
            <font-awesome-icon icon="user-circle" class="fa-2x"></font-awesome-icon>
          </v-btn>
        </div>
      </div>
    </mq-layout>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'
import Eclipse from '@/assets/icons/mobile-explore-bar/explore-eclipse'
import CreateEventModal from '@/components/createEventModal'

export default {
  props: {
    currPageProp: {
      type: String
    }
  },
  data() {
    return {
      activePage: this.currPageProp,
      isEventCreateModalVisible: false,
    }
  },
  components: {
    Eclipse,
    CreateEventModal,
  },
  created: {
    eventCreateListen() {
      EventBus.$on('eventModalActivated', () => {
        this.triggerEventCreateModal();
      })
    },
    eventDismissListen() {
      EventBus.$on('close', () => {
        console.log('close modal');
        this.isEventCreateModalVisible = false;
      })
    }
  },
  methods : {
    triggerEventCreateModal() {
      this.isEventCreateModalVisible = !this.isEventCreateModalVisible;
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.active-page {
    color: $primary !important;
}
.active-page::after {
  position: relative;
  display: block;
  content: "";
  height: 2px;
  bottom: 30%;
  width: 100%;
  background: $primary;
  transition: opacity 0.5s;
}
.explore-bar-wrapper {
  position: fixed;
  font-size: 14px;
  bottom: 0;
  width: 100%;
  .navbar {
    position: fixed;
    top: 0;
    height: 10%;
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      font-family: 'Nunito', sans-serif;
      text-decoration: none;
      align-items: center;
      margin-left: 2%;
      h1 {
        color: $primary;
        font-weight: 900;
      }
    }
    .nav-links {
      display: flex;
      flex-direction: row;
    }
    .page-link {
      text-decoration: none;
      font-family: 'Nunito', sans-serif;
      h3 {
        color: $secondary;
        font-weight: 600;
        margin: 0 2em;
      }
    }
    .profile-icon {
      margin-right: 10em;
      transform: translateX(200%);
    }
  }
  .explore-window__button {
    bottom: 8vh;
    display: flex;
    flex-direction: column;
    left: 50%;
    align-items: center;
    position: absolute;
    transform: translate(-50%, 50%);
    @media screen and (max-height: 600px) {
      bottom: 10vh
    }
    .explore-window__button-icon {
      width: 7em;
      height: 7em;
      cursor: pointer;
      g circle {
        fill:blue;
        fill-opacity: 0.65;
        transition: all 0.3s;
      }
      &:hover {
        g circle {
          fill-opacity: 0.85;
        }
      }
    }
  }
  .explore-bar-icons {
    height: 8vh;
    background: white;
    .icon-wrapper {
      display: inline-block;
      position: absolute;
    }
    .left-icons {
      left: 0;
      top: 50%;
      transform: translateY(-50%);

    }
    .right-icons {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .nav-icon {
      margin: 0 1.5em;
    }
  }
}
</style>