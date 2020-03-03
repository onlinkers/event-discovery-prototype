import Vue from "vue";
import Router from "vue-router";

import Welcome from "./views/Welcome";
import SignUp from "./views/SignUp";
import Discover from "./views/Discover";

/* FOR TESTING */
// import eventInitiation from "./components/eventInitiation";
import EventInitiation from "./views/EventInitiation.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "onboarding",
      component: Welcome
    },
    {
      path: "/discover",
      name: "discover",
      component: Discover
    },
    {
      path: "/signup",
      name: "sign-up",
      component: SignUp
    },
    {
      path: "/new",
      redirect: { path: "/new/0" }
    },
    {
      path: "/new/:step",
      name: "event-initiation",
      component: EventInitiation
    }
  ]
});

export default router;
