import { configureStore } from '@reduxjs/toolkit';
import greenReducer from './greenSlice';

export const store = configureStore({
  reducer: {
    counter: greenReducer,
  },
});