import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch, Web3State } from '../../contexts/web3/web3Reducer';
import { Web3Singleton } from '../Web3Singleton';

/**
 * Attempts to re-connect to the Ethereum Network.
 */
export async function onAccountChangeListener(dispatch: Web3Dispatch, connectedAccount: Web3State['connectedAccount']): Promise<void> {

  try {

    const web3 = await Web3Singleton.new();

    if (web3) {
      web3.onAccountChange(([accountAddress]) => {
        if (accountAddress !== connectedAccount)
          dispatch({ type: Web3ActionType.Connect, payload: { address: accountAddress } });
      });
    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
