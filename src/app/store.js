import { configureStore } from '@reduxjs/toolkit';
import routes from '../features/reducers/counterSlice';
import userData  from '../features/reducers/userSlice';

export const store = configureStore({
  reducer: {
    routes,
    userData
  },
});
