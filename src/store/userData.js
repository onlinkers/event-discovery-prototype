import userService from '../services/userService'
import Vue from 'vue'

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
        queryUserData({ commit }, userIds) {
            return userService.getUserData({ ids: userIds })
            .then((data) => {
                commit('setUserData', data.data)
            })
            .catch((err) => {
                Vue.toasted.global.errorMessage({
                    message: err
                })
            })
        }
    }
}

export default userData