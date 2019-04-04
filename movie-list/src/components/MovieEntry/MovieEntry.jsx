import React from "react";
import "./MovieEntry.css";

const MovieEntry = props => (
  <tr>
    <td>{props.filteredMovies.title}</td>
  </tr>
);

export default MovieEntry;
