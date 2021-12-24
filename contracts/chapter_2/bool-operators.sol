// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Operators:

    - ! (logical negation)

    - && (logical conjunction, “and”)

    - || (logical disjunction, “or”)

    - == (equality)

    - != (inequality)

  NOTE: More information in the docs https://docs.soliditylang.org/en/v0.8.10/types.html.

 */

contract BoolOperators {

  function negation(bool a) public pure returns(bool) {
    return !a;
  }

  function and(bool a, bool b) public pure returns(bool) {
    return a && b;
  }

  function or(bool a, bool b) public pure returns(bool) {
    return a || b;
  }

  function equality(bool a, bool b) public pure returns(bool) {
    return a == b;
  }

  function inequality(bool a, bool b) public pure returns(bool) {
    return a != b;
  }

}
