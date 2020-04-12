import api from '../api'

export default {
  getAllUserData: () => {
    return api().get("/users");
  },
  getUserData: ({ ids }) => {
    return api().get(`/users/${ids}`);
  },
  createUser: (payload) => {
    return api().post("/user", payload);
  },
  updateUser: ({ id, payload }) => {
    return api().put(`/user/${id}`, payload);
  },
  deleteUser: ({ id }) => {
    return api().delete(`/user/${id}`);
  }
};
