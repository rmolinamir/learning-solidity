// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Abstract Contracts

  Abstract Contract is one which contains at least one function without any
  implementation. Such a contract is used as a base contract.

  Generally an abstract contract contains both implemented as well as abstract
  functions. Derived contract will implement the abstract function and use the
  existing functions as and when required.

*/

abstract contract Abstract {

  // Abstract functions without their implementations should be marked as virtual.
  function greetings() public pure virtual returns(string memory);

}

contract Derived is Abstract {

  // Implementations of abstract functions should be marked as override.
  function greetings() public pure override returns(string memory) {
    return 'hello world';
  }

}

abstract contract Calculator {

  function sum(uint a, uint b) public pure virtual returns(uint);

}

contract Test is Calculator {

  function sum(uint a, uint b) public pure override returns(uint) {
    return a + b;
  }

}
