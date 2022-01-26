import { DeBay__factory, DeBay} from '@debay/contracts';
import { SmartContract } from '../common/SmartContract';
import { EthersjsEthereumService } from './EthersjsEthereumService';

export class EthersjsSmartContract implements SmartContract<DeBay['functions']> {

  public address: string;

  public methods: DeBay['functions'];

  constructor(
    address: string,
    contract: DeBay
  ) {
    this.address = address;
    this.methods = contract.functions;
  }

  public static async loadFrom(address: string, service: EthersjsEthereumService): Promise<EthersjsSmartContract> {

    const signer = service.web3Provider.getSigner();

    const contract = DeBay__factory.connect(address, signer);

    return new EthersjsSmartContract(address, contract);

  }

}
