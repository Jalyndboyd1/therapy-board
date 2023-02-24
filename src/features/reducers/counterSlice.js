import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRoute: "",
};

export const routes = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleSelectedRoute: (state, action) => {
      state.selectedRoute = action.payload;
    }
  },
});

export const { handleSelectedRoute } = routes.actions;

export const selectRoute = (state) => state.routes.selectedRoute;

export default routes.reducer;
