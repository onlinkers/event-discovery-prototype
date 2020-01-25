<template>
  <div class="explore-bar-wrapper">
    <div class="explore-window__button">
      <!-- <mq-layout mq="desktop">
        <h3 id="explore-text">EXPLORE</h3>
      </mq-layout> -->
      <Eclipse />
    </div>
    <!-- these icons only show up on mobile -->
    <div class="explore-bar-icons">
      <mq-layout mq="mobile">
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
      </mq-layout>
    </div>
  </div>
</template>

<script>
  import Eclipse from '@/assets/icons/mobile-explore-bar/explore-eclipse'

  export default {
    components: {
      Eclipse
    },
    props: {
      // plan to pass down the current page of the app, to be used as a v-if so a rect can be shown over the current page icon
    }
  }
</script>
<style lang="scss">
.explore-bar-wrapper {
  position: fixed;
  font-size: 14px;
  bottom: 0;
  width: 100%;
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