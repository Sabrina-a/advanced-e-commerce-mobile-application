import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../types/types';
import {
  showToastErrorMSG,
  showToastSuccessMessage,
} from '../../utils/utilsFunctions';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state?.items?.find(
        item => item?.id === action?.payload?.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
        showToastSuccessMessage('Product added successfully');
      } else {
        state?.items?.push({...action.payload, quantity: 1});
        showToastSuccessMessage('Product added successfully');
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      console.log("remove from cart")
      state.items = state?.items.filter(item => item?.id !== action?.payload);
      showToastSuccessMessage('Removed successfully');
    },
    clearCart: state => {
      state.items = [];
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state?.items?.find(item => item?.id === action?.payload);
      if (item) {
        item.quantity += 1;
        showToastSuccessMessage(' Product added successfully');
      }

    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item?.id === action?.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;

      } else {
        state.items = state?.items?.filter(
          item => item?.id !== action?.payload,
        );
      }
      showToastSuccessMessage('Removed successfully');

    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
