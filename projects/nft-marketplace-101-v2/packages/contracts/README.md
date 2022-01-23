# Solidity Workspace

Based on the [Solidity Template](https://github.com/paulrberg/solidity-template).

## Main Dependencies

- [Ethers](https://github.com/ethers-io/ethers.js/)
- [Hardhat](https://github.com/nomiclabs/hardhat)
- [Prettier Plugin Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity)
- [Solhint](https://github.com/protofire/solhint)
- [Solcover](https://github.com/sc-forks/solidity-coverage)
- [TypeChain](https://github.com/ethereum-ts/TypeChain)
- [Waffle](https://github.com/EthWorks/Waffle)

## Usage

### Pre Requisites

```sh
npm install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ npm run contracts:compile
```

### TypeChain

Compile the smart contracts and generate TypeChain artifacts:

```sh
$ npm contracts:types
```

### Lint Solidity

Lint the Solidity code:

```sh
$ npm lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
$ npm lint:ts
```

### Test

Run the Mocha tests:

```sh
$ npm test
```

### Coverage

Generate the code coverage report:

```sh
$ npm contracts:coverage
```

### Report Gas

See the gas usage per unit test and average gas per method call:

```sh
$ REPORT_GAS=true npm test
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
$ npm clean
```

### Deploy

Deploy the contracts to Hardhat Network:

```sh
$ npm contracts:deploy
```

## Syntax Highlighting

If you use VSCode, you can enjoy syntax highlighting for your Solidity code via the
[vscode-solidity](https://github.com/juanfranblanco/vscode-solidity) extension. The recommended approach to set the compiler version is to add the following fields to your VSCode user settings:

```json
{
  "solidity.compileUsingRemoteVersion": "v0.8.4+commit.c7e474f2",
  "solidity.defaultCompiler": "remote"
}
```

Where of course `v0.8.4+commit.c7e474f2` can be replaced with any other version.

## Useful Links

- [Overview](https://hardhat.org/getting-started/)
- [Connecting a wallet or Dapp to Hardhat Network](https://hardhat.org/getting-started/#connecting-a-wallet-or-dapp-to-hardhat-network)
- [Configuration](https://hardhat.org/config/)
- [Hardhat Network](https://hardhat.org/hardhat-network/)
- [Hardhat plugin that automatically starts and stops Ganache (opens new window) when running tests or scripts](https://hardhat.org/plugins/nomiclabs-hardhat-ganache.html)
- [Running tests with Ganache](https://hardhat.org/guides/ganache-tests.html)

---

## Hardhat

### Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

### Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/sample-script.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

### Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
