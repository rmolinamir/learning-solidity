
const contracts = [
  // Chapter 4
  // artifacts.require("Person"),
  [artifacts.require("Teacher"), ["Henry", 64]],
  artifacts.require("TomTheTeacher"),
  artifacts.require("Derived"),
];

module.exports = function (deployer) {

  for (const contract of contracts) {

    if (Array.isArray(contract)) {
      const [_contract, params] = contract;
      deployer.deploy(_contract, ...params);
    } else {
      deployer.deploy(contract);
    }

  };

};
