// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './mainSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
