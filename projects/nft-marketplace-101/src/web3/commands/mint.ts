import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch, Web3State } from '../../contexts/web3/web3Reducer';

/**
 * Attempts to re-connect to the Ethereum Network.
 */
export async function mint(dispatch: Web3Dispatch, state: Web3State, nft: string): Promise<void> {

  try {

    const { contract, connectedAccount } = state;

    if (contract && connectedAccount) {

      await new Promise<void>((res, rej) => {

        /**
         * [methods.myMethod.send](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-send)
         */
        contract.methods.mint(nft).send({ from: connectedAccount })
          .once('receipt', _receipt => { // Fired when the transaction receipt is available.
            console.info('[INFO] Receipt: ', _receipt);
            dispatch({ type: Web3ActionType.Mint, payload: { nft } });
            res();
          })
          .once('error', err => {
            rej(err);
          });

      });

    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
