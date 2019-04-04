class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checkout: true,
      formOne: false,
      formTwo: false,
      formThree: false,
      complete: false,
      allData: {},
      user: {}
    };
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleStepOne = this.handleStepOne.bind(this);
    this.handleStepTwo = this.handleStepTwo.bind(this);
    this.handleStepThree = this.handleStepThree.bind(this);
    this.handlePost = this.handlePost.bind(this);
    // this.handleComplete = this.handleComplete.bind(this);
  }

  handleCheckOut() {
    this.setState({
      checkout: false,
      formOne: true
    });
  }

  handleStepOne(data) {
    // console.log(this.state.allData);
    var obj = Object.assign({}, this.state.allData, data);
    this.setState({
      allData: obj,
      formOne: false,
      formTwo: true
    });
  }

  handleStepTwo(data) {
    var obj = Object.assign({}, this.state.allData, data);
    this.setState({
      allData: obj,
      formTwo: false,
      formThree: true
    });
  }

  handlePost(data) {
    axios
      .post("/user", data)
      .then(res => res.data)
      .then(data => {
        console.log(data);
        this.setState({
          // allData: obj,
          // formThree: false,
          // complete: true,
          user: data
        });
      });
  }

  handleStepThree(data) {
    var obj = Object.assign({}, this.state.allData, data);
    this.handlePost(obj);
    this.setState({
      allData: obj,
      formThree: false,
      complete: true
      // user: data
    });
  }

  render() {
    console.log(this.state.user);
    const checkOut = (
      <div>
        <h1>Check Out</h1>
        <div className="fields">
          <div className="form">
            <button
              className="btn btn-dark btn-block"
              onClick={this.handleCheckOut}
            >
              Start Check Out
            </button>
          </div>
        </div>
      </div>
    );
    const formOne = <FormOne handleStepOne={this.handleStepOne} />;
    const formTwo = <FormTwo handleStepTwo={this.handleStepTwo} />;
    const formThree = <FormThree handleStepThree={this.handleStepThree} />;
    return (
      <div>
        {/* <h1 className="mainHead">Check Out</h1> */}
        <div className="wrapper">
          {this.state.checkout ? checkOut : null}
          {this.state.formOne ? formOne : null}
          {this.state.formTwo ? formTwo : null}
          {this.state.formThree ? formThree : null}
          {this.state.complete ? <Done user={this.state.user} /> : null}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
