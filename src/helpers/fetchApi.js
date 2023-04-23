import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api';

// authors GET
const getAllAuthors = async () => {
  try {
    const resp = await axios.get('/authors/');
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
// events GET
const getAllEvents = async id => {
  try {
    const resp = await axios.get(`/events/author/${id}`);
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
export { getAllAuthors, getAllEvents, getAuthorById, getEventById };
