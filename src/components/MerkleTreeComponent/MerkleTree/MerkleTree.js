import React from "react";
import { sha256 } from "js-sha256";

class MerkleTree extends React.Component {
  state = {
    inputText1: "",
    hashedtext1: "",
    inputText2: "",
    hashedtext2: "",
    inputText3: "",
    hashedtext3: "",
    inputText4: "",
    hashedtext4: "",
    inputText5: "",
    hashedtext5: "",
    inputText6: "",
    hashedtext6: "",
    inputText7: "",
    hashedtext7: "",
    semihash1: "",
    semihash2: "",
    finalhash: ""
  };

  handleChange1 = e => {
    this.setState({ inputText1: e.target.value });
    var hash = sha256.create();
    hash.update(e.target.value);
    var ch = hash.hex();
    this.setState({ hashedtext1: ch });
    if (this.state.inputText2 === "") {
      this.setState({
        inputText5: this.state.hashedtext1 + this.state.hashedtext1
      });
    } else {
      this.setState({
        inputText5: this.state.hashedtext1 + this.state.hashedtext2
      });
    }
    var hash1 = sha256.create();
    hash1.update(this.state.inputText5);
    var ch1 = hash1.hex();
    this.setState({ semihash1: ch1 });
    console.log(this.state.semihash1);
    if (this.state.inputText6 === "") {
      this.setState({
        inputText7: this.state.semihash1 + this.state.semihash1
      });
    } else {
      this.setState({
        inputText7: this.state.semihash1 + this.state.semihash2
      });
    }
    var hash3 = sha256.create();
    hash3.update(this.state.inputText7);
    var ch3 = hash3.hex();
    this.setState({ finalhash: ch3 });
  };

  handleChange2 = e => {
    this.setState({ inputText2: e.target.value });
    var hash = sha256.create();
    hash.update(e.target.value);
    var ch = hash.hex();
    this.setState({ hashedtext2: ch });
    if (this.state.inputText2 === "") {
      this.setState({
        inputText5: this.state.hashedtext1 + this.state.hashedtext1
      });
    } else {
      this.setState({
        inputText5: this.state.hashedtext1 + this.state.hashedtext2
      });
    }
    var hash1 = sha256.create();
    hash1.update(this.state.inputText5);
    var ch1 = hash1.hex();
    this.setState({ semihash1: ch1 });
    if (this.state.inputText6 === "") {
      this.setState({
        inputText7: this.state.semihash1 + this.state.semihash1
      });
    } else {
      this.setState({
        inputText7: this.state.semihash1 + this.state.semihash2
      });
    }
    var hash3 = sha256.create();
    hash3.update(this.state.inputText7);
    var ch3 = hash3.hex();
    this.setState({ finalhash: ch3 });
  };

  handleChange3 = e => {
    this.setState({ inputText3: e.target.value });
    var hash = sha256.create();
    hash.update(e.target.value);
    var ch = hash.hex();
    this.setState({ hashedtext3: ch });
    if (this.state.inputText4 === "") {
      this.setState({
        inputText6: this.state.hashedtext3 + this.state.hashedtext3
      });
    } else {
      this.setState({
        inputText6: this.state.hashedtext3 + this.state.hashedtext4
      });
    }
    var hash2 = sha256.create();
    hash2.update(this.state.inputText6);
    var ch2 = hash2.hex();
    this.setState({ semihash2: ch2 });
    if (this.state.inputText6 === "") {
      this.setState({
        inputText7: this.state.semihash1 + this.state.semihash1
      });
    } else {
      this.setState({
        inputText7: this.state.semihash1 + this.state.semihash2
      });
    }
    var hash3 = sha256.create();
    hash3.update(this.state.inputText7);
    var ch3 = hash3.hex();
    this.setState({ finalhash: ch3 });
  };

  handleChange4 = e => {
    this.setState({ inputText4: e.target.value });
    var hash = sha256.create();
    hash.update(e.target.value);
    var ch = hash.hex();
    this.setState({ hashedtext4: ch });
    if (this.state.inputText4 === "") {
      this.setState({
        inputText6: this.state.hashedtext3 + this.state.hashedtext3
      });
    } else {
      this.setState({
        inputText6: this.state.hashedtext3 + this.state.hashedtext4
      });
      var hash2 = sha256.create();
      hash2.update(this.state.inputText6);
      var ch2 = hash2.hex();
      this.setState({ semihash2: ch2 });
      if (this.state.inputText6 === "") {
        this.setState({
          inputText7: this.state.semihash1 + this.state.semihash1
        });
      } else {
        this.setState({
          inputText7: this.state.semihash1 + this.state.semihash2
        });
      }
      var hash3 = sha256.create();
      hash3.update(this.state.inputText7);
      var ch3 = hash3.hex();
      this.setState({ finalhash: ch3 });
    }
  };

  render() {
    return (
      <div>
        <textarea
          style={{ width: "70rem", marginTop: "5%" }}
          type="text"
          value={this.state.finalhash}
          id="crypto-js"
        />
        <textarea
          style={{ width: "35rem", marginTop: "5%" }}
          type="text"
          value={this.state.semihash1}
          id="crypto-js"
        />
        <textarea
          style={{ width: "35rem", marginTop: "5%" }}
          type="text"
          value={this.state.semihash2}
          id="crypto-js"
        />
        <textarea
          onChange={this.handleChange1}
          style={{ width: "17.5rem", marginTop: "5%" }}
          type="text"
          value={this.state.inputText1}
          id="crypto-js"
        />
        <textarea
          onChange={this.handleChange2}
          style={{ width: "17.5rem", marginTop: "5%" }}
          type="text"
          value={this.state.inputText2}
          id="crypto-js"
        />
        <textarea
          onChange={this.handleChange3}
          style={{ width: "17.5rem", marginTop: "5%" }}
          type="text"
          value={this.state.inputText3}
          id="crypto-js"
        />
        <textarea
          onChange={this.handleChange4}
          style={{ width: "17.5rem", marginTop: "5%" }}
          type="text"
          value={this.state.inputText4}
          id="crypto-js"
        />
      </div>
    );
  }
}

export default MerkleTree;
