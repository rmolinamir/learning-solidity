import { Web3Dispatch } from '../../contexts/web3/web3Reducer';
import { Web3SmartContract } from '../Web3SmartContract';
// import NftMarketplaceContractAbi from '../../../abis/NftMarketplaceContract.json';
import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { NftMarketplaceContract } from '../../contexts/web3/NftMarketplaceContract';

import * as Foo from '@debay/contracts';

/**
 * Loads the Contract from the local smart contract ABI JSON file.
 */
export async function loadContract(dispatch: Web3Dispatch): Promise<void> {

  console.log('Foo: ', Foo);

  try {

    const contract = await Web3SmartContract.loadFrom<object>({
      // abi: NftMarketplaceContractAbi.abi as AbiItem[],
      abi: [],
      networks: {},
    }) as unknown as NftMarketplaceContract;

    if (contract) dispatch({ type: Web3ActionType.LoadContract, payload: { contract, },});
    else throw new Error(`Contract not found in networks: [${false}]`);

  } catch (error) {

    // TODO: What to do if contract is not found, perhaps dispatch
    // an error?
    console.error('[ERROR]', error);

  }

}
