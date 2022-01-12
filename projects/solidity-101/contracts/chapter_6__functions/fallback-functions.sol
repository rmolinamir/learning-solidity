// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Fallback Function

  The fallback function is executed on a call to the contract if none of the
  other functions match the given function signature, or if no data was supplied
  at all and there is no receive Ether function. The fallback function always
  receives data, but in order to also receive Ether it must be marked payable.

  A contract can have at most one fallback function, declared using
  either (both without the function keyword):
    - fallback () external [payable] or,
    - fallback (bytes calldata _input) external [payable] returns (bytes memory _output)

  This function must have external visibility. A fallback function can
  be virtual, can override and can have modifiers.

  If the version with parameters is used, _input will contain the full data
  sent to the contract (equal to msg.data) and can return data in _output. The
  returned data will not be ABI-encoded. Instead it will be returned without
  modifications (not even padding).

  In the worst case, if a payable fallback function is also used in place of
  a receive function, it can only rely on 2300 gas being available (see receive
  Ether function for a brief description of the implications of this).

  Like any function, the fallback function can execute complex operations as
  long as there is enough gas passed on to it.

  https://docs.soliditylang.org/en/v0.8.11/contracts.html?highlight=fallback%20functions#fallback-function

 */

contract FallbackFunctions {

  event Log(uint gas);

  fallback () external payable {

    // Not recommended to write much code in here, because the function will
    // fail if it uses too much gas.

    // Invoke send and transfer methods: we get 2300 gas which is enough to emit a log.
    // Invoke call method: we get all the gas.

    // Special Solidity function gasleft returns how much gas is left.
    emit Log(gasleft());

  }

  function getBalance() public view returns(uint) {

    // Return the stored balance of the contract.
    return address(this).balance;

  }

}

contract SendEtherToFallbackFunctions {

  /**
    "Passes" the amount of Ether in the message to a contract located in the
    payable address variable `_to` by calling the `transfer` method of an address.

    If we send the ether to the address of the FallbackFunctions contract, its
    callback method would be called and the gasleft() information would be logged,
    and a little less than 2300 gas would be available in the fallback function.
   */
  function transferFallback(address payable _to) public payable {

    // Send Ether with the transfer method:
    _to.transfer(msg.value); // We get 2300 gas in the fallback (transfer)

  }

  /**
    "Passes" the amount of Ether in the message to a contract located in the
    payable address variable `_to` by calling the `call` method of an address.

    If we send the address of the FallbackFunctions contract, its callback method
    would be called and the gasleft() information would be logged.
   */
  function callFallback(address payable _to) public payable {

    // Send Ether with the call method:
    (bool sent,) = _to.call{ value: msg.value }(''); // We get all the gas in the fallback (call)
    require(sent, 'Failed to send!');

  }

}
