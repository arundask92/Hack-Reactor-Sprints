import React, { Component } from "react";
import RegisterForm from "./RegisterForm/RegisterForm.jsx";
import CurrentAttendeeList from "./CurrentAttendeeList/CurrentAttendeeList.jsx";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      attendees: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("/attendees")
      .then(response => {
        this.setState({
          attendees: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmit(data) {
    const { firstName, lastName, email, shirt, skillLevel } = data;
    axios
      .post("/attendees", {
        firstName,
        lastName,
        email,
        shirt,
        skillLevel
      })
      .then(response => {
        return response.data;
      })
      .then(newAtt => {
        this.setState({
          attendees: [...this.state.attendees, newAtt]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="main">
        <RegisterForm handleSubmit={this.handleSubmit} />
        <CurrentAttendeeList
          attendees={this.state.attendees}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
