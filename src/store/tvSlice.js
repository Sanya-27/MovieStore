import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tv_data: [],
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    storeTv: (state, action) => {
      state.tv_data = action.payload;
    },
  },
});
export const { storeTv } = tvSlice.actions;

export default tvSlice.reducer;
