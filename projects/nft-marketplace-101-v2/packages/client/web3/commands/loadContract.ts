import { Web3Dispatch } from '../../contexts/web3/web3Reducer';
import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { NftMarketplaceContract } from '../../contexts/web3/NftMarketplaceContract';
import { EthersjsSmartContract } from 'web3/ethers/EthersjsSmartContract';
import { config } from '../config';
import { EthereumService } from 'web3/EthereumService';

/**
 * Loads the Contract from the local smart contract ABI JSON file.
 */
export async function loadContract(dispatch: Web3Dispatch): Promise<void> {

  try {

    const ethereumService = await EthereumService.new();

    if (ethereumService) {

      const contract = await EthersjsSmartContract.loadFrom(config.deBayContractAddres, ethereumService) as unknown as NftMarketplaceContract;
  
      dispatch({ type: Web3ActionType.LoadContract, payload: { contract, },});

    }
    else throw new Error(`No EthereumService found.`);

  } catch (error) {

    // TODO: What to do if contract is not found, perhaps dispatch
    // an error?
    console.error('[ERROR]', error);

  }

}
