
const contracts = [
  // Chapter 1
  artifacts.require("Basics"),
  artifacts.require("Calculator"),
  artifacts.require("DebugLearnFunctions"),
  artifacts.require("WelcomeToSolidity"),
];

module.exports = function (deployer) {

  for (const contract of contracts) deployer.deploy(contract);

};
