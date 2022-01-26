import { AbiItem } from '@debay/contracts';
import { Contract as Web3EthContract } from 'web3-eth-contract';
import { Anemic } from '../../common/Anemic';
import { SmartContract } from '../common/SmartContract';
import { Web3EthereumService } from './Web3EthereumService.legacy';

export class Web3SmartContract<Methods extends object> implements SmartContract<Methods> {

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

  constructor(
    data: Anemic<Omit<SmartContract, 'methods'>>,
    networks: Web3SmartContract<Methods>['networks'],
    _contract: Web3EthContract
  ) {
    this.address = data.address;
    this.networks = networks;
    this._contract = _contract;
    this.methods = this._contract.methods;
  }

  public static async loadFrom<Methods extends object>(
    abi: AbiItem[],
    networks: Web3SmartContract<Methods>['networks']
  ): Promise<Web3SmartContract<Methods> | null> {

    const ethereumService = await Web3EthereumService.new();

    if (!ethereumService) return null;

    const network = await this.getNetworkIn(ethereumService, networks);

    if (network) {

      const contract = new ethereumService._web3.eth.Contract(abi, network.address) as unknown as Web3EthContract;
  
      return new Web3SmartContract({ address: network.address, }, networks, contract);

    }

    return null;

  }

  /**
   * Returns `true` if a smart contract is in the current network.
   */
  private static async getNetworkIn(
    ethereumService: Web3EthereumService,
    networks: Web3SmartContract<object>['networks']
  ): Promise<Web3SmartContract<object>['networks'][number] | null> {

    const id = await ethereumService.getNetworkId();

    return networks[id];

  }

}
