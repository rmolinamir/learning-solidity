// contracts/DeBay.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// NOTE: Could also use preset: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol
// NOTE: ERC721URIStorage not necessary w/o a baseURL.
contract DeBay is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {

  using Counters for Counters.Counter;

  Counters.Counter private _tokenIds;

  constructor() ERC721("DeBay", "DBAY") {}

  function mint(address wallet, string memory newTokenUri)
    public
    returns (uint256)
  {
    _tokenIds.increment();

    uint256 newTokenId = _tokenIds.current();

    _safeMint(wallet, newTokenId);

    _setTokenURI(newTokenId, newTokenUri);

    return newTokenId;
  }

  function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal
    override(ERC721, ERC721Enumerable)
  {
    super._beforeTokenTransfer(from, to, tokenId);
  }

  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (string memory)
  {
    return super.tokenURI(tokenId);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  function safeMint(address to, uint256 tokenId) public onlyOwner {
    _safeMint(to, tokenId);
  }

}
