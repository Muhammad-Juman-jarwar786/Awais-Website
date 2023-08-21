import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartCounterState } from '../interface/Interfaces';

const initialState: CartCounterState = {
  value: 0,
};

export const CartCounterSlice = createSlice({
  name: 'CartCounter',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = CartCounterSlice.actions;

export default CartCounterSlice.reducer;
