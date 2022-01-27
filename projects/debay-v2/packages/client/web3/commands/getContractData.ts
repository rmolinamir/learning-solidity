import { Web3ActionType } from '../../contexts/web3/Web3ActionType';
import { Web3Dispatch, Web3State } from '../../contexts/web3/web3Reducer';

/**
 * Attempts to re-connect to the Ethereum Network.
 */
export async function getContractData(dispatch: Web3Dispatch, contract: Web3State['contract']): Promise<void> {

  try {

    if (contract) {
      
      const [totalSupply] = (await contract.methods.totalSupply());
      const supply = totalSupply.toNumber();

      const nftList: string[] = [];

      for (let i = 0; i < supply; i++) {

        const [tokenId] = await contract.methods.tokenByIndex(i);
        const [nft] = await contract.methods.tokenURI(tokenId);
        nftList.push(nft);

      }

      dispatch({ type: Web3ActionType.ContractData, payload: { totalSupply: supply, nftList, }, });

    }

  } catch (error) {

    console.error('[ERROR]', error);

  }

}
