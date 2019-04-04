import React, { Component } from "react";
import Cell from "../Cell/Cell.jsx";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange(e) {
    [e.target.key] = e.target.value;
    console.log(([e.target.key] = e.target.value));
  }
  render() {
    return (
      <div>
        <tr class="row">
          {this.props.cell.map((c, idx) => (
            <Cell key={idx} />
          ))}
        </tr>
        {/* <tr class="row">
          <td id="r5c0" />
          <td id="r5c1" />
          <td id="r5c2" />
          <td id="r5c3" />
          <td id="r5c4" />
          <td id="r5c5" />
          <td id="r5c6" />
        </tr>
        <tr class="row">
          <td id="r4c0" />
          <td id="r4c1" />
          <td id="r4c2" />
          <td id="r4c3" />
          <td id="r4c4" />
          <td id="r4c5" />
          <td id="r4c6" />
        </tr>
        <tr class="row">
          <td id="r3c0" />
          <td id="r3c1" />
          <td id="r3c2" />
          <td id="r3c3" />
          <td id="r3c4" />
          <td id="r3c5" />
          <td id="r3c6" />
        </tr>
        <tr class="row">
          <td id="r2c0" />
          <td id="r2c1" />
          <td id="r2c2" />
          <td id="r2c3" />
          <td id="r2c4" />
          <td id="r2c5" />
          <td id="r2c6" />
        </tr>
        <tr class="row">
          <td id="r1c0" />
          <td id="r1c1" />
          <td id="r1c2" />
          <td id="r1c3" />
          <td id="r1c4" />
          <td id="r1c5" />
          <td id="r1c6" />
        </tr>
        <tr class="row">
          <td id="r0c0" />
          <td id="r0c1" />
          <td id="r0c2" />
          <td id="r0c3" />
          <td id="r0c4" />
          <td id="r0c5" />
          <td id="r0c6" />
        </tr> */}
      </div>
    );
  }
}

export default Row;
