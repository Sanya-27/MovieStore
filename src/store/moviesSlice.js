import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies_data: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    storeMovie: (state, action) => {
      state.movies_data = action.payload;
    },
  },
});
export const { storeMovie } = movieSlice.actions;

export default movieSlice.reducer;
