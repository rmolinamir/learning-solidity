import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import { EthereumProvider } from '../common/EthereumProvider';
import { ProviderRpcError, ProviderAccounts } from 'eip1193-provider';
import { IEthereumService } from '../common/IEthereumService';
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';

export class EthersjsEthereumService implements IEthereumService {

  public mainProvider: EthereumProvider;

  public web3Provider: Web3Provider;

  private constructor(mainProvider: EthereumProvider, web3Provider: Web3Provider) {
    this.mainProvider = mainProvider;
    this.web3Provider = web3Provider;
  }

  /* READS */

  public async getConnectedAccounts(): Promise<string[]> {

    const accounts = await this.web3Provider.listAccounts();
    return accounts;

  }

  public async getNetworkId(): Promise<number> {

    const { chainId, } = await this.web3Provider.getNetwork();
    return chainId;

  }

  /* SUBSCRIPTIONS */

  public onAccountChange(listener: (accounts: ProviderAccounts) => void): void {

    this.mainProvider.on('accountsChanged', listener);

  }

  public onDisconnect(listener: (error?: ProviderRpcError) => void): void {

    this.mainProvider.on('disconnect', listener);
    this.mainProvider.on('accountsChanged', (connectedAccounts) => {
      if (!connectedAccounts.length) listener();
    });

  }

  /* WRITES */

  public async connect(): Promise<string> {

    const res = await this.mainProvider.request<string | string[]>({ method: 'eth_requestAccounts', });
    const connectedAddress = Array.isArray(res) ? res[0] : res;
    return connectedAddress;

  }

  /* METHODS */

  /**
   * Singleton instance.
   */
  private static singleton: EthersjsEthereumService;

  /**
   * Returns the EthersjsEthereumService instance if the metamask provider
   * was successfully loaded.
   */
  public static async new(): Promise<EthersjsEthereumService | undefined> {

    if (!EthersjsEthereumService.singleton) {

      const mainProvider = await detectEthereumProvider();

      if (
        mainProvider &&
        EthersjsEthereumService.isEthereumProvider(mainProvider)
      ) {

        console.info('[INFO] ETH wallet detected.');

        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const web3Provider = new ethers.providers.Web3Provider(mainProvider as ExternalProvider);

        EthersjsEthereumService.singleton = new EthersjsEthereumService(mainProvider, web3Provider);

      } else {

        console.warn('[WARN] ETH wallet not detected.');
        console.warn('[WARN] Please install MetaMask.');

      }

    }

    return EthersjsEthereumService.singleton;

  }

  public static getWindowEthereumProvider(): EthereumProvider | undefined {
    return window.ethereum as EthereumProvider | undefined;
  }

  private static isEthereumProvider(provider: unknown): provider is EthereumProvider {
    return provider === window.ethereum;
  }

}
