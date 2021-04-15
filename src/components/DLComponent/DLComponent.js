import React, { Component } from "react";
import DifficultyLevel from "./DifficultyLevel/DifficultyLevel";

export default class DLComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>DIFFICULTY LEVEL</h1>
        <p>
          A relative measure of how difficult it is to find a new block. The
          difficulty is adjusted periodically as a function of how much hashing
          power has been deployed by the network of miners.
        </p>
        <DifficultyLevel />
      </div>
    );
  }
}
