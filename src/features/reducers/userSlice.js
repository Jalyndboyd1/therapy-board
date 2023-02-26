import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  userToken: null
};

export const userData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleUserLogin: (state, action) => {
      state.user = action.payload;
    },
    handleUserLogout: (state, action) => {
      state.user = null
    },
    handleUserToken: (state, action) => {
      state.userToken = action.payload
    }
  },
});

export const { handleUserLogin, handleUserLogout, handleUserToken } = userData.actions

export const userObject = (state) => state.userData.user;

export default userData.reducer;
