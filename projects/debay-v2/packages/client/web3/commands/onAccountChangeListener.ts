import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch, Web3State } from '../../contexts/web3/web3Reducer';
import { EthereumService } from '../EthereumService';

/**
 * Attempts to re-connect to the Ethereum Network.
 */
export async function onAccountChangeListener(dispatch: Web3Dispatch, connectedAccount: Web3State['connectedAccount']): Promise<void> {

  try {

    const ethereumService = await EthereumService.new();

    if (ethereumService) {
      ethereumService.onAccountChange(([accountAddress]) => {
        if (accountAddress !== connectedAccount)
          dispatch({ type: Web3ActionType.Connect, payload: { address: accountAddress, }, });
      });
    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
