import { configureStore } from '@reduxjs/toolkit';
import incrementByAmount from '../Slice/CartCounterSlice';
import addToCart from '../Slice/CartProductsSlice';
import removeFromCart from '../Slice/CartProductsSlice';
import setSubTotal from '../Slice/CartTotalsSlice';
import singleProduct from '../Slice/SingleProductSlice';

export const store = configureStore({
  reducer: {
    incrementByAmount,
    addToCart,
    removeFromCart,
    setSubTotal,
    singleProduct,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
