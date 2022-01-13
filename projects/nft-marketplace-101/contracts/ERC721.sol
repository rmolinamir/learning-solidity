// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

/**

  [EIP-721: Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721)

 */
contract ERC721 {

  /**
    TODO: Add indexed modifier definition from docs, it allows to index the event properties
    to query them later
   */
  event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

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

  /**
    @notice Count all NFTs assigned to an owner
    @dev NFTs assigned to the zero address are considered invalid, and this
    function throws for queries about the zero address.
    @param _owner An address for whom to query the balance
    @return The number of NFTs owned by `_owner`, possibly zero
  */
  function balanceOf(address _owner) public view addressIsNotNull(_owner) returns(uint256) {

    return _ownedTokensAmount[_owner];

  }

  /**
    @notice Find the owner of an NFT
    @dev NFTs assigned to zero address are considered invalid, and queries
    about them do throw.
    @param _tokenId The identifier for an NFT
    @return The address of the owner of the NFT
  */
  function ownerOf(uint256 _tokenId) public view returns(address) {

    address owner = _tokenOwner[_tokenId];

    require(isAddressValid(owner), "ERC721: NFTs assigned to zero address are considered invalid.");

    return owner;

  }

  /**
    Checks if a tokenId is mapped to an existing owner.
   */
  function _exists(uint256 tokenId) internal view returns(bool) {

    address owner = _tokenOwner[tokenId];

    return owner == address(0);

  }

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
    @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
    TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
    THEY MAY BE PERMANENTLY LOST
    @dev Throws unless `msg.sender` is the current owner, an authorized
    operator, or the approved address for this NFT. Throws if `_from` is
    not the current owner. Throws if `_to` is the zero address. Throws if
    `_tokenId` is not a valid NFT.
    @param _from The current owner of the NFT
    @param _to The new owner
    @param _tokenId The NFT to transfer
   */
  function transferFrom(address _from, address _to, uint256 _tokenId) external payable
    onlyOwnerOf(_tokenId)
    addressIsNotNull(_to)
  {

    _transferFrom(_from, _to, _tokenId);

  }

  function _transferFrom(address _from, address _to, uint256 _tokenId) internal
    onlyOwnerOf(_tokenId)
    addressIsNotNull(_to)
  {

    require(ownerOf(_tokenId) == _from, "Sender address does not own the token.");

    _tokenOwner[_tokenId] = _to;
    _ownedTokensAmount[_from] -= 1;
    _ownedTokensAmount[_to] += 1;

    emit Transfer(_from, _to, _tokenId);

  }

  function isAddressValid(address wallet) private pure returns(bool) {
    return wallet != address(0);
  }

  modifier addressIsNotNull(address wallet) {
    require(isAddressValid(wallet), "ERC721: Zero address is considered invalid.");
    _;
  }

  modifier onlyOwnerOf(uint256 tokenId) {
    require(ownerOf(tokenId) == msg.sender, "ERC721: Unauthorized message sender.");
    _;
  }

}
