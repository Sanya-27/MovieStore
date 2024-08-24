import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie_details: {},
};

export const movieDetailSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    storeMovieDetails: (state, action) => {
      state.movie_details = action.payload;
    },
    reset: (state) => {
      state.movie_details = {};
    },
  },
});
export const { storeMovieDetails, reset } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
