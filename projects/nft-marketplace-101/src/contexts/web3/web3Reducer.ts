import { Action } from '../common/Action';
import { Web3ActionType } from './Web3ActionType';

type ConnectWeb3Action = Action<Web3ActionType.Connect, { address: string }>;
type DisconnectWeb3Action = Action<Web3ActionType.Disconnect, null>;

export type Web3Action = ConnectWeb3Action | DisconnectWeb3Action;
export type Web3Dispatch = (action: Web3Action) => void;
export type Web3State = {
  connectedAccount: string | null;
};

export function web3Reducer(state: Web3State, action: Web3Action): Web3State {

  const newState = { ...state };

  switch (action.type) {

    case Web3ActionType.Connect: {
      newState.connectedAccount = action.payload.address;
      break;
    }

    case Web3ActionType.Disconnect: {
      newState.connectedAccount = null;
      break;
    }

    default: throw new Error(`Unhandled action type: [${JSON.stringify(action)}].`);

  }

  return newState;

}
