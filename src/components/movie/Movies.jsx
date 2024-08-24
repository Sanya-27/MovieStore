import React, { useEffect, useState } from "react";
import "./Movies.css";
import Loading from "../loading/Loading";
import Cards from "../cards/Cards";
import Pagination from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../../utils/getMovies";
import { useNavigate, useSearchParams } from "react-router-dom";
const IMAGE = process.env.REACT_APP_IMAGE;

const Movies = () => {
  const [totalPages, setTotalPages] = useState(500);
  const [randomMovie, setRandomMovie] = useState(null);
  const [category, setCategory] = useState("popular");

  const [params] = useSearchParams();
  const [current, setcurrent] = useState(Number(params.get("page")) || 1);

  const navigate = useNavigate();
  const path = window.location.pathname;
  console.log(path);
  const disp = useDispatch();
  const movieDisp = getMovies(disp);
  const storeMovie = useSelector((state) => state.movies.movies_data);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * storeMovie.length);
    setRandomMovie(storeMovie[randomIndex]);
  });

  useEffect(() => {
    movieDisp(current, category);
    navigate(`${path}?page=${current}`);
  }, [current, category]);

  const handleClick = (pageNumber) => {
    setcurrent(pageNumber);
  };

  if (!storeMovie.length) {
    return <Loading />;
  }

  return (
    <div className="movies-container">
      {randomMovie && (
        <div className="backdrop-container">
          <img
            src={`${IMAGE}/original${randomMovie.backdrop_path}`}
            className="backdrop-image"
          />
          <div className="backdrop-info">
            <h1>{randomMovie.title}</h1>
            <p>
              {randomMovie.overview.split(" ").length > 60
                ? randomMovie.overview.split(" ").slice(0, 60).join(" ") + "..."
                : randomMovie.overview}
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
          <strong className="movie-heading">Popular Movies</strong>
        ) : (
          <strong className="movie-heading">Top Rated Movies</strong>
        )}
      </div>

      <div className="movies-grid">
        {storeMovie.map((movie) => (
          <Cards data={movie} IMAGE={IMAGE} key={movie.id} type={"movie"} />
        ))}
      </div>

      <Pagination
        handleClick={handleClick}
        current={current}
        totalPages={totalPages}
        // setcurrent={setcurrent}
      />
    </div>
  );
};

export default Movies;
