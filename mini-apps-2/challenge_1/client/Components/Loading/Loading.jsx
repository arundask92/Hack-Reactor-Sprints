import React, { Component } from "react";
import Loader from "react-loader-spinner";

class Loading extends Component {
  render() {
    return (
      <div>
        <Loader type="Bars" color="#00e600" textShadow="0 0 10px black" height="100" width="100" />
      </div>
    );
  }
}

export default Loading;
