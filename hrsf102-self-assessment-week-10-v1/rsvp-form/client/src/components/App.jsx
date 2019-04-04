import React from "react";
import axios from "axios";
import Form from "./Form.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    axios
      .post("/rsvps", data)
      .then(response => {
        console.log("response");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
