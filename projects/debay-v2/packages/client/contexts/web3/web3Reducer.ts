import assert from 'assert';
import { Action } from '../common/Action';
import { NftMarketplaceContract } from './NftMarketplaceContract';
import { Web3ActionType } from './Web3ActionType';

type ConnectWeb3Action = Action<Web3ActionType.Connect, { address: string }>;
type DisconnectWeb3Action = Action<Web3ActionType.Disconnect, null>;
type LoadContractWeb3Action = Action<Web3ActionType.LoadContract, { contract: NftMarketplaceContract }>;
type ContractDataWeb3Action = Action<Web3ActionType.ContractData, { totalSupply: number, nftList: string[] }>;
type TotalSupplyWeb3Action = Action<Web3ActionType.TotalSupply, { totalSupply: number }>;
type MintWeb3Action = Action<Web3ActionType.Mint, { nft: string }>;

export type Web3Action =
  ConnectWeb3Action
  | DisconnectWeb3Action
  | LoadContractWeb3Action
  | ContractDataWeb3Action
  | TotalSupplyWeb3Action
  | MintWeb3Action;

export type Web3Dispatch = (action: Web3Action) => void;

export type Web3State = {
  connectedAccount: string | null;
  contract: NftMarketplaceContract | null;
  totalSupply: number | null;
  nftList: string[] | null;
};

export function web3Reducer(state: Web3State, action: Web3Action): Web3State {

  const newState = { ...state, };

  switch (action.type) {

    case Web3ActionType.Connect: {
      newState.connectedAccount = action.payload.address;
      break;
    }

    case Web3ActionType.Disconnect: {
      newState.connectedAccount = null;
      break;
    }

    case Web3ActionType.LoadContract: {
      newState.contract = action.payload.contract;
      break;
    }

    case Web3ActionType.ContractData: {
      newState.totalSupply = action.payload.totalSupply;
      newState.nftList = action.payload.nftList;
      break;
    }

    case Web3ActionType.TotalSupply: {
      newState.totalSupply = action.payload.totalSupply;
      break;
    }

    case Web3ActionType.Mint: {
      assert(newState.nftList !== null && newState.totalSupply !== null, 'Cannot mint without contract data.');
      // NOTE: Might need to create a new Array.
      newState.nftList.push(action.payload.nft); 
      newState.totalSupply += 1;
      break;
    }

    default: throw new Error(`Unhandled action type: [${JSON.stringify(action)}].`);

  }

  console.info('[INFO] ethereumService.state: ', newState);

  return newState;

}
