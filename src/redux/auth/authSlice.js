import { createSlice } from '@reduxjs/toolkit';
import { login, register, logOut, refreshUser } from './operations';
const initialState = {
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
// const extraActions = [login, register, logOut, refreshUser];
// const getActions = type => extraActions.map(actions => actions[type]);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});
export const authReducer = authSlice.reducer;
