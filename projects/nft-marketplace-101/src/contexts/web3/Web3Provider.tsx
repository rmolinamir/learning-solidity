import React from 'react';
import { getContractData } from '../../web3/commands/getContractData';
import { loadContract } from '../../web3/commands/loadContract';
import { onAccountChangeListener } from '../../web3/commands/onAccountChangeListener';
import { onDisconnectListener } from '../../web3/commands/onDisconnectListener';
import { reconnect } from '../../web3/commands/reconnect';
import { Web3Context } from './Web3Context';
import { web3Reducer, Web3State } from './web3Reducer';

type Web3ProviderProps = { children: React.ReactNode };

export function Web3Provider({ children }: Web3ProviderProps): JSX.Element {

  const [state, dispatch] = React.useReducer(
    web3Reducer,
    {
      connectedAccount: null,
      contract: null,
      totalSupply: null,
      nftList: null,
    } as Web3State,
  );

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };

  React.useEffect(() => {
    reconnect(dispatch);
  }, [dispatch]);

  React.useEffect(() => {
    if (state.connectedAccount && !state.contract) loadContract(dispatch);
    else if (state.connectedAccount && state.contract) getContractData(dispatch, state.contract);
  }, [dispatch, state.connectedAccount, state.contract]);

  React.useEffect(() => {
    onAccountChangeListener(dispatch, state.connectedAccount);
  }, [dispatch, state.connectedAccount]);

  React.useEffect(() => {
    onDisconnectListener(dispatch);
  }, [dispatch]);

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );

};
