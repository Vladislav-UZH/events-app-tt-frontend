import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/';

/**
 *
 * @param {string} token
 * utility to add JWT
 */
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
/**
 *
 *
 * utility to remove JWT
 */
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
/**
 * POST @ /user/signup
 * body: {name,email,password}
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/registration', credentials);
      setAuthHeader(res.data.token);
      return res.data.data;
    } catch (err) {
      alert('The email is already registered');

      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
/**
 * POST @ /user/login
 * body: {email,password}
 */
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.data.token);
      return res.data.data;
    } catch (err) {
      alert('Email or password invalid');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
/**
 * POST @ /user/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
/**
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);

      const res = await axios.get('/auth/current');
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
