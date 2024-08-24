import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "./DetailsTV.css";
import Navbarr from "../navbar/Navbarr";
import Footer from "../footer/Footer";
import getTvShowDetails from "../../utils/getTvShowDetails";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import { reset } from "../../store/movieDetailsSlice";
import { resetTVShow } from "../../store/tvShowDetailsSlice";

const URL = process.env.REACT_APP_TV_API;
const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE = process.env.REACT_APP_IMAGE;

const DetailsTV = () => {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const disp = useDispatch();
  const tvDetailsDisp = getTvShowDetails(disp);

  const storeTVShowDetail = useSelector(
    (state) => state.tvDetailsReducer.tv_details
  );
  useEffect(() => {
    disp(resetTVShow());
    tvDetailsDisp(id);
    window.scrollTo(0, 0);
  }, []);

  if (!storeTVShowDetail || !storeTVShowDetail.first_air_date) {
    return <Loading />;
  }

  return (
    <div className="details-container" data-testid="TV-Details">
      <div className="backdrop-container">
        <img
          src={
            storeTVShowDetail.backdrop_path
              ? `${IMAGE}/original${storeTVShowDetail.backdrop_path}`
              : `${IMAGE}/original/2HqbXDU5v8U7b7rtNI8A6kcUdF5.jpg`
          }
          alt={storeTVShowDetail.name}
          className="backdrop-image"
        />
        <div className="backdrop-info">
          <h1 data-testid="title">{storeTVShowDetail.name}</h1>
          <p data-testid="overview">{storeTVShowDetail.overview}</p>
        </div>
      </div>

      <div className="tv-show-details">
        <h2>{storeTVShowDetail.name}</h2>
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
          <strong>Tagline:</strong> {storeTVShowDetail.tagline}
        </p>
        <p>
          <strong>First Air Date:</strong> {storeTVShowDetail.first_air_date}
        </p>
        <p>
          <strong>Runtime:</strong>{" "}
          {storeTVShowDetail.episode_run_time &&
            storeTVShowDetail.episode_run_time[0]}{" "}
          minutes
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {storeTVShowDetail.genres &&
            storeTVShowDetail.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Rating:</strong> {storeTVShowDetail.vote_average}
        </p>
        <p>
          <strong>Overview:</strong> {storeTVShowDetail.overview}
        </p>
        <p>
          <strong>Production Companies:</strong>{" "}
          {storeTVShowDetail.production_companies &&
            storeTVShowDetail.production_companies
              .map((company) => company.name)
              .join(", ")}
        </p>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default DetailsTV;
