// SPDX-License-Identifier: MIT
pragma solidity >= 0.4.22 < 0.9.0;

contract Migrations {

  address public owner = msg.sender;

  uint public last_completed_migration;

  modifier onlyOwner() {
    require(msg.sender == owner, "This function is restricted to the contract's owner");
    _;
  }

  function setCompleted(uint completed) public onlyOwner {
    last_completed_migration = completed;
  }

  function upgrade(address newAddress) public onlyOwner {
    Migrations upgraded = Migrations(newAddress);
    setCompleted(upgraded.last_completed_migration());
  }

}
