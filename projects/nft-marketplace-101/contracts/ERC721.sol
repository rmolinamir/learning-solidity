// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import './interfaces/IERC721.sol';
import './ERC165.sol';

/**

  [EIP-721: Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721)

 */
contract ERC721 is ERC165, IERC721 {

  // NOTE: Inherited from IERC721.
  // TODO: Add indexed modifier definition from docs, it allows to index the event properties
  // to query them later
  // event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);

  // NOTE: Inherited from IERC721.
  // event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);

  // NOTE: Inherited from IERC721.
  // event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

  /**
    Allows us to check how many tokens are owned by an address.
   */
  mapping(address => uint256) private _ownedTokensAmount;

  /**
    Allows us to check the owner's address of a token.
   */
  mapping(uint256 => address) private _tokenOwner;

  /**
    Mapping of token ID to approved addresses.
   */
  mapping(uint256 => address) private _tokenApprovals;

  constructor() {

    registerInterface(
      bytes4(
        keccak256('function balanceOf(address)')^
        keccak256('function ownerOf(uint256)')^
        keccak256('function safeTransferFrom(address, address, uint256)')^
        keccak256('function safeTransferFrom(address, address, uint256, bytes calldata)')^
        keccak256('function transferFrom(address, address, uint256)')^
        keccak256('function approve(address, uint256)')^
        keccak256('function getApproved(uint256)')^
        keccak256('function setApprovalForAll(address, bool)')^
        keccak256('function isApprovedForAll(address, address)')
      )
    );

  }

  function balanceOf(address _owner) public view override
    addressIsNotNull(_owner)
  returns(uint256) {

    return _ownedTokensAmount[_owner];

  }

  function ownerOf(uint256 _tokenId) public view override returns(address) {

    address owner = _tokenOwner[_tokenId];

    require(isAddressValid(owner), "ERC721: NFTs assigned to zero address are considered invalid.");

    return owner;

  }

  function safeTransferFrom(address from, address to, uint256 tokenId) external override {
    revert('not implemented yet');
  }

  function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external override {
    revert('not implemented yet');
  }

  function transferFrom(address _from, address _to, uint256 _tokenId) external override {

    _transferFrom(_from, _to, _tokenId);

  }

  function _transferFrom(address _from, address _to, uint256 _tokenId) internal
    onlyApprovedOrOwnerOf(_tokenId)
    addressIsNotNull(_to)
  {

    require(ownerOf(_tokenId) == _from, "Sender address does not own the token.");

    _tokenOwner[_tokenId] = _to;
    _ownedTokensAmount[_from] -= 1;
    _ownedTokensAmount[_to] += 1;

    emit Transfer(_from, _to, _tokenId);

  }

  function approve(address wallet, uint256 tokenId) public override
    onlyApprovedOrOwnerOf(tokenId)
  {

    address owner = ownerOf(tokenId);

    require(wallet != owner, "ERC721: Can't approve owner of the token.");

    _tokenApprovals[tokenId] = wallet;

    emit Approval(owner, wallet, tokenId);

  }

  function getApproved(uint256 tokenId) public view override returns (address) {

    require(_exists(tokenId), "ERC721: Approved query for nonexistent token");

    return _tokenApprovals[tokenId];

  }

  function setApprovalForAll(address operator, bool _approved) external override {
    revert('not implemented yet');
  }

  function isApprovedForAll(address owner, address operator) external view override returns(bool) {
    revert('not implemented yet');
  }

  /**
    ADDITIONAL FUNCTIONALITY
   */

  /**
    Creation of NFTs (“minting”) is a process characterized by:

      a. NFTs mapped to wallet addresses
      b. Keeps track of token ID uniqueness
      c. Keeps track of token owner addresses mapped to token IDs
      d. Keeps track of how many tokens an owner address has
      e. Emit event for telemetry of contract address, minting address, & token ID
   */
  function _mint(address to, uint256 tokenId) internal virtual addressIsNotNull(to) {

    require(_exists(tokenId), "ERC721: Token is already owned.");

    _tokenOwner[tokenId] = to;
    _ownedTokensAmount[to] += 1;

    emit Transfer(address(0), to, tokenId);

  }

  /**
    Checks if a tokenId is mapped to an existing owner.
   */
  function _exists(uint256 tokenId) internal view returns(bool) {

    address owner = _tokenOwner[tokenId];

    return owner == address(0);

  }

  /**
    HELPER METHODS
   */

  function isApprovedOrOwner(address spender, uint256 tokenId) private view returns(bool) {

    require(_exists(tokenId), "ERC721: Token does not exist.");

    return (
      spender == getApproved(tokenId) ||
      spender == ownerOf(tokenId)
    );
  }

  function isAddressValid(address wallet) private pure returns(bool) {
    return wallet != address(0);
  }

  /**
    MODIFIERS/DECORATORS
   */

  modifier addressIsNotNull(address wallet) {
    require(isAddressValid(wallet), "ERC721: Zero address is considered invalid.");
    _;
  }

  modifier onlyApprovedOrOwnerOf(uint256 tokenId) {
    require(isApprovedOrOwner(msg.sender, tokenId), "ERC721: Unauthorized message sender.");
    _;
  }

}
