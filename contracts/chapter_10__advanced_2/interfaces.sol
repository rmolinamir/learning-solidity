// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

/**

  Interfaces 

  Interfaces are similar to abstract contracts and are created using interface keyword. 
  Following are the key characteristics of an interface.

  - Interface can not have any function with implementation.
  - Functions of an interface can be only of type external.
  - Interface can not have constructor.
  - Interface can not have state variables.
  - Interface can have enum, structs which can be accessed using interface name dot notation.

 */

contract Counter {

  uint public count;

  function increment() external {
    count += 1;
  }

}

interface ICounter {

  function count() external view returns(uint);

  function increment() external;

}

contract Contract {

  function incrementCounter(address counter) external {
    ICounter(counter).increment();
  }

  function getCount(address counter) external view returns(uint) {
    return ICounter(counter).count();
  }

}


/**

  Exercise Interfaces with Uniswap (Decentralized Exchange)

  In Uniswap each Uniswap smart contract, or pair, manages a liquidity pool made up of reserves of two ERC-20 tokens.
  In this exercise you are going to use the IDE to speak to Uniswap and get the reserves of a Uniswap pair of your choosing.

  These are the instructions in order to complete this exercise:
  1. Create two interfaces which each hold separate function signatures which you must look up in the Solidity docs V2 
  2. One interface will be called UniswapV2Factory which will contain the function signature that gets pairs.
  3. Another interface will be called UniswapV2Pair with will contain the function signature to get reserve values. 
  4. Create a contract which contains addresses of the paired tokens you choose as well as the factory address.
  5. Within the contract make a function which can successfully get the pair of your tokens and set it to a single address
  6. Use that address to get the reserve values and finally return the reserve values 
  7. Switch to Mainnet and connect MetaMask but DO NOT deploy the contract (or you will spend money!!!)
  8. From the Mainnet manually go through the steps of retrieving the values without deploying or spending gas!

*/

// https://github.com/Uniswap/v2-core/blob/master/contracts/interfaces/IUniswapV2Factory.sol
interface IUniswapV2Factory {

  // https://docs.uniswap.org/protocol/V2/reference/smart-contracts/factory#getpair
  function getPair(address tokenA, address tokenB) external view returns (address pair);

}

// https://github.com/Uniswap/v2-core/blob/master/contracts/interfaces/IUniswapV2Pair.sol
interface IUniswapV2Pair {

   // https://docs.uniswap.org/protocol/V2/reference/smart-contracts/pair#getreserves
  function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);

}

contract UsdcEthUniswapPairedTokens {

  address private uniswapV2Factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;

  address private tokenUSDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

  address private tokenETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

  address private ethUsdcPairedAddress;

  constructor() {
    ethUsdcPairedAddress = IUniswapV2Factory(uniswapV2Factory).getPair(tokenUSDC, tokenETH);
  }

  function getReserves() public view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast) {
    return IUniswapV2Pair(ethUsdcPairedAddress).getReserves();
  }

}
