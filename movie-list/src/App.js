import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies/Movies";
import Search from "./components/Search/Search";
import AddMovie from "./components/AddMovie/AddMovie";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: "Mean Girls" },
        { title: "Hackers" },
        { title: "The Grey" },
        { title: "Sunshine" },
        { title: "Ex Machina" }
      ],
      filteredMovies: []
    };
  }

  handleSearch = inputValue => {
    var output = this.state.filteredMovies.filter(m =>
      m.title.toLowerCase().includes(inputValue)
    );
    if (output.length === 0) {
      alert("Movie not found");
      this.setState({
        filteredMovies: this.state.movies
      });
    } else {
      this.setState({
        filteredMovies: output
      });
    }
  };

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleAddMovie() {
    var newItem = {
      title: this.state.inputValue
    };
    this.setState({
      filteredMovies: this.state.filteredMovies.concat(newItem)
    });
  }

  componentWillMount() {
    this.setState({ filteredMovies: this.state.movies });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MovieList</h1>
        </header>
        <div className="container">
          <AddMovie
            handleInputChange={this.handleInputChange.bind(this)}
            handleAddMovie={this.handleAddMovie.bind(this)}
          />
          <Search
            // handleFilter={this.handleFilter}
            handleSearch={this.handleSearch.bind(this)}
          />
          <Movies filteredMovies={this.state.filteredMovies} />
        </div>
      </div>
    );
  }
}

export default App;
