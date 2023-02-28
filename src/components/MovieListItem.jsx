import React from "react";

const noImageFound = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";
const MoviesListItem = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? noImageFound : movie.Poster;
  return (
    <div>
      <h2 className="movieTitle">{movie.Title}</h2>
      <img
        className="movieImg"
        src={poster}
        alt={`Movies title is: ${movie.Title}`}
      />
    </div>
  );
};

export default MoviesListItem;
