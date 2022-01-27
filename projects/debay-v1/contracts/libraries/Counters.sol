// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import './SafeMath.sol';

library Counters {

  using SafeMath for uint256;

  struct Counter {

    uint256 value;

  }

  function current(Counter storage counter) internal view returns(uint256) {

    return counter.value;

  }

  function increment(Counter storage counter) internal view {

    SafeMath.add(counter.value, 1);

  }

  function decrement(Counter storage counter) internal view {

    SafeMath.substract(counter.value, 1);

  }

}
