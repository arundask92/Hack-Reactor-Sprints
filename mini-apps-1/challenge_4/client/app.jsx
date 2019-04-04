import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./Components/Board/Board.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
      player: 1,
      player2: -1
    };
  }

  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <Board board={this.state.board} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
