import React, { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";

export default class HashComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>HASH</h1>
        <p>
          A hash is a function that converts an input of letters and numbers
          into an encrypted output of a fixed length.
        </p>
        <p>
          A hash is created using an algorithm, and is essential to blockchain
          management in cryptocurrency.
        </p>
        <Dropdown />
      </div>
    );
  }
}
