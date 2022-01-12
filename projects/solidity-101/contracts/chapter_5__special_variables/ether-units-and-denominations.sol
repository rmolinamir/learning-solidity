// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Ether Units.

  Ethereum is the blockchain and Ether is the currency for Ethereum.

  Similar to currency, Solidity has time units where lowest unit is second
  and we can use seconds, minutes, hours, days and weeks as suffix to denote
  time.

 */

contract EtherUnits {

    function test() public pure {

      // wei is the smallest denomination of ether    
      assert(1000000000000000000 wei == 1 ether); // 10^18 wei = 1 eth
      assert(1 wei == 1); // 1 wei = 1
      assert(1 ether == 1e18);

      // If 1 ether == 10^18 wei, then 2 ether equals...
      assert(2 ether == 2000000000000000000 wei);

    }

  // Assert equivalencies for minutes to seconds, hours to minutes, days to hours,
  // and weeks to days
  function time() public pure {

    assert(60 seconds == 1 minutes);
    assert(60 minutes == 1 hours);
    assert(24 hours == 1 days);
    assert(7 days == 1 weeks);

  }

}
