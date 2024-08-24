import axios from "axios";
import { storeTVDetails } from "../store/tvShowDetailsSlice";

const URL = process.env.REACT_APP_TV_API;
const API_KEY = process.env.REACT_APP_API_KEY;

const getTvShowDetails = (dispatch) => async (id) => {
  if (!dispatch) return;
  const response = await axios
    .get(`${URL}/${id}?api_key=${API_KEY}&append_to_response=videos`)
    .then((res) => res.data);
  console.log("dsdasda", response);
  dispatch(storeTVDetails(response));
};

export default getTvShowDetails;
