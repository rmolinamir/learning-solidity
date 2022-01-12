// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract ERC721Metadata {

  string private _name;

  string private _symbol;

  constructor(string memory n, string memory s) {
    _name = n;
    _symbol = s;
  }

  function name() public view returns(string memory) {
    return _name;
  }

  function symbol() public view returns(string memory) {
    return _symbol;
  }

}
