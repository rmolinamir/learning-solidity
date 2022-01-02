// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Inheritance

  Inheritance is a way to extend functionality of a contract.
  Solidity supports both single as well as multiple inheritance.

  Following are the key highlighsts:

  - The contract in Solidity is similar to a Class in C++ - a blueprint for an object.

  - Classes can inherit and so can contracts.

  - Constructor − A special function declared with constructor keyword which will be 
    executed once per contract and is invoked when a contract is created.

*/

contract Inheritance {

  uint innerVal = 100;

  function innerAddTen(uint num) public pure returns(uint) {

    return num + 10;

  }

}


contract Contract is Inheritance {

  function getInnerVal() public view returns(uint) {

    return innerVal;

  }

  function outerAddTen(uint num) public pure returns(uint) {

    return innerAddTen(num);

  }

}
