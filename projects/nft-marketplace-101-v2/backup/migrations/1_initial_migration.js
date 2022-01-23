/* eslint-disable no-undef */

const deploy = require("./helpers/deploy");

module.exports = function (deployer) {
  deploy(deployer, [artifacts.require('Migrations')]);
};
