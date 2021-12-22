// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/* 
  While writing a program, there may be a situation when you need to adopt one out of a given set of paths. 
  In such cases, you need to use conditional statements that allow your program to make correct decisions and perform right actions.

  if statement: The if statement is the fundamental control statement that allows 
  Solidity to make decisions and execute statements conditionally.

  if...else statement: The 'if...else' statement is the next form of control statement that allows 
  Solidity to execute statements in a more controlled way.
*/

contract DecisionMaking {

  uint oranges = 4; // one equal sign (=) assigns value whereas two equal signs (==) equivalates values

  function validateOranges() public view returns (bool) {
    if(oranges == 5) return true; 
    else return false;
  }

  // Exercise in DeFi! :)
  // 1. Create a stakingWallet variable as an integer and set it to the value of 10
  // 2. Write a function called airDrop which has public visibility, is IDE viewable and returns an integer
  // 3. Create decision making logic so that if the wallet has a value of 10 then add to the wallet 10 more
  // 4. Add an else statement so that if the wallet does not equal the value of 10 to add only 1 more
  // 5. Return the value of the wallet 
  // 6. Deploy the contract the test the results - try changing the value of the wallet to 6 and redeploying for varying results

  uint stakingWallet = 10;

  function airDrop() public view returns(uint) {

    uint wallet = stakingWallet;

    if (wallet == 10) wallet += 10;
    else wallet += 1;

    return wallet;

  }

}
