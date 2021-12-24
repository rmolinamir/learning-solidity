// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Data locations are not only relevant for persistency of data, but also for the semantics of assignments:

  - Assignments between storage and memory (or from calldata) always create an independent copy.

  - Assignments from memory to memory only create references. This means that changes to one memory variable are also visible in all other memory variables that refer to the same data.

  - Assignments from storage to a local storage variable also only assign a reference.

  - All other assignments to storage always copy. Examples for this case are assignments to state variables or to members of local variables of storage struct type, even if the local variable itself is just a reference.

 */

contract AssignmentOperator {

  // The data location of x is storage.
  // This is the only place where the
  // data location can be omitted.
  uint[] x;

  // The data location of memoryArray is memory.
  function f(uint[] memory memoryArray) public {

    x = memoryArray; // works, copies the whole array to storage
    uint[] storage y = x; // works, assigns a pointer, data location of y is storage

    y[7]; // fine, returns the 8th element
    y.pop(); // fine, modifies x through y

    delete x; // fine, clears the array, also modifies y

    // The following does not work; it would need to create a new temporary /
    // unnamed array in storage, but storage is "statically" allocated:
    // y = memoryArray;

    // This does not work either, since it would "reset" the pointer, but there
    // is no sensible location it could point to.
    // delete y;

    g(x); // calls g, handing over a reference to x

    h(x); // calls h and creates an independent, temporary copy in memory

  }

  function g(uint[] storage) internal pure {}

  function h(uint[] memory) public pure {}

}
