// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Special variables (global variables) are globally available variables
  and provides information about the blockchain. 

  For example: 
    - msg.sender: Sender of the message (current call), msg.value (uint):
      Number of wei sent with the message., 
    - block.timestamp: Current block timestamp as seconds since unix epoch,
      block.number (uint): current block number

  NOTE: More information in the docs:
    - https://docs.soliditylang.org/en/v0.8.10/units-and-global-variables.html#special-variables-and-functions.
    - Cheatsheet: https://docs.soliditylang.org/en/v0.8.10/cheatsheet.html#global-variables

 */

contract GlobalVariables {

  uint storedData;

  function set() public {
    storedData = block.difficulty;
    storedData = block.timestamp;
    storedData = block.gaslimit;
    storedData = block.number;
    // Etc.
  }

  function get() public view returns(uint) {
    return storedData;
  }

}

contract LedgerBalance {

  mapping(address => uint) balance;

  function updatesBalance(uint newBalance) public {
    balance[msg.sender] = newBalance;
  }

}

// 1. Create a new contract called Updated
// 2. Create a public function called updatesBalance
// 3. Instantiate the data type contract LedgerBalance to a new variable called ledgerbalance (similar to struct or enum).
// 4. Set the new variable ledgerbalance = new LedgerBalance() 
// 5. Update the ledgebalance to 30 
// 6. Deploy both contracts and up then update the ledgerbalance by 30 using the Updated contract 

contract Updated {

  function updatesBalance() public {
    LedgerBalance balance = new LedgerBalance();
    balance.updatesBalance(30);
  }

}
