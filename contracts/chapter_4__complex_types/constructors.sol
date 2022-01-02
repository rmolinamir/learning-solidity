// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Constructor is a special function using constructor keyword. 
  It initializes state variables of a contract. 

  Following are key characteristics:

    1. A contract can have only one constructor.

    2. A constructor code is executed once when a contract is created and it is used to initialize contract state.

    3. After a constructor code executed, the final code is deployed to the blockchain. 
    This code includes public functions and code reachable through public functions. 
    Constructor code or any internal method used only by the constructor are not included in final code.

    4. A constructor can be either public or internal.

    5. An internal constructor marks the contract as abstract.

    6. In case no constructor is defined, a default constructor is present in the contract.

 */

// 1. Create a contract called Base which stores fully accessible (inside and outside) data upon deployment 
// 2. Create a contract called Derived which derives the data from base and runs a function that always outputs the data to the integer 5. 

contract Base {

  uint public data;

  constructor (uint _data) {
    data = _data;
  }

}

contract Derived is Base(5) {

  function getData() public view returns(uint) {
    return data;
  }

}
