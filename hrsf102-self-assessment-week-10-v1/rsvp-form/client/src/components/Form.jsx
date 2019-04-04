import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      guests: 0
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.canBeSubmitted = this.canBeSubmitted.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  canBeSubmitted() {
    const { firstName, lastName, email, guests } = this.state;
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      guests.length > 0
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.canBeSubmitted()) {
      return;
    }
    this.props.handleSubmit(this.state);
  }

  render() {
    const { firstName, lastName, email, guests, valid } = this.state;
    const isEnabled = this.canBeSubmitted();
    return (
      <div>
        <form
          onSubmit={e => this.handleSubmit(e)}
          onChange={this.handleOnChange}
        >
          <label htmlFor="fname">First Name:</label>
          <input name="fname" type="text" id="firstName" />
          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lastName" />
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="guests">Number of Guest:</label>
          <input type="number" name="guests" id="guests" min="0" />
          <button
            className={!isEnabled ? "disabled" : ""}
            type="submit"
            disabled={!isEnabled}
          >
            REGISTER
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
