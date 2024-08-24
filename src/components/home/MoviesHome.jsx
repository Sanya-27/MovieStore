import React, { useEffect, useState } from "react";
import MoviesReact from "../movie/Movies";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MoviesHome.css";

const MoviesHome = () => {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerText = "Movie Store";
  }, []);

  return (
    <div className="movie-home">
      <MoviesReact />
    </div>
  );
};

export default MoviesHome;
