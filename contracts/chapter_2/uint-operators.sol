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

contract UintOperators {

  //
  // Comparison operators
  //

  function eq(uint a, uint b) public pure returns(bool) {
    return a == b;
  }

  function ne(uint a, uint b) public pure returns(bool) {
    return a != b;
  }

  function gt(uint a, uint b) public pure returns(bool) {
    return a > b;
  }

  function gte(uint a, uint b) public pure returns(bool) {
    return a >= b;
  }

  function lt(uint a, uint b) public pure returns(bool) {
    return a < b;
  }

  function lte(uint a, uint b) public pure returns(bool) {
    return a <= b;
  }

  //
  // Arithmetic operators
  //

  function add(uint a, uint b) public pure returns(uint) {
    uint result;
    result = a + b;
    return result;
  }

  function substract(uint a, uint b) public pure returns(uint) {
    require(gte(a, b), "Throws an error because the (a - b) uint (an alias for uint256, a 256-bit unsigned integer) can't be negative.");
    return a - b;
  }

  function remainder(uint a, uint b) public pure returns(uint) {
    return a % b;
  }

  function divide(uint a, uint b) public pure returns(uint) {
    return a / b;
  }

  function multiply(uint a, uint b) public pure returns(uint) {
    return a * b;
  }

  function exponentiation(uint a, uint b) public pure returns(uint) {
    return a ** b;
  }

  function addOne(uint a) public pure returns(uint) {
    return ++a;
  }

  function substractOne(uint a) public pure returns(uint) {
    return --a;
  }

}
