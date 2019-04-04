import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="search">
        <div className="input-group mb-3">
          {/* <label htmlFor="search">Add more repos!</label> */}
          <input
            id="search"
            className="form-control"
            value={this.state.terms}
            onChange={this.onChange.bind(this)}
            placeholder="Enter a github username"
          />
          <div className="input-group-append">
            <button
              onClick={this.search.bind(this)}
              className="btn btn-outline-secondary"
            >
              Add Repos
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
