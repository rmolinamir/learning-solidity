// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import './ERC721.sol';

/**
  @title ERC-721 Non-Fungible Token Standard, optional enumeration extension
  @dev See https://eips.ethereum.org/EIPS/eip-721
  Note: the ERC-165 identifier for this interface is 0x780e9d63.
 */
contract ERC721Enumerable is ERC721 {

  uint256[] private tokenList;

  /**
    Mapping from tokenId to index in tokenList.
    NOTE: Not being used.
   */
  mapping(uint256 => uint256) private tokenId_To_TokenListIndex;

  /**
    Mapping of owner to list of all owner's token IDs.
   */
  mapping(address => uint256[]) private owner_To_OwnerTokenIdList;


  /**
    Mapping from token ID to index of the owner tokens list.
    NOTE: Not being used.
   */
  mapping(uint256 => uint256) private tokenId_To_OwnerTokenListIndex;


  /**
    @notice Count NFTs tracked by this contract
    @return A count of valid NFTs tracked by this contract, where each one of
    them has an assigned and queryable owner not equal to the zero address
    */
  function totalSupply() public view returns (uint256) {
    return tokenList.length;
  }

  /**
    @notice Enumerate valid NFTs
    @dev Throws if `_index` >= `totalSupply()`.
    @param _index A counter less than `totalSupply()`
    @return The token identifier for the `_index`th NFT,
    (sort order not specified)
    */
  function tokenByIndex(uint256 _index) external view returns (uint256) {

    require(_index < totalSupply(), "Index can't be GTE the total supply.");

    return tokenList[_index];

  }

  /**
    @notice Enumerate NFTs assigned to an owner
    @dev Throws if `_index` >= `balanceOf(_owner)` or if
    `_owner` is the zero address, representing invalid NFTs.
    @param _owner An address where we are interested in NFTs owned by them
    @param _index A counter less than `balanceOf(_owner)`
    @return The token identifier for the `_index`th NFT assigned to `_owner`,
    (sort order not specified)
    */
  function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256) {

    require(_index < balanceOf(_owner), "Index can't be GTE the balance of the owner's amount of NFTs.");

    return owner_To_OwnerTokenIdList[_owner][_index];

  }

  /**
    Creation of NFTs (“minting”) and enumeration.
   */
  function _mint(address to, uint256 tokenId) internal override(ERC721) addressIsNotNull(to) {

    super._mint(to, tokenId);

    enumerate(tokenId);

  }

  /**
    Enumerates the token by:
      1. Adding the tokenId to the tokenList.
      2. Mapping the tokenId to its index in tokenList.
      3. Adding the tokenId to the ownerTokenIdList.
      4. Mapping the tokenId to its index in ownerTokenIdList.
   */
  function enumerate(uint256 tokenId) private {

    tokenList.push(tokenId);

    tokenId_To_TokenListIndex[tokenId] = tokenList.length -1;

    owner_To_OwnerTokenIdList[msg.sender].push(tokenId);

    tokenId_To_OwnerTokenListIndex[tokenId] = owner_To_OwnerTokenIdList[msg.sender].length - 1;

  }

}
