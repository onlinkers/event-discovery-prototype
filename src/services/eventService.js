import api from "../api";

export default {
  getAllEventData: () => {
    return api().get("/events");
  },
  getEventData: ({ id }) => {
    return api().get(`/events/${id}`);
  },
  createEvent: (payload) => {
    return api().post("/events", payload);
  },
  updateEvent: ({ id, payload }) => {
    return api().put(`/events/${id}`, payload);
  },
  deleteEvent: ({ id }) => {
    return api().delete(`/events/${id}`);
  }
};