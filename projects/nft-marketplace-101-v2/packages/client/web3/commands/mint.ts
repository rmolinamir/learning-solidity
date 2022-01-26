import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch, Web3State } from '../../contexts/web3/web3Reducer';

/**
 * Attempts to re-connect to the Ethereum Network.
 */
export async function mint(dispatch: Web3Dispatch, state: Web3State, nft: string): Promise<void> {

  try {

    const { contract, connectedAccount, } = state;

    if (contract && connectedAccount) {

      const tx = await contract.methods.mint(connectedAccount, nft);

      console.info('[INFO] Minting transaction: ', tx);

      dispatch({ type: Web3ActionType.Mint, payload: { nft, }, });

    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
