import React from "react";
import { sha256 } from "js-sha256";

class DifficultyLevel extends React.Component {
  state = {
    inputtext1: "",
    hashedtext1: ""
  };
  render() {
    return (
      <div>
        <textarea
          style={{ width: "70rem", marginTop: "10%" }}
          type="text"
          value={this.state.hashedtext1}
          id="crypto-js"
        />
      </div>
    );
  }
}

export default DifficultyLevel;
