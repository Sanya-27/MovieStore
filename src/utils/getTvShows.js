import axios from "axios";
import { storeTv } from "../store/tvSlice";

const URL = process.env.REACT_APP_TV_API;
const API_KEY = process.env.REACT_APP_API_KEY;

const getTvShows =
  (dispatch) =>
  async (page = 1, category = "popular") => {
    if (!dispatch) return;
    try {
      const response = await axios.get(
        `${URL}/${category}?api_key=${API_KEY}&page=${page}`
      );
      const results = response.data.results.map((e) => ({
        ...e,
        title: e.original_name,
      }));

      dispatch(storeTv(results));
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  };

export default getTvShows;
