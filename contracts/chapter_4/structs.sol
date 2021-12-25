// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Solidity provides a way to define new types in the form of structs.
  Struct are types that are used to represent a record.

  Struct types can be used inside mappings and arrays and they can themselves
  contain mappings and arrays.

  It is not possible for a struct to contain a member of its own type, although
  the struct itself can be the value type of a mapping member or it can contain a dynamically-sized array of its type. This restriction is necessary, as the size of the struct has to be finite.

  Note how in all the functions, a struct type is assigned to a local variable
  with data location storage. This does not copy the struct but only stores a
  reference so that assignments to members of the local variable actually write
  to the state.

  Of course, you can also directly access the members of the struct without
  assigning it to a local variable, as in campaigns[campaignID].amount = 0.

  NOTE: Until Solidity 0.7.0, memory-structs containing members of storage-only
  types (e.g. mappings) were allowed and assignments like
  `campaigns[campaignID] = Campaign(beneficiary, goal, 0, 0)` would work and just
  silently skip those members.

 */

contract Structs {

  struct Movie {

    string id;
    string title;
    string director;

  }

  Movie defaultMovie = Movie('1a0953e0-f25b-4f7e-954c-5edc17bace81', 'Blade Runner', 'Ridley Scott');

  Movie movie;

  function setMovieAsDefaultMovie() public {

    movie = defaultMovie;

  }

  function setMovie(string memory id, string memory title, string memory director) public {

    movie = Movie(id, title, director);

  }

  function getMovieId() public view returns(string memory) {

    return movie.id;

  }

  // 1. Create a new movie and set it up so that it updates to the movie in the setMovie function
  // 2. Return the id of the new movie
  // 3. Create a new var called comedy and set up comedy to the datatype Movie 
  // 4. Update the setMovie function with a comedy movie that contain name, director, and an id
  // 5. Return the movie id of the comedy. 

  Movie comedy;

  function setComedy() public {

    movie = Movie('1a0953e0-954c-4f7e-f25b-5edc17bace81', 'The Wolf of Wallstreet', 'Martin Scorsese');

  }

  function getComedyId() public view returns(string memory) {

    return comedy.id;

  }

}
