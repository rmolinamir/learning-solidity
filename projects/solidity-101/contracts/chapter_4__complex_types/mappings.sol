// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Mapping is a reference type as arrays and structs. Following is the syntax
  to declare a mapping type.

  Mapping allows you to save data and add a key that you specify and then
  retrieve that info later.

  In Solidity you can't iterate through a map - you need to store the keys
  in an array and you can't give size.

 */

contract Mappings {

  // Keys can be of types string, uint, or bool. Values can be anything.
  mapping(address => uint) public integersByAddresses;

  function setAddress(address addr, uint num) public {

    integersByAddresses[addr] = num;

  }

  // Returns zero if the address is not in the mapping type.
  function getIntegerByAddress(address addr) public view returns(uint) {

    return integersByAddresses[addr];

  }

  function removeAddress(address addr) public {

    delete integersByAddresses[addr];

  }

  // 0. Create a unique data type as a struct called Movie and give it the string properties: title and diretor.
  // 1. Create a map called movie which takes a uint as a key and Movie as a value 
  // 2. Create a function called addMovie which takes three inputs, movie id, title and director which 
  //    assigns a value of an integer to a movie added back to the movie map. It should include a title and director name.
  // 3. Deploy the contract and update the movie information to the movie map with our favorite movies! 

  struct Movie {
    string title;
    string director;
  }

  mapping(uint => Movie) public catalog;

  function addMovie(uint id, string memory title, string memory director) public {
    catalog[id] = Movie(title, director);
  }

}
