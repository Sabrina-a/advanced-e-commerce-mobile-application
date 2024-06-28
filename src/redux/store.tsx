import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './reducerSlices/cartSlice';
import authReducer from './reducerSlices/authSlice';
import paymentReducer from './reducerSlices/paymentSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    payment: paymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
