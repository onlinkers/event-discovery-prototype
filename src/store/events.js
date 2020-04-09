import eventService from '../services/eventService'
import Vue from 'vue'

const events = {
  namespaced: true,
  state: {
    general: {},
    local: {}
  },
  mutations: {
    setGeneralEvents(state, events) {
      state.general = { ...state.general, ...events };
    },
    setLocalEvent(state, event) {
      state.local = event
    }
  },
  actions: {
    // "QUERY" - makes some form of request to get data from the DB
    queryAllEvents({ commit }) {
      return eventService.getAllEventData()
        .then((data) => {
          commit('setGeneralEvents', data.data)
        })
        .catch((err) => {
          Vue.toasted.global.errorMessage({
              message: err
          })
        })
    },
    queryLocalEvent({ commit }, id) {
      return eventService.getEventData({ id })
        .then((data) => {
          commit("setLocalEvent", Object.values(data).data);
        })
        .catch((err) => {
          Vue.toasted.global.errorMessage({
            message: err
          });
        });
    }
  }
}

export default events