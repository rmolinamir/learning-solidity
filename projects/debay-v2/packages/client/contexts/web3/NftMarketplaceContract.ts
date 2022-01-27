import { DeBay } from '@debay/contracts';
import { SmartContract } from '../../web3/common/SmartContract';

export type NftMarketplaceContract = SmartContract<DeBay['functions']>;
