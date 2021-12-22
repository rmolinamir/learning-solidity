// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Operands: The variables

  Comparisons: <=, <, ==, !=, >=, > (evaluate to bool)

  Bit operators: &, |, ^ (bitwise exclusive or), ~ (bitwise negation)

  Shift operators: << (left shift), >> (right shift)

  Arithmetic operators: +, -, unary - (only for signed integers), *, /, % (modulo), ** (exponentiation)

  NOTE: More information in the docs https://docs.soliditylang.org/en/v0.8.10/types.html.

 */

contract ArithmeticOperators {

  uint a = 5;
  uint b = 6;

  function add() public view returns(uint) {
    uint result;
    result = a + b;
    return result;
  }

  function substract() public view returns(uint) {
    return a - b; // NOTE: Throws an error because uint (an alias for uint256, a 256-bit unsigned integer) can't be negative.
  }

  function remainder() public view returns(uint) {
    return b % a;
  }

  function divide() public view returns(uint) {
    return b / a;
  }

  function multiply() public view returns(uint) {
    return b * a;
  }

  function addOne() public view returns(uint) {
    uint val = a;
    val++;
    return val;
  }

  function substractOne() public view returns(uint) {
    uint val = a;
    val--;
    return val;
  }

}
