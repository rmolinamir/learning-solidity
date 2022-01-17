import React from 'react';
import { onAccountChangeHandler } from '../../web3/commands/onAccountChangeHandler';
import { onDisconnectHandler } from '../../web3/commands/onDisconnectHandler';
import { reconnect } from '../../web3/commands/reconnect';
import { Web3Context } from './Web3Context';
import { web3Reducer } from './web3Reducer';

type Web3ProviderProps = { children: React.ReactNode };

export function Web3Provider({ children }: Web3ProviderProps): JSX.Element {

  const [state, dispatch] = React.useReducer(web3Reducer, { connectedAccount: null });

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };

  React.useEffect(() => {
    reconnect(dispatch);
  }, [dispatch]);

  React.useEffect(() => {
    onAccountChangeHandler(dispatch, state.connectedAccount);
  }, [dispatch, state.connectedAccount]);

  React.useEffect(() => {
    onDisconnectHandler(dispatch);
  }, [dispatch]);

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );

};
