import { NftMarketplaceContractInstance } from '../../../contracts/types';
import { SmartContract } from '../../web3/SmartContract';
import { TransformedContractInstance } from '../../web3/types/TransformedContractInstance';

export type NftMarketplaceContract = SmartContract<
  TransformedContractInstance<NftMarketplaceContractInstance,
  NftMarketplaceContract
>>;
