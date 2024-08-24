import axios from "axios";
import { storeSearch } from "../store/searchSlice";

const SEARCH = process.env.REACT_APP_SEARCH_API;
const API_KEY = process.env.REACT_APP_API_KEY;

const getSearch =
  (dispatch) =>
  async (q, page = 1, category) => {
    if (!dispatch) return;
    const response = await axios
      .get(
        `${SEARCH}/${category}?query=${q}&language=en-US&page=${page}&api_key=${API_KEY}`
      )
      .then((res) => res.data);

    if (category === "tv") {
      const results = response.results.map((e) => ({
        ...e,
        title: e.original_name,
      }));
      dispatch(
        storeSearch({
          response: results,
          total_pages: response.total_pages,
        })
      );
    } else {
      dispatch(
        storeSearch({
          response: response.results,
          total_pages: response.total_pages,
        })
      );
    }
  };

export default getSearch;
