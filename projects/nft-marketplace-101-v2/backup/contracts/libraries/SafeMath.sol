// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

library SafeMath {

  /**
    Safe addition that avoids negative number results.
   */
  function add(uint256 a, uint256 b) internal pure returns(uint256)
  {

    uint256 r = a + b;

    require(r >= a, 'SafeMath: Addition overflow.');

    return r;

  }

  /**
    Safe substraction that avoids negative number results.
  */
  function substract(uint256 a, uint256 b) internal pure returns(uint256)
  {

    require(b <= a, 'SafeMath: Substraction overflow.');

    uint256 r = a - b;

    return r;

  }

  function multiply(uint256 a, uint256 b) internal pure returns(uint256)
  {

    uint256 r = a * b;

    require(r / a == b, 'SafeMath: Multiplication overflow.');

    return r;

  }

  function divide(uint256 a, uint256 b) internal pure returns(uint256)
  {

    require(b > 0, 'SafeMath: Division overflow.');

    uint256 r = a / b;

    return r;

  }

  function modulo(uint256 a, uint256 b) internal pure returns(uint256)
  {

    require(b != 0, 'SafeMath: Modulo overflow.');

    uint256 r = a % b;

    return r;

  }

}
