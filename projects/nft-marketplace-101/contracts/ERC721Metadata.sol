// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import './interfaces/IERC721Metadata.sol';
import './ERC165.sol';

contract ERC721Metadata is ERC165, IERC721Metadata {

  string private _name;

  string private _symbol;

  constructor(string memory n, string memory s) {

    _name = n;
    _symbol = s;

    registerInterface(
      bytes4(
        keccak256('function name()')^
        keccak256('function symbol()')^
        keccak256('function tokenURI(uint256)')
      )
    );

  }

  function name() public view returns(string memory) {
    return _name;
  }

  function symbol() public view returns(string memory) {
    return _symbol;
  }

  function tokenURI(uint256 tokenId) external view returns (string memory) {
    revert('not implemented yet');
  }


}
