import { createSlice } from '@reduxjs/toolkit';

export const greenSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
});

export const { increase, decrease } = greenSlice.actions;

export default greenSlice.reducer;