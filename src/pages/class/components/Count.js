import React, { Component } from "react";
import { calcOne } from "../utils/calcOne";

class Count extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div className="calcOne">
        <h1>Step1. calc</h1>
        <button onClick={(e) => count > 0 && calcOne(e, this)}>-</button>
        <span style={{ color: "red" }}>{this.state.count}</span>
        <button onClick={(e) => calcOne(e, this)}>+</button>
      </div>
    );
  }
}

export default Count;
