import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRoute: "",
  selectedPath: "/"
};

export const routes = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleSelectedRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
    handleSelectedPath: (state, action) => {
      state.selectedPath = action.payload
    }
  },
});

export const { handleSelectedRoute, handleSelectedPath } = routes.actions;

export const selectRoute = (state) => state.routes.selectedRoute;
export const selectPath = (state) => state.routes.selectedPath;


export default routes.reducer;
