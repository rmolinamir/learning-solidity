# nft-marketplace-starter-kit

Please run npm install on the terminal to download the appropriate packages already defined to the package.json file.
Make sure you are in the source file.

**Please ensure you have downloaded the following additionally**.

1. Ganache
2. Truffle (global installation)
3. Metamask.io (hooked up on the browser)

**To run the development server on a local host scripts:** npm run start

For truffle tests and console please consult the official Truffle documentaion for updates.

## First Time Local Installation

1. Run `npm ci` (or `npm install` if you want to ignore `package-lock.json`).
2. Compile the Solidity smart contracts by running `npm run contracts:compile`.
3. Deploy the Solidity smart contracts by running `npm run contracts:migrate`.
   - **Make sure that Ganache is running in the background and your network is set up**.
4. [Follow the TailwindCSS installation steps](https://tailwindcss.com/docs/guides/create-react-app).
   - The **most important step** is being able to successfully run `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`.

## Thoughts

- Web3.js is terrible, too opinionated, it's also written in JavaScript. Ethers.js seems like a better alternative and its written in TypeScript.
  - [Read this for comparisons](https://github.com/adrianmcli/web3-vs-ethers).
- Truffle has the same problem as Web3.js, too opinionated. Hardhat seems like a unopinionated (or at least less opinionated) framework and its written in TypeScript.
- Waffle seems like a good library to test smart contracts.
  - [More info here](https://getwaffle.io/).

## TODOs

- Rename `web3` references to `ethereum` or `ether` since `web3.js` will be replaced. Or, keep `web3` as a reference to Web 3.0, the third version of the Internet.
