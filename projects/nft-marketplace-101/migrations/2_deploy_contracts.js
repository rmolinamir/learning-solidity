/* eslint-disable no-undef */

const nftConfig = require("../nft-marketplace-config");
const deploy = require("./helpers/deploy");


module.exports = function (deployer) {
  deploy(deployer, [
    [artifacts.require('NftMarketplaceContract'), [nftConfig.name, nftConfig.symbol]],
  ]);
};
