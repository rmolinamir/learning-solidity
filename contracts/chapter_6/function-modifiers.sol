// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Function Modifiers

  Modifiers can be used to change the behaviour of functions in a declarative way.
  For example, you can use a modifier to automatically check a condition prior to
  executing the function.

  Modifiers are inheritable properties of contracts and may be overridden by
  derived contracts, but only if they are marked virtual. For details, please
  see Modifier Overriding.

  NOTE: Within the body block of a modifier, the underscore (character `_`) cannot
  be used as identifier, because it is used as placeholder statement for the body
  of a function to which the modifier is applied.

  https://docs.soliditylang.org/en/v0.8.11/contracts.html?highlight=modifier#function-modifiers

 */

abstract contract Guards {

  /**
    Checks if the amount in wei being sent in the contract (`msg.value`) is GTE
    to the price
   */
  modifier covers(uint price) {

    require(msg.value >= price);

    // The underscore (character `_`) is statement for the body of a function to
    // which the modifier is applied.
    // This underscore statement is the modified function continuing execution.
    _;

  }

  /**
    Checks if the sender's address (`msg.sender`) is eq to the wallet parameter
   */
  modifier only(address wallet) {

    require(msg.sender == wallet);

    // The underscore (character `_`) is statement for the body of a function to
    // which the modifier is applied.
    // This underscore statement is the modified function continuing execution.
    _;

  }

}

contract Register is Guards {

  mapping(address => bool) registeredAddresses;

  address owner;

  uint price;

  constructor (uint initialPrice) {
    owner = msg.sender;
    price = initialPrice;
  }

  function register() public payable covers(price) {
    registeredAddresses[msg.sender] = true;
  }

  function changePrice(uint _price) public only(owner) {
    price =_price;
  }

}

/**

  Modifier Overriding

  Function modifiers can override each other. This works in the same way as
  function overriding (except that there is no overloading for modifiers). The
  virtual keyword must be used on the overridden modifier and the override keyword
  must be used in the overriding modifier.

  https://docs.soliditylang.org/en/v0.8.11/contracts.html?highlight=modifier#function-modifiers

 */
