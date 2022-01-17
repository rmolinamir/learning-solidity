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

1. Compile the Solidity smart contracts by running `npm run contracts:compile`.
2. Deploy the Solidity smart contracts by running `npm run contracts:migrate`.
   - Make sure that Ganache is running in the background and your network is set up.
3. [Follow the TailwindCSS installation steps](https://tailwindcss.com/docs/guides/create-react-app).
   - The most imporatant step is being able to successfully run `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`.
