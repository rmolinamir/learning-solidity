# ERC721 Implementation Retrospective

- Composition over inheritance is entirely ignored.
  - This results in highly coupled contracts, duplicated code, duplicated logic, responsability blurness, and bad separation of concerns all over the implementation.
- The NFTs are implicit within the code.
  - What defines a NFT within the smart contracts? Is it its ID? Or is it its index? Or is it its value since the uniqueness of the value is also enforced in the root contract?
  - All of these properties are fragmented and stored between the sub contracts, and at times the properties themselves are duplicated, e.g. the indexes.
  - To fix this, there should be a `NFT` struct and a contract serving as a repository in charge of the enumeration and querying, perhaps implementing the `ERC721Enumerable` EIB interface.
