import api from '../api'

export default {
    getAllUserData: () => {
        return api().get('/users')
    },
    getUserData: ({ id }) => {
        return api().get(`/users/${id}`)
    },
    createUser: (payload) => {
        return api().post('/users', payload)
    },
    updateUser: ({ id, payload }) => {
        return api().put(`/users/${id}`, payload)
    },
    deleteUser: ({ id }) => {
        return api().delete(`/users/${id}`)
    }
}