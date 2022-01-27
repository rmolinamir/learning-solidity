// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import './interfaces/IERC165.sol';

/**

  The ERC165 standard actually requires that the supportsInterface function
  “use less than 30,000 gas”. So rather than re-calculating interfaceIDs every
  time someone calls supportsInterface, lets keep our supported interfaceIDs
  in a mapping.

 */
contract ERC165 is IERC165 {

  constructor() {

    registerInterface(bytes4(keccak256('supportsInterface(bytes4)')));

  }

  /**
    Hash table to keep track of contract fingerprint data of byte
    function conversions. 
   */
  mapping(bytes4 => bool) private _supportedInterfaces;

  function supportsInterface(bytes4 interfaceId) external view override returns (bool) {

    return _supportedInterfaces[interfaceId];

  }

  function registerInterface(bytes4 interfaceId) internal {

    require(interfaceId != 0xffffffff, 'ERC165: Invalid interface ID cannot be a null bytes4 value.');
    _supportedInterfaces[interfaceId] = true;

  }

}
