import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search_data: [],
  total_pages: 0,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    storeSearch: (state, action) => {
      state.search_data = action.payload.response;
      state.total_pages = action.payload.total_pages;
    },
  },
});
export const { storeSearch } = searchSlice.actions;

export default searchSlice.reducer;
