import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: 0,
      name: ''
    }
  },
  reducers: {
    updateUserInfo: (state, actions) => {
      console.log('actions', actions)
      state.user = actions.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;

export const { updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
