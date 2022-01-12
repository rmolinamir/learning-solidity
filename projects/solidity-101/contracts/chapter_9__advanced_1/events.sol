// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

contract Events {

  event NewTrade(uint date, address from, address to, uint amount);

  function trade(address to, uint amount) external {
    // Outside consumers can subscribe to the events through web3js
    emit NewTrade(block.timestamp, msg.sender, to, amount);
  }

}
