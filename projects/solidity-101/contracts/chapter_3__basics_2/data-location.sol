// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Data location

  Every reference type has an additional annotation, the “data location”, about
  where it is stored. There are three data locations: memory, storage and calldata.
  Calldata is a non-modifiable, non-persistent area where function arguments are
  stored, and behaves mostly like memory.

  NOTE: More information in the docs https://docs.soliditylang.org/en/v0.8.10/types.html.

 */
