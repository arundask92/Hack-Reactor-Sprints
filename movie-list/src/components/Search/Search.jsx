import React from "react";
import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleFilter(event) {
    var updatedList = event.target.value;
    this.setState({
      search: updatedList
    });
    // var updatedList = event.target.value
    //   ? this.state.filteredMovies.filter(movie =>
    //       movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    //     )
    //   : this.state.movies;
    // this.setState({ filteredMovies: updatedList });
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            // onChange={props.handleFilter}
            onChange={this.handleFilter.bind(this)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.props.handleSearch(this.state.search)}
            >
              Go!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const Search = props => (
//   <div>
//     <form className="input-group">
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Search..."
//         onChange={props.handleFilter}
//         // handleFilter={props.handleFilter}
//       />
//       <div className="input-group-append">
//         <button
//           className="btn btn-outline-secondary"
//           onClick={() => props.handleSearch()}
//         >
//           Go!
//         </button>
//       </div>
//     </form>
//   </div>
// );

export default Search;
