import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api';

// authors GET
const getAllAuthors = async (page = 1, limit = 10) => {
  try {
    const resp = await axios.get(`/authors?page=${page}&limit=${limit}`);
    // console.log('hello', resp);
    return resp;
  } catch (e) {
    console.error(e);
  }
};
const getAuthorById = async id => {
  try {
    const resp = await axios.get(`/authors/${id}`);
    return resp;
  } catch (e) {
    console.error(e);
  }
};
// authors POST
const createAuthor = async body => {
  try {
    const resp = await axios.post('/authors/', body);
    return resp;
  } catch (e) {
    console.error(e);
  }
};
// author DELETE
const deleteAuthor = async id => {
  try {
    const resp = await axios.delete(`/authors/${id}`);
    return resp;
  } catch (e) {
    console.error(e);
  }
};
// events GET
const getAllEvents = async (id, page = 1, limit = 10) => {
  try {
    const resp = await axios.get(
      `/events/author/${id}?page=${page}&limit=${limit}`
    );
    return resp;
  } catch (e) {
    console.error(e);
  }
};
const getEventById = async id => {
  try {
    const resp = await axios.get(`/events/${id}`);
    return resp;
  } catch (e) {
    console.error(e);
  }
};
// events POST
const createEvent = async (id, body) => {
  try {
    const resp = await axios.post(`/events/author/${id}`, body);
    return resp;
  } catch (e) {
    console.error(e);
  }
};
// event DELETE
const deleteEvent = async id => {
  try {
    const resp = await axios.delete(`/events/${id}`);
    return resp;
  } catch (e) {
    console.error(e);
  }
};
export {
  getAllAuthors,
  getAllEvents,
  getAuthorById,
  getEventById,
  createAuthor,
  deleteAuthor,
  createEvent,
  deleteEvent,
};
