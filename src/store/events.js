import eventService from '../services/eventService'

const events = {
    namespaced: true,
    state: {
        general: []
    },
    mutations: {
        setGeneralEvents(state, events) {
            state.general = [...state.general, ...events]
        },
    },
    actions: {
        // "QUERY" - makes some form of request to get data from the DB
        queryAllEvents({ commit }) {
            return eventService.getAllEventData()
            .then((data) => {
                commit('setGeneralEvents', data.data)
            })
            .catch((err) => {
                //TODO: Need to use error handlers (popups or something) here
                console.error(err)
            })
        }
    }
}

export default events