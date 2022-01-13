// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import './ERC721Connector.sol';

contract NftMarketplaceContract is ERC721Connector {

  /**
    Hash table to keep track of which NFTs were already minted.
   */
  mapping(string => bool) private nftHashTable;

  /**
    Array to store image assets URIs.
   */
  string[] public nftList;

  constructor(string memory n, string memory s)
    ERC721Connector (n, s) {}

  function mint(string memory nft) public {

    require(!nftHashTable[nft], 'NftMarketplaceContract: NFT already minted.');

    nftList.push(nft);

    uint256 nftIndex = nftList.length - 1; // Using the index of the NFT as an ID

    _mint(msg.sender, nftIndex);

    nftHashTable[nft] = true;

  }

}
