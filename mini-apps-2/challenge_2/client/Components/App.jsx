import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Loading from "./Loading/Loading.jsx";
import Graph from "./Graph/Graph.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then(res => this.setState({
        info: res.data,
        loading: false
      }))
      .catch(err => console.log(err));
  }

  render() {
    const loadingStyles = {
      margin: "25% auto",
      textAlign: "center"
    };
    return (
      <div>
        {this.state.loading ? <div style={loadingStyles}>
          <Loading />
        </div> : <Graph info={this.state.info} />}

      </div>
    );
  }
}
export default App;
