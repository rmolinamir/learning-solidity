import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch } from '../../contexts/web3/web3Reducer';
import { EthereumService } from '../EthereumService';

/**
 * Attempts to re-connect to the Ethereum Network.
 */
export async function onDisconnectListener(dispatch: Web3Dispatch): Promise<void> {

  try {

    const ethereumService = await EthereumService.new();

    if (ethereumService) {
      ethereumService.onDisconnect(() => dispatch({ type: Web3ActionType.Disconnect, }));
    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
