import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const appSlice = createSlice({
  name: 'rooms',
  initialState,
  // reducers: {
  //   increment: (state) => {
  //     state.value += 1;
  //   },
  // },

});

export const selectCount = (state) => state.rooms.value;

export default appSlice.reducer;
