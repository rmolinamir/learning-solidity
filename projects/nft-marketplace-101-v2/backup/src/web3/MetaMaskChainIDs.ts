/**
 * These are the IDs of the Ethereum chains that MetaMask supports by default.
 * Consult [Chainlist](https://chainlist.org/) for more.
 */
export const MetaMaskChainIDs: Record<string, { hex: string, network: string }> = {
  1: { hex: '0x1', network: 'Ethereum Main Network (Mainnet)', },
  3: { hex: '0x3', network: 'Ropsten Test Network', },
  4: { hex: '0x4', network: 'Rinkeby Test Network', },
  5: { hex: '0x5', network: 'Goerli Test Network', },
  42: { hex: '0x2a', network: 'Kovan Test Network', },
};
