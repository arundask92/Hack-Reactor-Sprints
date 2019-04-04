import React, { Component } from "react";
import Header from "./Header/Header.jsx";
import Loading from "./Loading/Loading.jsx";
import axios from "axios";
import SearchResults from "./SearchResults/SearchResults.jsx";
import Pagination from "./Pagination/Pagination.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      results: [],
      pageCount: 1,
      term: "",
      selectedPage: 1
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleSearch(searchTerm) {
    const { selectedPage } = this.state;
    axios
      .get(`/events?q=${searchTerm}&_page=${selectedPage}`)
      .then(res =>
        this.setState({
          results: res.data,
          loading: false,
          term: searchTerm,
          pageCount: Math.ceil(res.headers["x-total-count"] / 10)
        })
      )
      .catch(err => console.log(err));
  }

  handlePageChange(data) {
    let selected = data.selected + 1;
    this.setState({ selectedPage: selected }, () => {
      this.handleSearch(this.state.term, this.state.selectedPage);
    });
  }

  render() {
    const loadingStyles = {
      margin: "25% auto",
      textAlign: "center"
    };
    const { results, pageCount } = this.state;
    console.log(results);
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        {this.state.loading ? (
          <div style={loadingStyles}>
            <Loading />
          </div>
        ) : (
          <div>
            <div>
              {results.map(re => {
                return <SearchResults data={re} />;
              })}
            </div>
            <div>
              <Pagination
                pageCount={pageCount}
                handlePageChange={this.handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
