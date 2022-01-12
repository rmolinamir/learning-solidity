// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import './ERC721Metadata.sol';

contract ERC721Connector is ERC721Metadata {

  constructor(string memory n, string memory s)
    ERC721Metadata(n, s) {}

}
