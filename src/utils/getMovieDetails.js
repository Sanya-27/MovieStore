import axios from "axios";
import { storeMovieDetails } from "../store/movieDetailsSlice";

const URL = process.env.REACT_APP_MOVIE_API;
const API_KEY = process.env.REACT_APP_API_KEY;

const getMovieDetails = (dispatch) => async (id) => {
  if (!dispatch) return;
  const response = await axios
    .get(`${URL}/${id}?api_key=${API_KEY}&append_to_response=videos`)
    .then((res) => res.data);

  dispatch(storeMovieDetails(response));
};

export default getMovieDetails;
