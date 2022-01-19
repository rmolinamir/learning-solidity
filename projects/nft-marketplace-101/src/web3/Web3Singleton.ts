import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { provider } from 'web3-core';
import { EthereumProvider } from './EthereumProvider';
import { ProviderRpcError, ProviderAccounts } from 'eip1193-provider';

// TODO: Might need to be renamed to W3Web3Singleton, because Ethers.js could be
// used here.
export class Web3Singleton {

  public _web3: Web3;

  public _ethereumProvider: EthereumProvider;

  private constructor(web3: Web3, ethereumProvider: EthereumProvider) {
    this._web3 = web3;
    this._ethereumProvider = ethereumProvider;
  }

  /**
   * READS
   */

  /**
   * Returns all connected accounts.
   */
  public async getConnectedAccounts(): Promise<string[]> {
    const accounts = await this._web3.eth.getAccounts();
    return accounts;
  }

  /**
   * Fetch the current network ID.
   */
  public async getNetworkId(): Promise<number> {
    const id = await this._web3.eth.net.getId();
    return id;
  }

  /**
   * SUBSCRIPTIONS
   */

  /**
   * Subscribes to account changes.
   */
  public onAccountChange(listener: (accounts: ProviderAccounts) => void): void {
    this._ethereumProvider.on('accountsChanged', listener);
  }

  /**
   * Subscribes to disconnects, whether it's the user manually disconnecting
   * or a ProviderRpcError.
   */
  public onDisconnect(listener: (error?: ProviderRpcError) => void): void {
    this._ethereumProvider.on('disconnect', listener);
    this._ethereumProvider.on('accountsChanged', (connectedAccounts) => {
      if (!connectedAccounts.length) listener();
    });
  }

  /**
   * WRITES
   */

  /**
   * Connects with an Ethereum account and returns the address.
   */
  public async connect(): Promise<string> {
    const res = await this._ethereumProvider.request<string | string[]>({ method: 'eth_requestAccounts' });
    const connectedAddress = Array.isArray(res) ? res[0] : res;
    return connectedAddress;
  }

  /**
   * METHODS
   */

  /**
   * Singleton instance.
   */
  private static singleton: Web3Singleton;

  /**
   * Returns the Web3Singleton instance if the metamask provider
   * was successfully loaded.
   */
  public static async new(): Promise<Web3Singleton | undefined> {

    if (!Web3Singleton.singleton) {

      const provider = await detectEthereumProvider();

      if (
        provider &&
        Web3Singleton.isEthereumProvider(provider)
      ) {
        console.log('ETH wallet detected.');
        console.log('window.ethereum: ', window.ethereum)
        const web3 = new Web3(provider as unknown as provider);
        Web3Singleton.singleton = new Web3Singleton(web3, provider);
      } else {
        console.log('ETH wallet not detected.');
        console.log('Please install MetaMask.');
      }

    }

    return Web3Singleton.singleton;

  }

  public static getWindowEthereumProvider(): EthereumProvider | undefined {
    return window.ethereum as EthereumProvider | undefined;
  }

  private static isEthereumProvider(provider: unknown): provider is EthereumProvider {
    return provider === window.ethereum;
  }

}
