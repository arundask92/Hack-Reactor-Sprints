import React from "react";
import MovieEntry from "./../MovieEntry/MovieEntry";
import "./Movies.css";
const Movies = props => (
  <div className="list">
    <table className="table">
      <tbody>
        {props.filteredMovies.map((m, index) => {
          return <MovieEntry filteredMovies={m} key={index} />;
        })}
      </tbody>
    </table>
  </div>
);

export default Movies;
