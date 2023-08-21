import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from '../interface/Interfaces';

const initialState: CartState = {
  products: [],
};

export const CartCounterSlice = createSlice({
  name: 'CartProducts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productIdToRemove
      );
    },
  },
});

export const { addToCart, removeFromCart } = CartCounterSlice.actions;

export default CartCounterSlice.reducer;
