import { ProviderAccounts, ProviderRpcError } from 'eip1193-provider';

export interface IEthereumService {

  /**
   * READS
   */

  /**
   * Returns all connected accounts.
   */
  getConnectedAccounts(): Promise<string[]>;

  /**
   * Fetch the current network ID.
   */
  getNetworkId(): Promise<number>;

  /**
   * SUBSCRIPTIONS
   */

  /**
   * Subscribes to account changes.
   */
  onAccountChange(listener: (accounts: ProviderAccounts) => void): void;

  /**
   * Subscribes to disconnects, whether it's the user manually disconnecting
   * or a ProviderRpcError.
   */
  onDisconnect(listener: (error?: ProviderRpcError) => void): void;

  /**
   * WRITES
   */

  /**
   * Connects with an Ethereum account and returns the address.
   */
  connect(): Promise<string>;

}
