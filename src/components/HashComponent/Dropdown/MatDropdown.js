import React, { Component } from "react";

export default class MatDropdown extends Component {
  render() {
    return (
      <div>
        <span className="dropdown-trigger btn" data-target="dropdown1">
          {this.props.defaultText}
        </span>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <span
              onClick={() => {
                this.props.changeHashType("SHA256");
              }}
            >
              SHA256
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                this.props.changeHashType("MD5");
              }}
            >
              MD5
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
