// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract ERC721 {

  mapping(uint256 => address) private _tokenOwner;
  mapping(address => uint256) private _ownedTokensAmount;

  /**

    Creation of NFTs (“minting”) is a process characterized by:

      a. NFTs mapped to a wallet address
      b. Keeps track of the token IDs
      c. Keeps track of token owner addresses mapped to token IDs
      d. Keeps track of how many tokens an owner address has
      e. Emit event for telemetry of contract address, minting address, & token ID

   */
  function mint() {

  }

}
