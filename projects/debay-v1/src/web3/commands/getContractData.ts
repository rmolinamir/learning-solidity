import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch, Web3State } from '../../contexts/web3/web3Reducer';

/**
 * Attempts to re-connect to the Ethereum Network.
 */
export async function getContractData(dispatch: Web3Dispatch, contract: Web3State['contract']): Promise<void> {

  try {

    if (contract) {
      
      const totalSupply = Number(await contract.methods.totalSupply().call());

      const nftList: string[] = [];

      for (let i = 0; i < totalSupply; i++) nftList.push(await contract.methods.nftList(i).call());

      dispatch({ type: Web3ActionType.ContractData, payload: { totalSupply, nftList } });

    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
