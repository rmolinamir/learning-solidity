// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

contract Person {

  string name;
  uint age;

  constructor(string memory _name, uint _age) {

    name = _name;
    age = _age;

  }

}

contract Teacher is Person {

  constructor(string memory _name, uint _age) Person(_name, _age) {}

  function getDetails() public view returns(string memory) {

    // This will be possible in the future.
    // return string.concat(a, b, ..., n);

    return concatenateStrings([name, uint2str(age)], ", ");

  }

  // This function is mostly useless cause memory arrays have to fixed, for now.
  function concatenateStrings(string [2] memory arr, string memory separator) public pure returns(string memory) {

    if (arr.length == 0) return "";

    // Initialize the bStr to the first array member:
    bytes memory bStr = bytes(arr[0]);

    // From the second array member, concatenate the strings if any:
    for (uint i = 1; i < arr.length; i++) bStr = bytes.concat(bStr, bytes(separator), bytes(arr[i]));

    return string(bStr);

  }

  /**
    [How to convert uint to string in solidity?](https://stackoverflow.com/questions/47129173/how-to-convert-uint-to-string-in-solidity)
   */
  function uint2str(uint _i) internal pure returns (string memory _uintAsString) {

    if (_i == 0) return "0";

    // About to compute the length of the integer:

    uint j = _i;
    uint len;

    // Computing the length of the integer by treating the length
    // as a counter and dividing the integer by 10 until it reaches zero:
    while (j != 0) {
      len++;
      j /= 10;
    }

    // Initialize bstr, the bytes type of the integer using its length
    bytes memory bstr = new bytes(len);
    uint k = len;

    // Loops through the integer and transforms its digits to bytes,
    // then appends them to the bstr variable.
    while (_i != 0) {
      k = k-1;
      uint8 temp = (48 + uint8(_i - _i / 10 * 10));
      bytes1 b1 = bytes1(temp);
      bstr[k] = b1;
      _i /= 10;
    }

    // Cast integer bytes to string
    return string(bstr);

  }

}

contract TomTheTeacher is Teacher('Tom', 28) {}
