// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Libraries are similar to contracts but are mainly intended for reuse.
  A Library contains functions which other contracts can call. 
  Solidity have certain restrictions on the use of a Library. Following are the
  key characteristics of a Solidity Library.

  - Library functions can be called directly if they do not modify the state. 
    That means pure or view functions only can be called from outside the library.

  - Library can not be destroyed as it is assumed to be stateless.

  - A Library cannot have state variables.

  - A Library cannot inherit any element.

  - A Library cannot be inherited.

 */

library Lodash {

  /**
    Returns the index value of some integer that is being searched for.
    Returns -1 if nothing was found.
   */
  function indexOf(uint[] storage list, uint value) public view returns(int) {

    for (uint i = 0; i < list.length; i++) if (list[i] == value) return int(i);

    return -1;

  }

}

contract Test {

  uint[] data = [1, 2, 3, 4, 5];

  function isValueInData(uint val) external view returns(bool) {

    int index = Lodash.indexOf(data, val);

    return index != -1;

  }

}


/**

  The directive using A for B; can be used to attach library functions
  of library A to a given type B. It's similar to C#'s Extension Methods
  where you can "add" methods to existing types without creating a new
  derived type, recompiling, or otherwise modifying the original type.

  These functions will use the caller type as their first parameter
  (usually identified as self).

*/

contract UsingDirectivePattern {

  using Lodash for uint[];

  uint[] data = [1, 2, 3, 4, 5];

  function isValueInData(uint val) external view returns(bool) {

    int index = data.indexOf(val);

    return index != -1;

  }

}
