import axios from "axios";
import { storeMovie } from "../store/moviesSlice";

const URL = process.env.REACT_APP_MOVIE_API;
const API_KEY = process.env.REACT_APP_API_KEY;

const getMovies =
  (dispatch) =>
  async (page = 1, category = "popular") => {
    if (!dispatch) return;
    const response = await axios
      .get(`${URL}/${category}?api_key=${API_KEY}&page=${page}`)
      .then((res) => res.data)
      .catch("Some Error Occurred");

    // console.log(dispatch);
    dispatch(storeMovie(response.results));
  };

export default getMovies;
