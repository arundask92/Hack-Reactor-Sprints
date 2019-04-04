class FormTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      phone: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleClick() {
    var data = this.state;
    // console.log(data);
    this.props.handleStepTwo(data);
  }

  render() {
    const { street, city, state, zipCode } = this.state;
    return (
      <div>
        <h1>Address</h1>
        <div className="fields">
          <div className="form">
            <div className="form-group">
              <label htmlFor="street">Street Address</label>
              <input
                id="street"
                className="form-control"
                placeholder="Enter street adress"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                className="form-control"
                type="text"
                placeholder="Enter city"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                id="state"
                className="form-control"
                placeholder="Enter state"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="number"
                id="zipCode"
                className="form-control"
                placeholder="Enter zip code"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                id="phone"
                className="form-control"
                placeholder="Enter phone number"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={this.handleClick.bind(this)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

window.FormTwo = FormTwo;
