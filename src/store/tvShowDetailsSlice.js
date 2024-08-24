import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tv_details: {},
};

export const tvShowDetailSlice = createSlice({
  name: "tvDetails",
  initialState,
  reducers: {
    storeTVDetails: (state, action) => {
      state.tv_details = action.payload;
    },
    resetTVShow: (state) => {
      state.tv_details = {};
    },
  },
});
export const { storeTVDetails, resetTVShow } = tvShowDetailSlice.actions;

export default tvShowDetailSlice.reducer;
