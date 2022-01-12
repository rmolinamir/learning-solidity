// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;


/**

  - Three main types:
    - Boolean:
      keyword: bool
    - Integer
      keyword: uint
    - String
      keyword: string

  - Solidty supports all the features necessary to write modular code using functions:
    - function <function_name>(<parameter_list>) scope returns(<optional_type) { <implementation> };

 */
contract Basics {

  uint num = 4;
  bool boolean = true;
  string word = 'word';

  function openRemoteControl(bool closedDoor) public returns(bool) {
    // stuff goes here
  }

  function addValues() public pure returns(uint) {
    // stuff goes here
    uint a = 10;
    uint b = 5; 
    uint result = a + b;
    return result;
  }

}
