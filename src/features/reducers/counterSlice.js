import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRoute: "",
};

export const routes = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleSelectedRoute: (state, action) => {
      state.selectedRoute = action.payload;
    }
  },
});

export const { handleSelectedRoute } = routes.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRoute = (state) => state.routes.selectedRoute;

export default routes.reducer;
