// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Cybersecurity In Solidity - against bad actors, accidental occurances 

  Withdrawal pattern ensures that direct transfer call is not made which poses a security threat. 
  Transfers are atomic.

 */

contract Cybersecurity {

  address owner;

  constructor() {
    owner = msg.sender;
  }

  address payable[] funders;
  mapping(address => uint) contributions;

  modifier onlyOwner {
    require(owner == msg.sender, 'Only the owner is allowed');
    _;
  }

  /**

    An iterating function called returnFunds that will refund through the transfer method investors to a var 
    called funders back to their wallets called contributedAmount. Add a modifier to the signature
    that only the owner can execute this function. The function should return a bool success.

    What could go wrong with this function?

    1. What if the owner chickens out and does not return funds?
    The owner is a single point of failure and this pattern suggests
    adherence to server-centric thinking — only a privileged user should
    be able to initiate a mass distribution of funds.

    2. The loop is unbound. It could very well run out of gas before
    allocating all the funds back, an attacker could just make a
    bunch of small contributions.

   */
  function returnFunds() public onlyOwner returns(bool) {

    for(uint i = 0; i < funders.length; i++) {
      address payable funder = funders[i];
      uint contributedAmount = contributions[funder];
      funder.transfer(contributedAmount);
    }

    return true;

  }

  /**

    Another example: We only have two investors to refund.

    A function that will return funds to two investors without
    using a for loop. What could go wrong?

    What happens if one of the investors rejects the transfer? If
    the investor rejects the transfer the function is going to fail
    and then the other inestor will not get paid.

    Thinking that all contracts and accounts want to accept funds
    automatically may be intuitive at first but it is in fact very
    naive and very dangerous to build your contracts like this.

    If it is more in their interest to reject funds then chances are
    they will reject the funds.

   */
  function returnFunds(address payable investorFoo, address payable investorBar) public onlyOwner returns(bool) {

    investorFoo.transfer(contributions[investorFoo]);
    investorBar.transfer(contributions[investorBar]);

    return true;

  }

  /**

    A default fallback function is not payable - it will reject funds.

    If one contract has a default fallback function it would be deadly for
    the naive contract.

    To refund this contract address - it will not work unless everyone accepts.
    Should we disallow contracts to recieve funds? Because not all contracts
    will fail or are mailcious, it would deter DAOs.

    How does a contract find out if another address is a contract?

    If the bytes of code are greater than zero, then it is a contract.
    We can use the Solidity assembly for this.

    But this approach won't work because it can be fooled, for example see
    the Attacker contract. To counter this, we can use a strategy called
    withdrawal pattern.

   */
  function isItAContract() public view returns(bool) {

    uint32 size;
    address a = msg.sender;

    // Inline assembly accesses the EVM (Ethereum Virtual Machine) at a low level
    // extcodesize retrieves the size of the code.
    assembly { size := extcodesize(a) }

    return size > 0;

  }

}

// But if you call the address from the constructor, there are no byte codes.
contract Attacker {

  bool public trickedYou;

  Cybersecurity victim;

  constructor(address victimAddress) {

    victim = Cybersecurity(victimAddress);
    bool shouldBeTrue = victim.isItAContract(); // This will be false
    trickedYou = shouldBeTrue; // This will be false

  }

}
