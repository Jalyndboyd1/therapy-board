import { configureStore } from '@reduxjs/toolkit';
import routes from '../features/reducers/counterSlice';

export const store = configureStore({
  reducer: {
    routes: routes,
  },
});
