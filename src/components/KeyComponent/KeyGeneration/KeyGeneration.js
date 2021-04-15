import React from "react";
import { encrypt, decrypt, PrivateKey } from "eciesjs";

class KeyGeneration extends React.Component {
  state = {
    message: "",
    privatekey: "",
    publickey: "",
    cipher: "",
    plainText: "",
    originalText: "",
    check: ""
  };

  generatekey = e => {
    const ch1 = new PrivateKey();
    const ch2 = ch1.publicKey;
    this.setState({ privatekey: ch1 });
    this.setState({ publickey: ch2 });
  };

  encryptmessage = () => {
    let publicKey = this.state.publickey.toHex();
    const ch = Buffer.from(this.state.plainText);
    var encryptedText = encrypt(publicKey, ch);
    this.setState({ message: encryptedText });
    this.setState({ cipher: encryptedText });
  };

  handleInput = e => {
    this.setState({ plainText: e.target.value });
  };

  decryptmessage = () => {
    var decryptedText = decrypt(
      this.state.privatekey.toHex(),
      this.state.message
    ).toString();
    if (this.state.privatekey.toHex() === this.state.check)
      this.setState({ originalText: decryptedText });
    else this.setState({ originalText: "Invalid Key Entered" });
  };

  handleInputprivatekey = e => {
    this.setState({ check: e.target.value });
  };

  render() {
    if (this.state.privatekey === "" && this.state.publickey === "") {
      return (
        <div>
          <button
            className="waves-effect waves-light btn green"
            onClick={this.generatekey}
          >
            Generate
          </button>
          <p>{}</p>
          <p>{}</p>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="waves-effect waves-light btn green"
            onClick={this.generatekey}
          >
            Generate
          </button>
          <p>Private Key :</p>
          <p>{this.state.privatekey.toHex()}</p>
          <p>Public Key :</p>
          <p>{this.state.publickey.toHex()}</p>
          <input value={this.state.plainText} onChange={this.handleInput} />
          <button
            className="waves-effect waves-light btn red"
            onClick={this.encryptmessage}
          >
            Encrypt this message using Public Key
          </button>
          <div>{this.state.cipher}</div>
          <p>Enter the corresponding Private Key</p>
          <input
            value={this.state.check}
            onChange={this.handleInputprivatekey}
          />
          <button
            className="waves-effect waves-light btn green"
            onClick={this.decryptmessage}
          >
            Decrypt this message
          </button>
          <div>{this.state.originalText}</div>
        </div>
      );
    }
  }
}

export default KeyGeneration;
