import React, { Component } from "react";
import DigitalSignature from "./DigitalSignature/DigitalSignature";

export default class DSComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>DIGITAL SIGNATURE</h1>
        <p>
          Digital signatures in a blockchain solves three purposes –
          authentication, non-repudiation, and data integrity. Authentication -
          make sure the message was created by a known sender. Non-repudiation –
          the sender cannot deny sending the message. Data integrity – the
          message wasn’t altered in transit.
        </p>
        <DigitalSignature />
      </div>
    );
  }
}
