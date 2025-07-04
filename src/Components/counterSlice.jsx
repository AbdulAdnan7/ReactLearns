// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  value: 0
};

// Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    }
  }
});

// Export actions and reducer
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
