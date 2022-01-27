/**
 * Deploys contract artifacts using the Truffle deployer.
 * @param {Deployer} deployer - Truffle Deployer.
 * @param {(Artifact | [Artifact, any[]])[]} artifacts - Compiled contract artifact list, optionally with params.
 */
module.exports = function deploy(deployer, artifacts) {

  for (const artifact of artifacts) {

    if (Array.isArray(artifact)) {
      const [_artifact, params] = artifact;
      deployer.deploy(_artifact, ...params);
    } else {
      deployer.deploy(artifact);
    }

  };

}
