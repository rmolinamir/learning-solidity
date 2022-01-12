// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/* 

  While writing a program, there may be a situation when you need to adopt one out of a given set of paths. 
  In such cases, you need to use conditional statements that allow your program to make correct decisions and perform right actions.

  if statement: The if statement is the fundamental control statement that allows 
  Solidity to make decisions and execute statements conditionally.

  if...else statement: The 'if...else' statement is the next form of control statement that allows 
  Solidity to execute statements in a more controlled way.

  NOTE: More information in the docs https://docs.soliditylang.org/en/v0.8.10/types.html.

*/

contract DecisionMaking {

  uint oranges = 4; // one equal sign (=) assigns value whereas two equal signs (==) equivalates values

  function validateOranges() public view returns (bool) {
    if(oranges == 5) return true; 
    else return false;
  }

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

  // 1. Create a function which will multiply a by b and divide the result by b
  // 2. Only return the multiplication of the function if b is greater than a AND a does not equal b

  function foo(uint a, uint b) public pure returns(uint) {
    uint product = a * b;
    uint result = product / b;
    if (b > a && a != b) return result;
    return 0;
  }

  // 1. Initialize 3 state variables a, b, f
  // 2. Create a function called bar that is public and viewable which returns a local variable d
  // 3. Initialize d to 23
  // 4. Return d in short handed assignment form to multiply itself by itself and then substracted by b
  // 5. Make the function conditional so that it will only return the multiplication if a is greather than or equal to a (this is dumb) and b is less than f, otherwise return d
  // 6. In practice, you never want to write code like this
  // 7. Assign each parameter the following: a should be 300, b should be 12, f should be 47

  function bar(uint a, uint b, uint f) public pure returns(uint) {
    uint d = 23;
    if (a >= a && b < f) return (d *= d) - b;
    return d;
  }

}
