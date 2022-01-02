// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  This is a decentralized auction DApplication which has the following functionality:

  1. A contract called auction which contains state variables to keep track of the
  beneficiary (auctioneer), the highest wallet, the auction end time, and the highest
  bid.

  2. Events set up which can emit whenever the highest bid changes both address
  and amount and an event for the auction ending emitting the winner address
  and amount.

  3. The contract is deployed set to the beneficiary address and how long the
  auction will run for.

  4. A bid function which includes at the minimum the following: 

    a. Revert the call if the bidding period is over.
    b. If the bid is not higher than the highest bid, send the money back.
    c. Emit the highest bid has increased.

  4. Bearing in mind the withdrawal pattern, there should be a withdrawal function 
  to return bids based on a library of keys and values. 

  5. A function which ends the auction and sends the highest bid to the beneficiary
  taking a 0.05% cut for the contract maintainer.

*/

/**

  NOTE:

  1. This contract doesn't actually receive any Ether, the implementation
  is just for practice.

  2. The withdrawal pattern is not used, if it should be implemented, a pendingReturns
  mapping variable should be declared [mapping(address => uint)] and a withdraw function
  for the bidders to claim/withdraw their bids back.

  3. The state of the Auction is currently implicit. Adding an enum for the possible
  states of the auction, and storing the current state would make the implementation
  much easier.

 */
contract Auction {

  struct Metadata {

    uint cutPercentage;

    address payable maintainer;

  }

  struct Bid {

    address payable wallet;

    uint amount;

  }

  Metadata public metadata = Metadata(
    5,
    payable(0x654Bf4dFE0881A88d5daB9724f5a6B4C179208AD) // NOTE: Dummy address from my local Ganache network.
  );

  address payable public beneficiary;

  uint public auctionEndDate;

  Bid public highestBid;

  event AuctionStart(uint startDate, uint endDate);
  event AuctionComplete(Bid bid);
  event NewHighestBid(Bid bid);

  constructor(address payable _beneficiary) {
    beneficiary = _beneficiary;
    auctionEndDate = 0;
  }

  modifier only(address wallet) {

    require(wallet == msg.sender, 'Sender not allowed.');

    _;

  }

  modifier auctionUnstarted {

    require(auctionEndDate == 0, 'Auction already started.');

    _;

  }

  modifier auctionOngoing {

    require(auctionEndDate != 0, 'Auction has not been started.');

    require(block.timestamp <= auctionEndDate, 'Auction bidding period is over.');

    _;

  }

  modifier auctionOver {

    require(block.timestamp > auctionEndDate, 'Auction bidding period is not over.');

    _;

  }

  function start(uint _auctionEndDate) public only(beneficiary) auctionUnstarted {

    auctionEndDate = _auctionEndDate;

    require(auctionEndDate > block.timestamp, 'Auction End Date must be higher than block timestamp (i.e. current date)');

    emit AuctionStart(block.timestamp, auctionEndDate);

  }

  function bid() public payable auctionOngoing {

    if (beneficiary == msg.sender) revert('Beneficiary not allowed.');

    bool isNewHighestBid = msg.value > highestBid.amount;

    if (!isNewHighestBid) revert('Bid is not high enough.');

    refundHighestBid(); // TODO: This breaks the withdrawal pattern.

    highestBid = Bid(payable(msg.sender), msg.value);

    emit NewHighestBid(highestBid);

  }

  // TODO:
  // - This method should only be called once but currently it can be
  //   called multiple times after the auction is over.
  // - This function also breaks the withdrawal pattern because it deals with
  //   two adresses at once, should deal with the maintainer and the beneficiary
  //   separately.
  function end() public only(beneficiary) auctionOver {

    uint cut = highestBid.amount * (metadata.cutPercentage / 100);

    transferTo(metadata.maintainer, cut);

    uint proceeds = highestBid.amount * (1 - (metadata.cutPercentage / 100));

    transferTo(beneficiary, proceeds);

    emit AuctionComplete(highestBid);

  }

  function refundHighestBid() private {

    transferTo(highestBid.wallet, highestBid.amount);

  }

  function transferTo(address payable wallet, uint amount) private {

    wallet.transfer(amount);

  }

}
