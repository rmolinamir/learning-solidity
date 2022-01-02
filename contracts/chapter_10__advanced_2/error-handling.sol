// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Error Handling

  Solidity has functions that help with error handling.
  A way of tackling this is that when an error happens, the state reverts back
  to its original state.

  Below are some of the important methods for error handling:

  - assert(bool condition) − In case condition is not met, this method call causes an 
    invalid opcode and any changes done to the state gets reverted. This method is to be
    used for internal errors.

  - require(bool condition) − In case condition is not met, this method call reverts
    to the original state.  This method is to be used for errors in inputs or external
    components.

  - require(bool condition, string memory message) − In case condition is not met, this
    method call reverts to the original state. This method is to be used for errors in
    inputs or external components. It provides an option to provide a custom message.

  - revert() − This method aborts the execution and revert any changes done to the state.

  - revert(string memory reason) − This method aborts the execution and revert any changes
    done to the state. It provides an option to provide a custom message.

*/

contract SolarPower {

  bool public isSunny = true;

  bool public umbrella = false;

  uint public power = 0; // Can never equal 6 (assertion)

  // Solar panel machine:
  function solarCalc() public {
    require(isSunny, 'It is not sunny today');
    power += 3;
    assert(power != 6);
  }

  function changeWeather() public {
    isSunny = !isSunny;
  }

  function bringUmbrella() public {
    if (!isSunny) umbrella = true;
    else revert('No need for an umbrella today');
  }

}


/**

  1. Create a contract called Vendor with the state variable address seller. 
  It should contain a modifier onlySeller that requires the msg.sender to be the seller.
  2. Add a function becomeSeller which sets the seller to the msg.sender.
  3. Create a function named sell which is payable and checks so see 
  if an input of an amount is greater than the msg.value and in the event
  to revert that there is not enough ether provided as a throw error.

*/

contract Vendor {

  address seller;

  modifier onlySeller {
    require(msg.sender == seller, 'Only the seller is allowed');
    _;
  }

  function becomeSeller() public {
    seller = msg.sender;
  }

  function sell(uint amount) public payable onlySeller {
    if (amount > msg.value) revert('Not enough ether provided');
  }

}
