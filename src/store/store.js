import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import storeMovieDetails from "./movieDetailsSlice";
import storeTVDetails from "./tvShowDetailsSlice";
import searchReducer from "./searchSlice";

const rootReducer = {
  movies: movieReducer,
  tv: tvReducer,
  movieDetailsReducer: storeMovieDetails,
  tvDetailsReducer: storeTVDetails,
  search: searchReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
