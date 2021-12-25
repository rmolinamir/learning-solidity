// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Enums are one way to create a user-defined type in Solidity. They are
  explicitly convertible to and from all integer types but implicit conversion
  is not allowed. The explicit conversion from integer checks at runtime that
  the value lies inside the range of the enum and causes a Panic error
  otherwise. Enums require at least one member, and its default value when
  declared is the first member. Enums cannot have more than 256 members.

  The data representation is the same as for enums in C: The options are
  represented by subsequent unsigned integer values starting from 0.

  Using type(NameOfEnum).min and type(NameOfEnum).max you can get the
  smallest and respectively largest value of the given enum.

  NOTE: More information in the docs https://docs.soliditylang.org/en/v0.8.10/types.html.

 */

contract Enums {

  enum FrenchFriesSize {
    Large,
    Medium,
    Small
  }

  FrenchFriesSize choice;

  FrenchFriesSize constant defaultChoice = FrenchFriesSize.Medium;

  function setSmall() public {
    choice = FrenchFriesSize.Small;
  }

  function getChoice() public view returns(FrenchFriesSize) {
    return choice;
  }

  function getDefaultChoice() public pure returns(uint) {
    return uint(defaultChoice);
  }

  // 1. Create an enum for the color of shirts called shirtColor and set it to the options of either RED or WHITE or BLUE
  // 2. Create a data of shirtColor called defaultChoice which is a constant set to the color BLUE 
  // 3. Create a data of shirtColor called choice and don't initiate the value
  // 4. Create a function called setWhite which changes the shirt color of shirtColor to white
  // 5. Create a function getChoice which returns the current choice of shirtColor
  // 6. Create a function getDefaultChoice which returns the default choice of shirtColor

  enum ShirtColor {
    Red,
    White,
    Blue
  }

  ShirtColor constant defaultShirtColor = ShirtColor.Blue;

  ShirtColor shirtColor;

  function setWhite() public {

    shirtColor = ShirtColor.White;

  }

  function getShirtColor() public view returns(ShirtColor) {

    return shirtColor;

  }

  function getDefaultShirtColor() public pure returns(ShirtColor) {

    return defaultShirtColor;

  }

}
