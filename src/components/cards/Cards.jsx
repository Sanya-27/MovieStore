import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

const Cards = ({ data, IMAGE, type }) => {
  return (
    <>
      <Link
        to={type === "movie" ? `/details/${data.id}` : `/detailsTV/${data.id}`}
        className="detail-link-disable"
        key={data.id}
      >
        <div key={data.id} className="movie-card">
          <Stack direction="horizontal" gap={2}>
            <Badge
              pill
              bg={`${
                Math.round(data.vote_average) > 8
                  ? "success"
                  : data.vote_average > 7
                  ? "primary"
                  : "warning"
              }`}
              className="batch"
            >
              Rating: {Math.round(data.vote_average * 10) / 10}
            </Badge>
          </Stack>
          <img
            src={
              data.poster_path
                ? `${IMAGE}/w200${data.poster_path}`
                : `${IMAGE}/w200/a8LZTIQfGc75djZU4o3FsnstpwP.jpg`
            }
            className="movie-poster"
          />

          <h2 className="title">
            {data.title && data.title.length > 12
              ? data.title.slice(0, 12) + "..."
              : data.title}
          </h2>
          <p className="date">Release Date: {data.release_date}</p>

          <p>
            {data.overview.length > 0 ? (
              data.overview.slice(0, 100) + "..."
            ) : (
              <strong style={{ color: "red" }}>
                "Sorry!! No description to show"
              </strong>
            )}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Cards;
