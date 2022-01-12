// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  The NaiveCryptoToken contract allows only its creator to create new coins
  (different issuance schemes are possible).

  Anyone can send coins to each other without a need for registering with
  a username and password, all you need is an Ethereum keypair.

 */

contract NaiveCryptoToken {

  /**
    Solidity events give an abstraction on top of the EVM’s logging
    functionality. Applications can subscribe and listen to these events
    through the RPC interface of an Ethereum client.

    Events are inheritable members of contracts. When an event is emitted, it
    stores the arguments passed in transaction logs.

    These logs are stored in the blockchain and are accessible using the address
    of a contract as long as the contract is present in the blockchain.

    https://docs.soliditylang.org/en/v0.8.11/contracts.html?highlight=fallback%20functions#events
  */ 
  event Sent(address from, address to, uint amount);
  event Debit(address wallet, uint amount);
  event Credit(address wallet, uint amount);

  /**
    Errors in Solidity provide a convenient and gas-efficient way to
    explain to the user why an operation failed. They can be defined
    inside and outside of contracts (including interfaces and libraries).

    They have to be used together with the revert statement which causes
    all changes in the current call to be reverted and passes the error
    data back to the caller.

    https://docs.soliditylang.org/en/v0.8.11/contracts.html?highlight=fallback%20functions#errors-and-the-revert-statement
  */
  error SelfTransaction(address wallet);
  error InsufficientBalance(uint requested, uint available);

  address public minter;

  mapping(address => uint) public balances;

  // The minter will be the sender who deploys the contract.
  constructor() {
    minter = msg.sender;
  }

  modifier onlyMinter {
    require(msg.sender == minter, 'Message sender has to be the minter.');
    _;
  }

  /**
    Make new coins and send them to an address.
    Only the minter (owner) can send these coins.
   */
  function mint(address receiver, uint amount) public onlyMinter {
    balances[receiver] += amount;
  }

  /**
    Send any amount of coins to an existing address.
   */
  function transact(address receiver, uint amount) public {

    if (msg.sender == receiver) revert SelfTransaction({ wallet: msg.sender });

    debit(msg.sender, amount);
    credit(receiver, amount);

    emit Sent(msg.sender, receiver, amount);

  }

  /**
    Remove an amount of ether from a wallet, if possible.
   */
  function debit(address wallet, uint amount) private {

    if (balances[wallet] < amount) {
      revert InsufficientBalance({
        requested: amount,
        available: balances[wallet]
      });
    }

    balances[wallet] -= amount;

    emit Debit(wallet, amount);

  }

  /**
    Add an amount of ether to a walet.
   */
  function credit(address wallet, uint amount) private {

    balances[wallet] += amount;

    emit Credit(wallet, amount);

  }

}
