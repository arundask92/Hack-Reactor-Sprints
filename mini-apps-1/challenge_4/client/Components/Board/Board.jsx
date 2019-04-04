import React, { Component } from "react";
import Row from "../Row/Row.jsx";

const Board = props => {
  return (
    <div id="wrapper">
      <table>
        {props.board.map((cell, idx) => {
          return <Row cell={cell} key={idx} />;
        })}
      </table>
    </div>
  );
};

export default Board;
