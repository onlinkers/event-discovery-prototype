import eventService from '../services/eventService'
import Vue from 'vue'

const events = {
  namespaced: true,
  state: {
    general: {},
    local: {},
    categories: {},
    loaded: false,
  },
  mutations: {
    setGeneralEvents(state, events) {
        state.general = { ...state.general, ...events }
    },
    setLocalEvent(state, event) {
        state.local = event
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    setLoaded(state, status) {
      state.loaded = status
    }
  },
  actions: {
    // "QUERY" - makes some form of request to get data from the DB
    queryAllEvents({ commit }) {
      return eventService.getAllEventData()
      .then((data) => {
          commit('setGeneralEvents', data.data);
      })
      .catch((err) => {
          Vue.toasted.global.errorMessage({
              message: err
          })
      })
    },
    queryLocalEvent({ commit }, id) {
      return eventService.getEventData({ ids: id })
      .then((data) => {
        const event = Object.values(data.data)[0]
          commit('setLocalEvent', event)
          return event;
      })
      .catch((err) => {
          Vue.toasted.global.errorMessage({
              message: err
          })
      })
    },
    queryEventCategories({ commit }) {
      return eventService.getEventCategories()
      .then((data) => {
          commit('setCategories', data.data)
      })
      .catch((err) => {
          Vue.toasted.global.errorMessage({
              message: err
          })
      })
    }
  }
}

export default events