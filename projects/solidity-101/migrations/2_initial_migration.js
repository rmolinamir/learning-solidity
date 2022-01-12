
const contracts = [
  // Chapter 2
  artifacts.require("DecisionMaking"),
  artifacts.require("AccessModifiers"),
  artifacts.require("UintOperators"),
  artifacts.require("BoolOperators"),
  artifacts.require("AssignmentOperator"),
];

module.exports = function (deployer) {

  for (const contract of contracts) deployer.deploy(contract);

};
