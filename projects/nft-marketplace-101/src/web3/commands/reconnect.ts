import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch } from '../../contexts/web3/web3Reducer';
import { Web3Singleton } from '../Web3Singleton';

/**
 * Attempts to re-connect to the Ethereum Network.
 */
export async function reconnect(dispatch: Web3Dispatch): Promise<void> {

  try {

    const web3 = await Web3Singleton.new();

    if (web3) {
      const [address] = await web3.getConnectedAccounts();
      console.log('reconnect address: ', address);
      if (address) dispatch({ type: Web3ActionType.Connect, payload: { address }});
    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
