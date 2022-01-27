import React from 'react';
import { Web3Dispatch, Web3State } from './web3Reducer';

export type Web3ContexttValue = { state: Web3State; dispatch: Web3Dispatch };

export const Web3Context = React.createContext<Web3ContexttValue | undefined>(undefined);
