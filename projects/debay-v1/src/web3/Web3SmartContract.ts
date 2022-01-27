import { Contract as Web3EthContract } from 'web3-eth-contract';
import { Anemic } from '../common/Anemic';
import { SmartContract } from './SmartContract';
import { Web3Singleton } from './Web3Singleton';

export class Web3SmartContract<Methods extends object> implements SmartContract<Methods> {

  public abi: AbiItem[];

  public address: string;

  public networks: {
    [key: number]: {
      events: object;
      links: object;
      address: string;
      transactionHash: string;
    },
  };

  public methods: Methods;

  private _contract: Web3EthContract;

  constructor(data: Anemic<Omit<SmartContract, 'methods'>>, _contract: Web3EthContract) {
    this.abi = data.abi;
    this.address = data.address;
    this.networks = data.networks;
    this._contract = _contract;
    this.methods = this._contract.methods;
  }

  public static async loadFrom<Methods extends object>({ abi, networks }: Anemic<Omit<SmartContract, 'address' | 'methods'>>): Promise<Web3SmartContract<Methods> | null> {

    const web3 = await Web3Singleton.new();

    if (!web3) return null;

    const network = await this.getNetworkIn(web3, networks);

    if (network) {

      const contract = new web3._web3.eth.Contract(abi, network.address) as unknown as Web3EthContract;
  
      return new Web3SmartContract({ address: network.address, abi, networks }, contract);

    }

    return null;

  }

  /**
   * Returns `true` if a smart contract is in the current network.
   */
  private static async getNetworkIn(web3: Web3Singleton, networks: SmartContract['networks']): Promise<SmartContract['networks'][number] | null> {

    const id = await web3.getNetworkId();

    return networks[id];

  }

}
