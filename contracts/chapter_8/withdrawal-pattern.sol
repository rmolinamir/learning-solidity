// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Withdrawal Pattern

  By making our transactions one at a time, we greatly reduce danger to our executions.
  Instead of using transfer which reverts the code we can use send which returns a bool.

  A withdrawal is a function where an investor can withdraw funds on their own through
  that funcionality.

  For example, we eliminate the outside interference very greatly by giving customers a way to directly
  claim a refund with their contract address.

 */

contract WithdrawalPattern {

  mapping(address => uint) balance;

  /**

    It is not safe to interact with more than one customer at at time so we implement a function 
    to return funds using the withdrawal pattern.

    This is a function to claim refunds which requires that the balance of the
    msg.sender is greater than the refund amount and transfer that amount to the current
    caller.

    1. Write a function called withdrawFunds that takes an amount and returns bool success in the signature.
    2. Require that the balance of the current caller is greater than or equal to the amount.
    3. subtract the amount from the balance of the current sender
    4. transfer the amount over and return the trueness of the function

   */
  function claimRefund(uint amount) public returns(bool success) {

    address payable wallet = payable(msg.sender);

    require(balance[wallet] >= amount); // guards upfront

    balance[wallet] -= amount; // optimistic accounting

    wallet.transfer(amount); // transfer

    return true;

  }

}
