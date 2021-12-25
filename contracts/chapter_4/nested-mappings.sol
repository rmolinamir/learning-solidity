// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Nested Mappings (maps within maps)

  What if you wanted to store movies that belong to a certain person, thing
  or address?

  For example: Allow one address to spend on behalf of another address (ERC20 tokens).

  Syntax: `mapping(key =>mapping(key2 => value2)) nestedMap`

 */

contract NestedMappings {

  mapping(address => mapping(uint => Movie)) public myMovies;
  
  struct Movie {
    string title;
    string director;
  }
  
  function addMyMovie(uint id, string memory title, string memory director) public {
    // msg.sender is a global variable accessible throughout solidity which
    // captures the address that is calling the contract
    myMovies[msg.sender][id] = Movie(title, director); 
  }

}

contract Allowance {

  mapping(address => mapping(address => uint)) allowance;

  /**
    Add a spender and the respective allowance amount.
   */
  function add(address _addrOwner, address _addrSpender, uint allowanceAmount) public {
    allowance[_addrOwner][_addrSpender] = allowanceAmount;
  }

  /**
    Removes the spenders allowance.
   */
  function remove(address _addrOwner, address _addrSpender) public {
    delete allowance[_addrOwner][_addrSpender];
  }

  /**
    Gets the allowance of a spender from an owner's allowance map.
   */
  function getAllowanceAmount(address _addrOwner, address _addrSpender) public view returns(uint) {
    return allowance[_addrOwner][_addrSpender];
  }

}
