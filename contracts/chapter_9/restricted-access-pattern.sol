// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Restricted Access to a contract is a common practice. 

  By default, a contract state is read-only unless it is specified as public.

  We can restrict who can modify the contract's state or call a contract's functions using modifiers. 

  Let us build a contract with modified restricted access with the following common writeouts:

  - onlyBy − only the mentioned caller can call this function.

  - onlyAfter − called after certain time period.

  - costs − call this function only if certain value is provided.

 */

contract RestrictedAccess {

  address public owner;

  uint public createdAt;

  constructor() {
    owner = msg.sender;
    createdAt = block.timestamp;
  }

  function setNewOwner(address newOwner) public onlyBy(owner) {
    owner = newOwner;
  }

  function disownxOwner() public onlyBy(owner) onlyAfter(createdAt + 3 weeks) {
    delete owner;
  }

  function forceOwnerChange(address newOwner) public payable costs(200 ether) {
    owner = newOwner;
  }

  modifier onlyBy(address addr) {
    require(addr == msg.sender, 'Sender not authorized.');
    _;
  }

  modifier onlyAfter(uint time) {
    require(block.timestamp >= time, 'Not available as of this date');
    _;
  }

  modifier costs(uint amount) {
    require(msg.value >= amount, 'Not enough Ether provided');
    _;
  }

}
