// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

contract DebugLearnFunctions {

  function remoteControlOpen(bool closedDoor, bool openDoor) public pure returns(bool) {
    if (openDoor) return closedDoor;
    return openDoor;
  }

  function addValues(uint a) public pure returns(uint) {
    uint b = 3;
    uint result = a + b;
    return result;
  }

  function addNewValues(uint a) public pure returns(uint) {
    uint b = 5;
    uint result = a + b;
    return result;
  }

  function multiplyCalculatorByFour(uint a) public pure returns(uint) {
    return a * 4;
  }

  function divideCalculatorByFour(uint a) public pure returns(uint) {
    return a / 4;
  }

}
