import Vue from 'vue'
import Router from 'vue-router'

import Welcome from './views/Welcome'
import SignUp from './views/SignUp'
import Discover from './views/Discover'

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
    }
  ]
})

export default router