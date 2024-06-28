import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import CryptoJS from 'crypto-js';

// Define types
interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface PaymentState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const secretKey = 'your-secret-key';

// Create async thunk for payment processing
export const processPayment = createAsyncThunk<
  {success: boolean},
  PaymentData,
  {rejectValue: string}
>('payment/processPayment', async (paymentData, {rejectWithValue}) => {
  try {
    // Encrypt sensitive payment data
    const encryptedData = {
      cardNumber: CryptoJS.AES.encrypt(
        paymentData.cardNumber,
        secretKey,
      ).toString(),
      expiryDate: CryptoJS.AES.encrypt(
        paymentData.expiryDate,
        secretKey,
      ).toString(),
      cvv: CryptoJS.AES.encrypt(paymentData.cvv, secretKey).toString(),
    };

    // Simulate API call with encrypted data
    const response = await new Promise<{success: boolean}>(resolve => {
      setTimeout(() => {
        resolve({success: true});
      }, 2000);
    });

    return response;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

// Initial state for payment slice
const initialState: PaymentState = {
  loading: false,
  success: false,
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {}, // No synchronous reducers defined
  extraReducers: builder => {
    builder
      .addCase(processPayment.pending, state => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(processPayment.fulfilled, state => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(
        processPayment.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.success = false;
          state.error = action.payload ?? 'Unknown error';
        },
      );
  },
});

export default paymentSlice.reducer;
