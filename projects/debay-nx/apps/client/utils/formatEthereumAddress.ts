import Web3 from 'web3';

export function formatEthereumAddress(address: string, chainId?: number): string {

  return Web3.utils.toChecksumAddress(address, chainId);

}
