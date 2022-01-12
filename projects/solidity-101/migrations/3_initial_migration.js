
const contracts = [
  // Chapter 3
  artifacts.require("Loops"),
  artifacts.require("MemoryAndStrings"),
];

module.exports = function (deployer) {

  for (const contract of contracts) deployer.deploy(contract);

};
