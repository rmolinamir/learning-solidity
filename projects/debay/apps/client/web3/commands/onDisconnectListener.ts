import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch } from '../../contexts/web3/web3Reducer';
import { Web3Singleton } from '../Web3Singleton';

/**
 * Attempts to re-connect to the Ethereum Network.
 */
export async function onDisconnectListener(dispatch: Web3Dispatch): Promise<void> {

  try {

    const web3 = await Web3Singleton.new();

    if (web3) {
      web3.onDisconnect(() => dispatch({ type: Web3ActionType.Disconnect, }));
    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
