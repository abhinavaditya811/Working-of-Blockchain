import React from "react";
import sha256 from "js-sha256";
import MatDropdown from "./MatDropdown";

class Dropdown extends React.Component {
  state = {
    displayMenu: false,
    typeofhash: "Types of Hashes",
    hashtext: "",
    hashedtext: "",
    inputText: ""
  };

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  };

  changeHashType = typeofhash => {
    this.setState({ typeofhash });
  };

  handleChange = e => {
    this.setState({ inputText: e.target.value });
    if (this.state.typeofhash === "SHA256") {
      var hash = sha256.create();
      hash.update(e.target.value);
      var ch = hash.hex();
      this.setState({ hashedtext: ch });
    } else if (this.state.typeofhash === "MD5") {
      //var md5 = md5.create();
      //md5.update(e.target.value);
      //ch = md5.hex();
      //this.setState({ hashedtext: ch });
    }
  };

  render() {
    return (
      <div>
        <MatDropdown
          changeHashType={this.changeHashType}
          defaultText={this.state.typeofhash}
        ></MatDropdown>
        <div>
          <textarea
            onChange={this.handleChange}
            style={{ width: "20rem", marginTop: "5%" }}
            type="text"
            value={this.state.inputText}
            id="crypto-js"
          />
        </div>
        <div
          style={{
            width: "300px",
            display: "flex",
            flexWrap: "wrap",
            overflow: "auto"
          }}
        >
          <p>{this.state.hashedtext}</p>
        </div>
      </div>
    );
  }
}

export default Dropdown;
