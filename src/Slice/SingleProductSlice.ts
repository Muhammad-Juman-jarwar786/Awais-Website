import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from '../interface/Interfaces';

const initialState: CartState = {
  products: [],
};

export const SingleProductSlice = createSlice({
  name: 'CartProducts',
  initialState,
  reducers: {
    singleProduct: (state, action: PayloadAction<Product>) => {
      state.products[0] = action.payload;
    },
  },
});

export const { singleProduct } = SingleProductSlice.actions;

export default SingleProductSlice.reducer;
