import { configureStore } from "@reduxjs/toolkit";
import movieReducer, { storeMovie } from "./moviesSlice";
import tvReducer, { storeTv } from "./tvSlice";
import movieDetailsReducer, { storeMovieDetails } from "./movieDetailsSlice";
import tvDetailsReducer, { storeTVDetails } from "./tvShowDetailsSlice";

describe("movieSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        movie: movieReducer,
      },
    });
  });

  test("should return the initial state  of movie", () => {
    const initialState = { movies_data: [] };
    const state = store.getState().movie;
    expect(state).toEqual(initialState);
  });

  test("should handle storing movies", () => {
    const movies = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ];
    store.dispatch(storeMovie(movies));
    const state = store.getState().movie;
    expect(state.movies_data).toEqual(movies);
  });
});

describe("tvSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        tv: tvReducer,
      },
    });
  });

  test("should return the initial state  of tv", () => {
    const initialState = { tv_data: [] };
    const state = store.getState().tv;
    expect(state).toEqual(initialState);
  });

  test("should handle storing tv", () => {
    const tv = [
      { id: 1, title: "TV 1" },
      { id: 2, title: "TV 2" },
    ];
    store.dispatch(storeTv(tv));
    const state = store.getState().tv;
    expect(state.tv_data).toEqual(tv);
  });
});

describe("movieDetails", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        movieDetails: movieDetailsReducer,
      },
    });
  });

  test("should return the initial state  of movieDetails", () => {
    const initialState = { movie_details: {} };
    const state = store.getState().movieDetails;
    expect(state).toEqual(initialState);
  });

  test("should handle storing movieDetails", () => {
    const movieDetails = [
      { id: 1, title: "Movie 1", overview: "Information about movie" },
    ];
    store.dispatch(storeMovieDetails(movieDetails));
    const state = store.getState().movieDetails;
    expect(state.movie_details).toEqual(movieDetails);
  });
});

describe("tvDetails", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        tvDetails: tvDetailsReducer,
      },
    });
  });

  test("should return the initial state  of tvDetails", () => {
    const initialState = { tv_details: {} };
    const state = store.getState().tvDetails;
    expect(state).toEqual(initialState);
  });

  test("should handle storing tvDetails", () => {
    const tvDetails = [
      { id: 1, title: "Tv-show 1", overview: "Information about tv-Show" },
    ];
    store.dispatch(storeTVDetails(tvDetails));
    const state = store.getState().tvDetails;
    expect(state.tv_details).toEqual(tvDetails);
  });
});
