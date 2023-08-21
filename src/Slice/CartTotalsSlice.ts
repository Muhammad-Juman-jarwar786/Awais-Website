import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subTotal: 0,
};

export const CartTotalsSlice = createSlice({
  name: 'cartTotals',
  initialState,
  reducers: {
    setSubTotal: (state, action) => {
      state.subTotal = action.payload;
    },
  },
});

export const { setSubTotal } = CartTotalsSlice.actions;

export default CartTotalsSlice.reducer;
