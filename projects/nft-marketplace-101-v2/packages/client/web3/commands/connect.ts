import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch } from '../../contexts/web3/web3Reducer';
import { EthereumService } from '../EthereumService';

/**
 * Attempts to connect to the Ethereum Network.
 */
export async function connect(dispatch: Web3Dispatch): Promise<void> {

  try {

    const ethereumService = await EthereumService.new();

    if (ethereumService) {

      const address = await ethereumService.connect();

      dispatch({ type: Web3ActionType.Connect, payload: { address, }, });

    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
