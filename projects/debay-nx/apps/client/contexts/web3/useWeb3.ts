import React from 'react'
import { Web3Context, Web3ContexttValue } from './Web3Context'

export function useWeb3(): Web3ContexttValue {

  const context = React.useContext(Web3Context);

  if (context === undefined) throw new Error('useWeb3 must be used within a Web3Provider');

  return context;

}
