// contracts/DeBay.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// NOTE: Could also use preset: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol
contract DeBay is ERC721URIStorage {

  using Counters for Counters.Counter;

  Counters.Counter private _tokenIds;

  constructor() ERC721("DeBay", "DBAY") {}

  function mintItem(address wallet, string memory tokenURI)
    public
    returns (uint256)
  {
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _mint(wallet, newItemId);
    _setTokenURI(newItemId, tokenURI);

    return newItemId;
  }

}
