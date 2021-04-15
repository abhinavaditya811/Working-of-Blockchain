import React, { Component } from "react";
import KeyGeneration from "./KeyGeneration/KeyGeneration";

export default class KeyComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>PUBLIC AND PRIVATE KEYS</h1>
        <p>
          The address, which can then be used in transactions, is a shorter,
          representative form of the public key. The private key is what grants
          a cryptocurrency user ownership of the funds on a given address. The
          Blockchain wallet automatically generates and stores private keys for
          you
        </p>
        <KeyGeneration />
      </div>
    );
  }
}
