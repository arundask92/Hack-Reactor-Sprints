import React, { Component } from "react";
import axios from "axios";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      shirt: "",
      skillLevel: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    const { firstName, lastName, email, shirt, skillLevel } = this.state;
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
        className="attendee-form"
        onChange={this.handleOnChange}
      >
        <h2>Register Attendee</h2>
        <label htmlFor="fname">First Name:</label>
        <input name="fname" id="firstName" />
        <label htmlFor="lname">Last Name:</label>
        <input name="lname" id="lastName" />
        <label htmlFor="email">Email Address:</label>
        <input name="email" id="email" />
        <label htmlFor="shirt">Shirt Size:</label>
        <input name="shirt" id="shirt" />
        <label htmlFor="level">Experiance Level:</label>
        <input name="level" id="skillLevel" />
        <button type="submit">REGISTER</button>
      </form>
    );
  }
}

export default RegisterForm;
