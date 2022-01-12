// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import './ERC721Connector.sol';

contract NftMarketplaceContract is ERC721Connector {

  constructor(string memory n, string memory s)
    ERC721Connector (n, s) {}

}
