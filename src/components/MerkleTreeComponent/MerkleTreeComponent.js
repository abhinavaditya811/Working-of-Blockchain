import React, { Component } from "react";
import MerkleTree from "./MerkleTree/MerkleTree";

export default class MerkleTreeComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>MERKLE TREE</h1>
        <p>
          In cryptography and computer science, a hash tree or Merkle tree is a
          tree in which every leaf node is labelled with the hash of a data
          block, and every non-leaf node is labelled with the cryptographic hash
          of the labels of its child nodes. Hash trees allow efficient and
          secure verification of the contents of large data structures. Hash
          trees are a generalization of hash lists and hash chains.
        </p>
        <MerkleTree />
      </div>
    );
  }
}
