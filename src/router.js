import Vue from 'vue'
import Router from 'vue-router'

import Welcome from './views/Welcome'
import SignUp from './views/SignUp'
import Discover from './views/Discover'
import EventPage from './views/EventPage'

/* FOR TESTING */
import createEventModal from './components/createEventModal'
import eventInitiation from './components/eventInitiation'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'onboarding',
      component: Welcome,
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp,
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/createEventModal',
      name: 'create-event',
      component: createEventModal
    },
    {
      path: '/eventpage',
      name: 'event-page',
      component: EventPage
    },
    {
      path: '/eventInitiation',
      name: 'event-initiation',
      component: eventInitiation
    },
  ]
})

export default router