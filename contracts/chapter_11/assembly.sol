// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Solidity provides an option to use assembly language to write inline assembly within
  Solidity source code.

  Assembly is a low level language that allows you to directly manipulate the EVM (more
  dangerous and not recommended).

  EVM = smart contracts are not the real code in the blockchain -Ssolidity code is compiled
  to a lower level language.

  In the EVM everything is stored in slots of 256 bits (a uint occupies one slot)
  whereas mappings or arrays occupy several.

 */

contract LearnAssembly {

  function addToEvm() external payable {

    // All of this is compiled to low level instructions
    // (opcodes - in total there are around 100)
    uint x;
    uint y;
    // uint z = x + y;

    // Declares an assembly block 
    assembly {

      // Inside we can manipulate variables declared outside and no
      // semi-colons are used, = is equal to := and we can bring in opcodes
      // for the operations.
      let z := add(x, y)

      // We can do if statements, functions, for loops. 

      // Load data for a specific slot:
      let a := mload(0x40)

      // Store something temporarily to memory:
      mstore(a, 4)

      // Persistance storage:
      sstore(a, 100)

    }

  }

  function checkIfContractExists(address addr) public view returns(bool success) {

    uint size;

    // Check whether an address contains any bytes of code or not.
    assembly {
      size := extcodesize(addr)
    }

    return size > 0;

  }

  /**

    The function convertDataBytes is attempting to convert using Solidity a
    data byte into a fixed bytes size.

    However if you run the code the way it is the it will not compile successfully
    because explicity type conversions are not allowed from bytes memory to bytes32.

    However we can use the Assemby and the mload to convert the data to bytes 32
    sucessfully. Bytes in memory size starts at second slot so we need to bring in
    the add 32 to start at the correct position.

  */
  function convertDataBytes() external pure {

    bytes memory data = new bytes(10);

    // We cannot convert this into a fixed size:
    // bytes32 data32 = bytes32(data);

    assembly {

      // bytes in memory is size, so data starts at the second slot.  
      let data32 := mload(add(data, 32))

      // The add operation simply adds 32 bytes to fill the first slot.

    }

  }

}
