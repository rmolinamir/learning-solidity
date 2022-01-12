// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Modifiers:

  - pure for functions: Disallows modification or access of state.

  - view for functions: Disallows modification of state.

  - payable for functions: Allows them to receive Ether together with a call.

  - constant for state variables: Disallows assignment (except initialisation),
    does not occupy storage slot.

  - immutable for state variables: Allows exactly one assignment at construction
    time and is constant afterwards. Is stored in code.

  - anonymous for events: Does not store event signature as topic.

  - indexed for event parameters: Stores the parameter as topic.

  - virtual for functions and modifiers: Allows the function’s or modifier’s
    behaviour to be changed in derived contracts.

  - override: States that this function, modifier or public state variable changes
    the behaviour of a function or modifier in a base contract.

  https://docs.soliditylang.org/en/v0.8.11/cheatsheet.html?highlight=modifiers#modifiers

 */

contract MethodModifiers {

  uint value;

  function getValue() public view returns(uint) {

    return value;

  }

  function setValue(uint _value) public {

    value = _value;

  }

  function getDefaultValue() public pure returns(uint) {

    return 2 + 2;

  }

  // 1. Create a function called multiply which returns 3 multiplied by 7 
  // 2. Create another fuction called valuePlusThree which returns the state variable value + 3 
  // 3. Sucessfully deploy the contracts and test for the results.

  function multiply() public pure returns(uint) {
    return 3 * 7;
  }

  function valuePlusThree() public view returns(uint) {
    return value + 3;
  }

}
