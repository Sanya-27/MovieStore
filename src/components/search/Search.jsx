import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cards from "../cards/Cards";
import "./Search.css";
import Noresult from "../noresult/Noresult";
import Pagination from "../pagination/Pagination";
import Footer from "../footer/Footer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import getSearch from "../../utils/getSearch";
const IMAGE = process.env.REACT_APP_IMAGE;

const Search = () => {
  const [query] = useSearchParams();
  const [category, setCategory] = useState("movie");
  const [searchquery, setsearchquery] = useState("movie");
  const [current, setcurrent] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const disp = useDispatch();
  const search_data = getSearch(disp);
  const storeSearchData = useSelector((state) => state.search.search_data);
  const storeTotalPages = useSelector((state) => state.search.total_pages);
  const navigate = useNavigate();
  const path = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    let q = query.get("query");
    setsearchquery(q);
    setTotalPages(storeTotalPages);
    search_data(q, current, category);
  }, [query, current, category, storeTotalPages]);
  useEffect(() => {
    let q = query.get("query");

    navigate(`${path}?query=${q}&page=${current}`);
  }, [current, category]);

  const handleClick = (pageNumber) => {
    setcurrent(pageNumber);
  };
  return (
    <>
      <div className="search-wrapper">
        <div className="category-toggle-search">
          <button
            onClick={() =>
              setCategory((prevCategory) =>
                prevCategory === "movie" ? "tv" : "movie"
              )
            }
            className="switchbutton"
          >
            <span className={`Movies ${category === "movie" ? "active" : ""}`}>
              Movies
            </span>
            <span className={`TV ${category === "tv" ? "active" : ""}`}>
              TV
            </span>
          </button>
          {storeSearchData && storeSearchData.length > 0 ? (
            category === "movie" ? (
              <strong className="movie-heading">
                Related Movies for{" "}
                <span style={{ color: "red" }}>&apos;{searchquery}&apos;</span>
              </strong>
            ) : (
              <strong className="movie-heading">
                Related TV Shows for{" "}
                <span style={{ color: "red" }}>&apos;{searchquery}&apos;</span>
              </strong>
            )
          ) : (
            <Noresult />
          )}
        </div>
        <div className="search-container">
          {storeSearchData &&
            storeSearchData.map((movie) => (
              <Cards
                data={movie}
                IMAGE={IMAGE}
                key={movie.id}
                type={category}
              />
            ))}
        </div>
        <Pagination
          handleClick={handleClick}
          current={current}
          totalPages={totalPages}
        />
        <Footer />
      </div>
    </>
  );
};

export default Search;
