import React, { Component } from "react";
import Loader from "react-loader-spinner";

class Loading extends Component {
  render() {
    return (
      <div>
        <Loader type="ThreeDots" color="#ff0000" height="100" width="100" />
      </div>
    );
  }
}

export default Loading;
