import { EIP1193Provider } from 'eip1193-provider';

type SignerMethods = (
  'eth_requestAccounts' |
  'eth_accounts' |
  'eth_chainId' |
  'eth_sendTransaction' |
  'eth_signTransaction' |
  'eth_sign' |
  'eth_signTypedData' |
  'personal_sign'
);

interface RequestArguments<Method extends string> {
  method: Method;
  params?: unknown[] | object;
}

/**
 * [Based on MetaMask Docs](https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents).
 */
export interface EthereumProvider extends EIP1193Provider {

  /**
   * `true` if the user has MetaMask installed.
   * 
   * NOTE: This property is non-standard. Non-MetaMask providers may also
   * set this property to `true`.
   */
  isMetaMask?: boolean;

  /**
   * Returns `true` if the provider is connected to the current chain,
   * and `false` otherwise. If the provider is not connected, the page
   * will have to be reloaded in order for connection to be re-established.
   * Please see the connect and disconnect events for more information.
   * 
   * NOTE: this method has nothing to do with the user's accounts. You may
   * often encounter the word "connected" in reference to whether a web3 site
   * can access the user's accounts. In the provider interface, however,
   * "connected" and "disconnected" refer to whether the provider can make
   * RPC requests to the current chain.
   */
  isConnected(): boolean;

  /**
   * Use request to submit RPC requests to Ethereum. It returns a Promise that
   * resolves to the result of the RPC method call. The params and return value
   * will vary by RPC method. In practice, if a method has any params, they are
   * almost always of type Array<any>. If the request fails for any reason, the
   * Promise will reject with an Ethereum RPC Error.
   * 
   * NOTE: MetaMask supports most standardized Ethereum RPC methods, in addition
   * to a number of methods that may not be supported by other wallets. See the
   * MetaMask RPC API documentation for details.
   */
  request<T = unknown>(args: RequestArguments<SignerMethods>): Promise<T>;

  _metamask?: {
    isUnlocked(): Promise<boolean>;
  };

}
