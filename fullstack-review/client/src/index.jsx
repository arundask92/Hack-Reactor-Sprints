import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  search(term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      url: "/repos",
      method: "POST",
      dataType: "application/json",
      data: { username: term },
      success: data => {
        console.log("works!!!");
      },
      error: () => {
        console.log("Nope");
      }
    });
  }

  componentDidMount() {
    $.ajax({
      url: "/repos",
      method: "GET",
      success: repos => {
        this.setState({ repos });
      }
    });
  }

  render() {
    console.log(this.state.repos);
    return (
      <div>
        <h1>Github Fetcher</h1>
        <h4 className="topRepos">
          Top <span className="count">{this.state.repos.length}</span> Repos
        </h4>
        <hr />
        <Search onSearch={this.search.bind(this)} />
        <hr />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
