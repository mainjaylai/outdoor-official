// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './mainSlice';
import userReducer from './userSlice';
import carReducer from './carSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    car: carReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
