import React, { Fragment } from "react";
import { encrypt, decrypt, PrivateKey } from "eciesjs";

class DigitalSignature extends React.Component {
  state = {
    data: "",
    firstpublickey: "",
    firstprivatekey: "",
    secondpublickey: "",
    secondprivatekey: "",
    check1: "",
    check2: "",
    originaltext: "",
    inputprivatekey: "",
    privatekey: "",
    message1: "",
    publickey: "",
    message2: "",
    cipher: "",
    ppublickey: "",
    message3: "",
    message4: "",
    pprivatekey: ""
  };

  generatekey1 = e => {
    const ch1 = new PrivateKey();
    const ch2 = ch1.publicKey;
    this.setState({ firstprivatekey: ch1 });
    this.setState({ firstpublickey: ch2 });
  };

  generatekey2 = e => {
    const ch3 = new PrivateKey();
    const ch4 = ch3.publicKey;
    this.setState({ secondprivatekey: ch3 });
    this.setState({ secondpublickey: ch4 });
  };

  handledata = e => {
    this.setState({ data: e.target.value });
  };

  inputprivatekey = e => {
    this.setState({ privatekey: e.target.value });
  };

  checkprivatekey = () => {
    let publicKey = this.state.publickey;
    const ch = Buffer.from(this.state.data);
    var encryptedText = encrypt(publicKey, ch);
    if (this.state.privatekey === this.state.secondprivatekey.toHex()) {
      this.setState({ message2: "Second Encryption Done" });
      this.setState({ cipher: encryptedText });
    } else this.setState({ message2: "Invalid Key Entered" });
  };

  inputpublickey = e => {
    this.setState({ publickey: e.target.value });
  };

  checkpublickey = () => {
    if (this.state.firstpublickey.toHex() === this.state.publickey) {
      this.setState({ message1: "First Encryption Done" });
    } else this.setState({ message1: "Invalid Key Entered" });
  };

  senderpublickey = e => {
    this.setState({ ppublickey: e.target.value });
  };

  recieverprivatekey = e => {
    this.setState({ pprivatekey: e.target.value });
  };

  checksenderpublickey = () => {
    if (this.state.ppublickey === this.state.secondpublickey.toHex())
      this.setState({ message3: "First Decryption Done" });
    else this.setState({ message3: "Invalid Key Entered" });
  };

  checkrecieverprivatekey = () => {
    var decryptedText = decrypt(
      this.state.firstprivatekey.toHex(),
      this.state.cipher
    ).toString();
    if (this.state.pprivatekey === this.state.firstprivatekey.toHex()) {
      this.setState({ originaltext: decryptedText });
    } else this.setState({ originaltext: "Invalid Key Entered" });
  };

  render() {
    console.log(this.state);
    const {
      firstprivatekey,
      firstpublickey,
      secondprivatekey,
      secondpublickey
    } = this.state;
    return (
      <Fragment>
        <div>
          <button
            className="waves-effect waves-light btn green"
            onClick={this.generatekey1}
          >
            Generate first set of keys of reciever
          </button>
          <p>
            Private Key:
            {firstprivatekey === "" ? firstprivatekey : firstprivatekey.toHex()}
          </p>
          <p>
            Public Key:
            {firstpublickey === "" ? firstpublickey : firstpublickey.toHex()}
          </p>
        </div>
        <div>
          <button
            className="waves-effect waves-light btn green"
            onClick={this.generatekey2}
          >
            Generate second pair of keys of sender
          </button>
          <p>
            Private Key:
            {secondprivatekey === ""
              ? secondprivatekey
              : secondprivatekey.toHex()}
          </p>
          <p>
            Public Key:
            {secondpublickey === "" ? secondpublickey : secondpublickey.toHex()}
          </p>
          <p>Enter Data to be encrypted</p>
          <input value={this.state.data} onChange={this.handledata} />
          <p>Enter public key of reciever for the first encryption</p>
          <input value={this.state.publickey} onChange={this.inputpublickey} />
          <button
            className="waves-effect waves-light btn red"
            onClick={this.checkpublickey}
          >
            First Encryption
          </button>
          <p>{this.state.message1}</p>
          <p>Enter private key of sender for the second encryption</p>
          <input
            value={this.state.privatekey}
            onChange={this.inputprivatekey}
          />
          <button
            className="waves-effect waves-light btn red"
            onClick={this.checkprivatekey}
          >
            Second Encryption
          </button>
          <p>{this.state.message2}</p>
          <p>{this.state.cipher}</p>
          <p>Enter public key of sender for the first decryption</p>
          <input
            value={this.state.ppublickey}
            onChange={this.senderpublickey}
          />
          <button
            className="waves-effect waves-light btn blue"
            onClick={this.checksenderpublickey}
          >
            First Decryption
          </button>
          <p>{this.state.message3}</p>
          <p>Enter private key of reciever for the second decryption</p>
          <input
            value={this.state.pprivatekey}
            onChange={this.recieverprivatekey}
          />
          <button
            className="waves-effect waves-light btn blue"
            onClick={this.checkrecieverprivatekey}
          >
            Second Decryption
          </button>
          <p>{this.state.originaltext}</p>
        </div>
      </Fragment>
    );
  }
}

export default DigitalSignature;
