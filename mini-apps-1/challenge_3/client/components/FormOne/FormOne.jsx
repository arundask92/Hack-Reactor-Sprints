class FormOne extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleClick() {
    var data = this.state;
    this.props.handleStepOne(data);
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>User Information</h1>
        <div className="fields">
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleChange.bind(this)}
                id="name"
                className="form-control"
                placeholder="Enter full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                onChange={this.handleChange.bind(this)}
                id="email"
                className="form-control"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleChange.bind(this)}
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
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
window.FormOne = FormOne;
