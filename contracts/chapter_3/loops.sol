// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

contract Loops {

  uint [] private _numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function checkMultiplesOfNumbersList(uint a) public view returns(uint) {

    uint multiplesCount = 0;

    for (uint i = 0; i < _numbersList.length; i++)
      if (areMultiples(_numbersList[i], a)) multiplesCount++;

    return multiplesCount;

  }

  /**
    Checks if two numbers are divisible or multiples of each other.
   */
  function areMultiples(uint a, uint b) private pure returns(bool) {

    uint remainder = a % b;
    return remainder == 0;

  }

  // 1. Create a list that ranges from 1 to 20 called longList
  // 2. Create a list called numbersList of the following numbers: 1, 4, 34, 56
  // 3. Create a function that loops through numbersList and returns a true value if the number
  //    that the user inputs exists in the list otherwise it should return false 
  // 4. Create a function that loops through and returns how many even numbers there are in the long list

  uint [] private longList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                              12, 13, 14, 15, 16, 17, 18, 19, 20];

  uint [] private numbersList = [1, 4, 34, 56];

  function isInNumbersList(uint a) public view returns(bool) {

    for (uint i = 0; i < numbersList.length; i++)
      if (numbersList[i] == a) return true;

    return false;

  }

  function evenNumbersInLongList() public view returns(uint) {

    uint multiplesCount = 0;

    for (uint i = 0; i < longList.length; i++)
      if (isEvenNumber(longList[i])) multiplesCount++;

    return multiplesCount;

  }

  function isEvenNumber(uint a) public pure returns(bool) {

    return areMultiples(a, 2);

  }

}
