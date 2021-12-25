# README

## Blockchain

## What is the most basic way of understanding what a block chain is?

We're going to be working a lot with with test networks on the theory and block chain. We're interacting with the block chain with smart contracts, with applications.

In its most basic form, a blockchain is an auditable database. It's essentially it's our back end. More specifically, a part of. It's a database which is storing our transactions, and it is a database in which data can only be added on.

We also cannot remove those transactions or change them in any way. Now, we do update contracts and we can update our smart contracts and interact with them. But when we migrate our data, we are effectively updating to new addresses with our smart contract. For example, when using the Truffle framework and updating and running test suites.

The point here is that we can be periodically add data on the blockchain, and the data that we add are called blocks. It's a series of blocks that are chained together, and these blocks serve as a public auditable database for which we can build our applications upon.

## Solidity

### Cheatsheet

[Official Solidity cheatsheet hosted in the solidity docs website](https://docs.soliditylang.org/en/v0.8.10/cheatsheet.html#);

## Truffle

### Migrations

> [What are truffle migrations?](https://ethereum.stackexchange.com/a/8306)

```sol
contract Migrations {

  address public owner;
  uint public last_completed_migration;

  modifier restricted() {
    if (msg.sender == owner) _
  }

  function Migrations() {
    owner = msg.sender;
  }

  function setCompleted(uint completed) restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }

}
```

The `Migrations` contract stores (in `last_completed_migration`) a number that corresponds to the last applied "migration" script, found in the migrations folder. Deploying this `Migrations` contract is always the first such step anyway. The numbering convention is `x_*.js`, with `x` starting at `1`. Your real-meat contracts would typically come in scripts starting at `2_.*.js`...

So, as this `Migrations` contract stores the number of the last deployment script applied, Truffle will not run those scripts again. On the other hand, in the future, your app may need to have a modified, or new, contract deployed. For that to happen, you create a new script with an increased number that describes the steps that need to take place. Then, again, after they have run once, they will not run again.

And yes, the last 2 lines are true Solidity. Look at [contract OwnedToken](http://solidity.readthedocs.io/en/latest/contracts.html#creating-contracts).
