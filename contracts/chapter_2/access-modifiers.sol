// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Private: Can only be referenced from inside the contract

  Internal: Can only be referenced from inside the contract or from other contracts
            that inherit the smart contract. Slightly less restrictive than public.

  External: Can only be referenced from outside the contract, not from within the
            contract.

  Public: Can be referenced from outside as well as inside the contract.

  NOTE: More information in the docs https://docs.soliditylang.org/en/v0.8.10/types.html.

 */

contract AccessModifiers {

  uint private increment = 15;

  uint public data = 10; // State variables are not public by default.

  function x() public returns(uint) {
    uint mutatedData = _x();
    return mutatedData;
  }

  function _x() private returns(uint) {
    data += increment; // Changes the state variable by adding the private increment when called!
    // NOTE: Mutating a contract's state variable cause transactions and gas fees.
    return data;
  }

  function y() public view returns(uint) {
    return data;
  }

  // _y causes a compile error because the ext function accesibility is external.
  // function _y() internal view returns(uint) {
  //   return ext();
  // }

  function z() public view returns(uint) {
    uint localData = data + increment;
    return localData;
  }

  function ext() external view returns(uint) {
    return data;
  }

}
