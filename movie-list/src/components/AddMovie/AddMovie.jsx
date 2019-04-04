import React from "react";
import "./AddMovie.css";

const AddMovie = props => (
  <div className="input-group add">
    <input
      type="text"
      className="form-control"
      onChange={props.handleInputChange}
    />
    <button className="btn btn-success" onClick={props.handleAddMovie}>
      Add
    </button>
  </div>
);

export default AddMovie;
