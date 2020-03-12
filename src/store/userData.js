import userService from '../services/userService'

const userData = {
    namespaced: true,
    state: {},
    mutations: {
        setUserData(state, data) {
            state = { ...state, ...data }
        },
    },
    actions: {
        // "QUERY" - makes some form of request to get data from the DB
        queryUserData({ commit }, userId) {
            return userService.getUserData({ id: userId })
            .then((data) => {
                commit('setUserData', data.data)
            })
            .catch((err) => {
                //TODO: Need to use error handlers (popups or something) here
                console.error(err)
            })
        }
    }
}

export default userData