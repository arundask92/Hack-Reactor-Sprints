class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      expiration: "",
      cvv: "",
      cardZip: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleClick() {
    var data = this.state;
    this.props.handleStepThree(data);
  }

  render() {
    const { cardNumber, expiration, cvv, cardZip } = this.state;
    return (
      <div>
        <h1>Payment</h1>
        <div className="fields">
          <div className="form">
            <div className="form-group">
              <label htmlFor="card">Card Number</label>
              <input
                id="cardNumber"
                className="form-control"
                placeholder="Enter card number"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiration">Expiration Date</label>
              <input
                id="expiration"
                className="form-control"
                type="date"
                placeholder="Enter expiration date"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="number"
                className="form-control"
                placeholder="Enter cvv"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardZip">Zip Code</label>
              <input
                type="number"
                id="cardZip"
                className="form-control"
                placeholder="Enter zip code"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={this.handleClick.bind(this)}
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

window.FormThree = FormThree;
