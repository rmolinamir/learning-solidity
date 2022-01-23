import React from 'react';
import { useAsyncCallback } from 'react-async-hook';
import { useWeb3 } from '../../contexts/web3/useWeb3';
import { classNames } from '../../utils/classNames';
import { formatEthereumAddress } from '../../utils/formatEthereumAddress';
import { truncateEthereumAddress } from '../../utils/truncateEthereumAddress';
import { connect } from '../../web3/commands/connect';

type ConnectProps = { children?: React.ReactNode; };

export default function Connect({ children = 'Connect' }: ConnectProps) {

  const { state, dispatch } = useWeb3();

  async function onClickHandler() {
    await connect(dispatch);
  }
  
  const asyncOnClick = useAsyncCallback(onClickHandler);

  if (!state.connectedAccount) {
    return (
      <button
        onClick={asyncOnClick.execute}
        disabled={asyncOnClick.loading}
        className={classNames(
          'w-34 btn btn-primary',
          asyncOnClick.loading ? 'loading' : '',
        )}
      >
        {children}
      </button>
    );
  }

  return (
    <button className='w-34 btn btn-secondary'>
      <div className='truncate ...'>
        {truncateEthereumAddress(formatEthereumAddress(state.connectedAccount))}
      </div>
    </button>
  );

}
