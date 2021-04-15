import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HashComponent from "./components/HashComponent/HashComponent";
import KeyComponent from "./components/KeyComponent/KeyComponent";
import DSComponent from "./components/DSComponent/DSComponent";
import MerkleTreeComponent from "./components/MerkleTreeComponent/MerkleTreeComponent";
import DLComponent from "./components/DLComponent/DLComponent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {
            //Navbar - options - Hash, Pukey PrKey
          }
          <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                Blockchain Playground
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/hash">Hashing</Link>
                </li>
                <li>
                  <Link to="/keys">Keys</Link>
                </li>
                <li>
                  <Link to="/signature">Digital Signature</Link>
                </li>
                <li>
                  <Link to="/merkletree">Merkle Tree</Link>
                </li>
                <li>
                  <Link to="/difficultylevel">Difficulty Level</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route
              path="/"
              exact
              component={() => {
                return (
                  <div className="container">
                    A blockchain, originally block chain, is a growing list of
                    records, called blocks, that are linked using cryptography.
                    Each block contains a cryptographic hash of the previous
                    block, a timestamp, and transaction data. By design, a
                    blockchain is resistant to modification of the data.
                  </div>
                );
              }}
            />
            <Route path="/hash/" component={HashComponent} />
            <Route path="/keys/" component={KeyComponent} />
            <Route path="/signature/" component={DSComponent} />
            <Route path="/merkletree/" component={MerkleTreeComponent} />
            <Route path="/difficultylevel/" component={DLComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
