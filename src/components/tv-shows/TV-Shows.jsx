import React, { useEffect, useState } from "react";
import "./TV-Shows.css";
import Navbarr from "../navbar/Navbarr";
import Cards from "../cards/Cards";
import Pagination from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import getTvShows from "../../utils/getTvShows";
import { useNavigate, useSearchParams } from "react-router-dom";

const TV_Shows = () => {
  const [totalPages, setTotalPages] = useState(500);
  const [randomTvShow, setRandomTvShow] = useState(null);
  const [category, setCategory] = useState("popular");
  const IMAGE = process.env.REACT_APP_IMAGE;
  const [params] = useSearchParams();
  const [current, setcurrent] = useState(Number(params.get("page")) || 1);
  const navigate = useNavigate();
  const disp = useDispatch();
  const tvDisp = getTvShows(disp);
  const path = window.location.pathname;
  const storeTV = useSelector((state) => state.tv.tv_data);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * storeTV.length);
    setRandomTvShow(storeTV[randomIndex]);
  });

  useEffect(() => {
    tvDisp(current, category);
    navigate(`${path}?page=${current}`);
  }, [current, category]);

  const handleClick = (pageNumber) => {
    setcurrent(pageNumber);
  };

  const handleDetails = () => {
    console.log("sajkdasjdk");
  };

  if (!storeTV.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tv-container">
      <Navbarr />
      {randomTvShow && (
        <div className="backdrop-container">
          <img
            src={`${IMAGE}/original${randomTvShow.backdrop_path}`}
            className="backdrop-image"
          />

          <div className="backdrop-info">
            <h1>{randomTvShow.name}</h1>
            <p>
              {" "}
              {randomTvShow.overview.split(" ").length > 60
                ? randomTvShow.overview.split(" ").slice(0, 60).join(" ") +
                  "..."
                : randomTvShow.overview}
            </p>
          </div>
        </div>
      )}

      <div className="category-toggle">
        <button
          onClick={() =>
            setCategory((prevCategory) =>
              prevCategory === "popular" ? "top_rated" : "popular"
            )
          }
          className="switchbutton"
        >
          <span className={`Popular ${category === "popular" ? "active" : ""}`}>
            Popular
          </span>
          <span className={`Top ${category === "top_rated" ? "active" : ""}`}>
            Top Rated
          </span>
        </button>
        {category === "popular" ? (
          <strong className="tv-heading">Popular TV Shows</strong>
        ) : (
          <strong className="tv-heading">Top Rated TV Shows</strong>
        )}
      </div>

      <div className="tv-grid">
        {storeTV.map((tvShow) => (
          <Cards data={tvShow} IMAGE={IMAGE} key={tvShow.id} type={"tv"} />
        ))}
      </div>
      <Pagination
        handleClick={handleClick}
        current={current}
        totalPages={totalPages}
      />
    </div>
  );
};

export default TV_Shows;
