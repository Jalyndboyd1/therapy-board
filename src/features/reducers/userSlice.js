import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  userToken: null
};

export const userData = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleUserLogin: (state, action) => {
      state.user = action.payload;
    },
    handleUserToken: (state, action) => {
        state.userToken = action.payload
    }
  },
});

export const { handleUserLogin, handleUserToken } = userData.actions

export const userObject = (state) => state.userData.user;

export default userData.reducer;
