// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Memory, much like RAM, is a temporary place to store data whereas the
  data locaton type storage holds data for the lifetime of a contract (i.e.
  between function calls).
  
  The Solidity smart contract can use any amount of memory during the
  execution. but once execution stops, all memory is wiped for the next
  execution. But we want to be vigilant of how memory is used, because memory
  costs gas.

  NOTE: More information in the docs https://docs.soliditylang.org/en/v0.8.10/types.html.

 */

contract MemoryAndStrings {

  string greetings = 'Hello!';

  function setGreetings(string memory newGreetings) public {

    greetings = newGreetings; // Generates a transaction.

  }

  function getGreetings() public view returns(string memory) {

    return greetings;

  }

  function getLengthOf(string memory str) public pure returns(uint) {

    // The following code doesn't work in Solidity:
    // return str.length;

    // Unlike other languages, in Solidity computing the length of strings
    // is too computationally expensive. In order to solve this problem,
    // the strings have to be converted to bytes.

    bytes memory strBytes = getBytesOf(str);

    return strBytes.length;

  }

  /**
    Bytes are the basic unit of measurement and computer processing.
  */
  function getBytesOf(string memory str) public pure returns(bytes memory) {

    return bytes(str);

  }

  // 1. Create a string called favoriteColor
  // 2. Set the favorite color of the string favoriteColor to purple 
  // 3. Create a function which returns the string literal of favoriteColor
  // 4. Create a function which changes the favoriteColor string literal from blue to your favorite color.
  // 5. Create a function which can return how many characters there are in the string favorite color 

  string favoriteColor = 'purple';

  function getFavoriteColor() public view returns(string memory) {

    return favoriteColor;

  }

  function setFavoriteColor(string memory newFavoriteColor) public {

    favoriteColor = newFavoriteColor; // Generates a transaction.

  }

  function getLengthOfFavoriteColor() public view returns(uint) {

    return getLengthOf(favoriteColor);

  }

}
