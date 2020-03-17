<template>
  <div class="page-container">
    <!-- DESKTOP VIEW -->
    <mq-layout mq="desktop">
      <div class="desktop-navbar">
        <router-link class="logo" to="/">
          <h1>LINK-LINK</h1>
        </router-link>
        <div class="page-links">
          <router-link to="/" class="page-link">
            <h3 :class="{ 'page-link--active': activePage === 'dashboard' }">
              Dashboard
            </h3>
          </router-link>
          <router-link to="/discover" class="page-link">
            <h3 :class="{ 'page-link--active': activePage === 'discover' }">
              Discover
            </h3>
          </router-link>
          <router-link to="#" class="page-link">
            <h3 :class="{ 'page-link--active': activePage === 'moments' }">
              Moments
            </h3>
          </router-link>
          <router-link to="/new" class="page-link">
            <h3 :class="{ 'page-link--active': activePage === 'create' }">
              Create
            </h3>
          </router-link>
        </div>
        <v-btn
color="primary"
class="profile-icon"
fab
large
text>
          <font-awesome-icon icon="user-circle" class="fa-2x" />
        </v-btn>
      </div>
    </mq-layout>

    <!-- MOBILE VIEW -->
    <mq-layout mq="mobile">
      <div class="mobile-navbar">
        <div class="main-icon">
          <Eclipse />
        </div>

        <div class="navbar-icons">
          <div class="left-icons icons-wrapper">
            <router-link to="/">
              <img
                src="../assets/icons/mobile-explore-bar/home-outline.png"
                alt
                class="icon"
                :class="{ 'icon--active': activePage === 'dashboard' }"
              />
            </router-link>
            <router-link to="/discover">
              <img
                src="../assets/icons/mobile-explore-bar/earth-outline.png"
                alt
                class="icon"
                :class="{ 'icon--active': activePage === 'discover' }"
              />
            </router-link>
          </div>
          <div class="right-icons icons-wrapper">
            <router-link to="/">
              <img
                src="../assets/icons/mobile-explore-bar/bulb-outline.png"
                alt
                class="icon"
                :class="{ 'icon--active': activePage === 'ideas' }"
              />
            </router-link>
            <router-link to="/">
              <img
                src="../assets/icons/mobile-explore-bar/person-circle-outline.png"
                alt
                class="icon"
                :class="{ 'icon--active': activePage === 'profile' }"
              />
            </router-link>
          </div>
        </div>
      </div>
    </mq-layout>
  </div>
</template>

<script>
import Eclipse from "@/assets/icons/mobile-explore-bar/explore-eclipse";

export default {
  components: {
    Eclipse
  },
  props: {
    currPageProp: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      activePage: ""
    };
  },
  created() {
    // if (this.currPageProp) {
    //   this.activePage = this.currPageProp.name;
    // }
    this.activePage = this.$route.name;
  }
};
</script>

<style lang="scss">
.page-container {
  position: fixed;
  bottom: 0;
  width: 100%;

  /* DESKTOP */
  .desktop-navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 10vh;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2%;
    text-decoration: none;

    .logo {
      text-decoration: none;
      color: $primary-alt;
      font-family: $text-secondary;
      font-weight: 700;
    }

    .page-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .page-link {
        font-family: $text-secondary;
        font-weight: 700;
        font-size: 1em;
        text-decoration: none;
        color: $secondary;
        margin: 0 5%;
      }

      .page-link--active {
        color: $primary-alt !important;
        &::after {
          content: "";
          position: relative;
          display: block;
          height: 2px;
          bottom: 30%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          background: $primary;
          transition: all 0.5s;
        }
      }
    }
  }

  /* MOBILE */
  .mobile-navbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
    height: 8vh;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);

    .main-icon {
      bottom: 8vh;
      display: flex;
      flex-direction: column;
      left: 50%;
      align-items: center;
      position: absolute;
      transform: translate(-50%, 50%);
      .eclipse-icon {
        width: 12vh;
        height: 12vh;
        cursor: pointer;
        g circle {
          fill: blue;
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

    .navbar-icons {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .icons-wrapper {
        display: flex;
        width: 25%;
        justify-content: space-between;
      }

      .left-icons {
        margin-right: 10%;
      }

      .right-icons {
        margin-left: 10%;
      }

      .icon {
        opacity: 0.8;
      }
      .icon--active {
        opacity: 1;
      }
    }
  }
}

// .active-page {
//   color: $primary !important;
// }
// .active-page::after {
//   position: relative;
//   display: block;
//   content: "";
//   height: 2px;
//   bottom: 30%;
//   width: 100%;
//   background: $primary;
//   transition: opacity 0.5s;
// }
// .explore-bar-wrapper {
//   position: fixed;
//   font-size: 1.5em;
//   bottom: 0;
//   width: 100%;
//   .navbar {
//     position: fixed;
//     top: 0;
//     min-height: 10vh;
//     background-color: white;
//     width: 100%;
//     display: flex;
//     flex-grow: 1;
//     align-items: center;
//     justify-content: space-between;
//     .logo {
//       font-family: "Nunito", sans-serif;
//       text-decoration: none;
//       align-items: center;
//       white-space: nowrap;
//       margin: 0 2%;
//       h1 {
//         color: $primary;
//         font-size: 1.5em;
//         font-weight: 900;
//       }
//     }
//     .nav-links {
//       display: flex;
//       flex-direction: row;
//       flex-grow: 1;
//       justify-content: space-evenly;
//       max-width: 50em;
//     }
//     .page-link {
//       text-decoration: none;
//       font-family: "Nunito", sans-serif;
//       h3 {
//         color: $secondary;
//         font-weight: 600;
//         font-size: 1em;
//       }
//     }
//     .profile-icon {
//       margin-right: 1em;
//     }
//   }
//   .explore-window__button {
//     bottom: 8vh;
//     display: flex;
//     flex-direction: column;
//     left: 50%;
//     align-items: center;
//     position: absolute;
//     transform: translate(-50%, 50%);
//     .explore-window__button-icon {
//       width: 4em;
//       height: 4em;
//       cursor: pointer;
//       g circle {
//         fill: blue;
//         fill-opacity: 0.65;
//         transition: all 0.3s;
//       }
//       &:hover {
//         g circle {
//           fill-opacity: 0.85;
//         }
//       }
//     }
//   }
//   .explore-bar-icons {
//     background: white;
//     flex-grow: 1;
//     display: flex;
//     .icon-wrapper {
//       display: flex;
//       flex-direction: row;
//       justify-content: space-around;
//       align-items: center;
//       width: 40vw;
//       height: 100%;
//       margin-top: 0.5em;
//       margin-bottom: 0.5em;

//       img {
//         max-width: 2em;
//         margin-left: 1em;
//         margin-right: 1em;
//       }
//     }

//     .left-icons {
//       margin-right: 10vw;
//     }

//     .right-icons {
//       margin-left: 10vw;
//     }
//   }
// }
</style>
