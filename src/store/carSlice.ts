import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Car {
    quantity: number
    id: number
}

export const carSlice = createSlice({
  name: 'car',
  initialState: {
    car: [] as Car[]
  },
  reducers: {
    addCar: (state, actions) => {
      console.log('actions', actions)
      const isExist = state.car.findIndex(i => i.id === actions.payload.id)
      if (isExist === -1) {
        state.car = [...state.car, actions.payload];
      } else {
        const preQuantity = state.car[isExist].quantity
        const preCar = [...state.car]
        preCar.splice(isExist, 1)
        state.car = [...preCar, {id: actions.payload.id, quantity: actions.payload.quantity + preQuantity}];
      }
    },
  },
});

export const selectCar = (state: RootState) => state.car.car;

export const { addCar } = carSlice.actions;

export default carSlice.reducer;
