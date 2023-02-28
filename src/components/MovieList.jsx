import React from "react";
import MoviesListItem from "./MovieListItem";

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        return <MoviesListItem key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList;
