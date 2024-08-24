import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "./Movie_Details.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import getMovieDetails from "../../utils/getMovieDetails";
import { reset } from "../../store/movieDetailsSlice";
import Loading from "../loading/Loading";
const IMAGE = process.env.REACT_APP_IMAGE;

const Movie_Details = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const disp = useDispatch();
  const movieDetailsDisp = getMovieDetails(disp);

  const storeMovieDetail = useSelector(
    (state) => state.movieDetailsReducer.movie_details
  );

  useEffect(() => {
    disp(reset());
    movieDetailsDisp(id);
    window.scrollTo(0, 0);
  }, []);

  if (!storeMovieDetail || !storeMovieDetail.title) {
    return <Loading />;
  }

  return (
    <div className="details-container" data-testid="details">
      <div className="backdrop-container">
        <img
          src={
            storeMovieDetail.backdrop_path
              ? `${IMAGE}/original${storeMovieDetail.backdrop_path}`
              : `${IMAGE}/original/2HqbXDU5v8U7b7rtNI8A6kcUdF5.jpg`
          }
          alt={storeMovieDetail.title}
          className="backdrop-image"
        />
        <div className="backdrop-info">
          <h1 data-testid="title">{storeMovieDetail.title}</h1>
          <p data-testid="overview">{storeMovieDetail.overview}</p>
        </div>
      </div>

      <div className="movie-details">
        <h2>{storeMovieDetail.title}</h2>
        {trailer && (
          <div className="trailer-container">
            <button
              onClick={() => setModalIsOpen(true)}
              className="play-trailer-button"
            >
              Play Trailer
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              contentLabel="Trailer Modal"
              className="ReactModal__Content"
              overlayClassName="ReactModal__Overlay"
            >
              <button
                onClick={() => setModalIsOpen(false)}
                className="close-modal-button"
              >
                Close
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube trailer"
              ></iframe>
            </Modal>
          </div>
        )}
        <p>
          <strong>Tagline:</strong> {storeMovieDetail.tagline}
        </p>
        <p>
          <strong>Release Date:</strong> {storeMovieDetail.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {storeMovieDetail.runtime} minutes
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {storeMovieDetail.genres &&
            storeMovieDetail.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Rating:</strong> {storeMovieDetail.vote_average}
        </p>
        <p>
          <strong>Overview:</strong> {storeMovieDetail.overview}
        </p>
        <p>
          <strong>Production Companies:</strong>{" "}
          {storeMovieDetail.production_companies &&
            storeMovieDetail.production_companies
              .map((company) => company.name)
              .join(", ")}
        </p>
      </div>
    </div>
  );
};

export default Movie_Details;
