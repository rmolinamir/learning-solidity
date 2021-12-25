// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

contract Arrays {

  uint[200] public fixedArray;

  uint[] public array;

  function addUint(uint num) public {
    array.push(num);
  }

  function removeUint() public {
    array.pop();
  }

  function getLength() public view returns(uint256) {
    return array.length;
  }

  // `delete` deletes or removes the value, but not the actual index.
  // Meaning, it does not change the length of the array.
  // For example:
  function remove(uint index) public {

    delete array[index];

  }

  // Another delete example:
  function filter(uint number) public {

    for (uint i = 0; i < array.length; i++)
      if (number == array[i]) remove(i);

  }

  // 1. Create an Empty array called changeArray
  // 2. Create a function called removeElement which sets the index argument of the array to the last element in the array
  // 3. remove the last index from that function with the pop method
  // 4. Create a function called test which pushes 1 2 3 4 into changeArray

  uint[] changeArray;

  // This is a way to remove elements from the array, but the order
  // of the elements of the array will be changed. This could be good
  // whenever the order is irrelevant.
  // NOTE: I personally think this is thrash and there are bound to be better
  // ways by simply googling.
  function removeElement(uint index) public {

    if (changeArray.length == 0) return;

    uint lastElementIndex = changeArray.length - 1;

    changeArray[index] = changeArray[lastElementIndex];

    changeArray.pop();

  }

  function test() public {

    changeArray.push(1);
    changeArray.push(2);
    changeArray.push(3);
    changeArray.push(4);

  }

  function getChangeArray() public view returns(uint[] memory) {
    return changeArray;
  }

}
