// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Reference Types

  Values of reference type can be modified through multiple different names.
  Contrast this with value types where you get an independent copy whenever
  a variable of value type is used. Because of that, reference types have to
  be handled more carefully than value types. Currently, reference types
  comprise structs, arrays and mappings. If you use a reference type, you
  always have to explicitly provide the data area where the type is stored:
  memory (whose lifetime is limited to an external function call), storage
  (the location where the state variables are stored, where the lifetime is
  limited to the lifetime of a contract) or calldata (special data location
  that contains the function arguments).

  An assignment or type conversion that changes the data location will always
  incur an automatic copy operation, while assignments inside the same data
  location only copy in some cases for storage types.

  NOTE: More information in the docs https://docs.soliditylang.org/en/v0.8.10/types.html.

 */
