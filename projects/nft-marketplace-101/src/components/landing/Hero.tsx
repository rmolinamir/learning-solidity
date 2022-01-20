import assert from 'assert';
import React from 'react';
import { useAsyncCallback } from 'react-async-hook';
import { useWeb3 } from '../../contexts/web3/useWeb3';
import { classNames } from '../../utils/classNames';
import { mint } from '../../web3/commands/mint';
import Dialog from '../ui/dialog/Dialog';
import FileInput from '../ui/input/FileInput';

export default function Hero() {

  const { state, dispatch } = useWeb3();

  let [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const asyncOnSubmit = useAsyncCallback(async function(event: React.FormEvent<HTMLFormElement>): Promise<void> {

    event.preventDefault();

    const data = { nft: '' };

    const form = event.target as HTMLFormElement;

    for (const formElement of Object.values(form.elements)) {

      if (formElement instanceof HTMLInputElement) {
        const input = formElement;
        data.nft = input.value;
      }

    }

    assert(data.nft, 'Cannot mint an empty NFT');

    await mint(dispatch, state, data.nft);

    closeModal();

  });

  return (

    <>

      <section className='w-full mx-auto md:w-11/12 text-center'>

        <h1 className='mb-9 text-4xl font-extrabold leading-snug tracking-normal text-base-content md:text-6xl md:tracking-tight'>
          A decentralized <span className='block w-full text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent lg:inline'>shopping experience</span> for your favorite collectibles.
        </h1>

        <p className='px-0 mb-9 text-lg text-base-content/50 md:text-xl lg:px-24'>
          Searching and buying cryptocollectibles is fast and straightforward. With the Decentralized Asset Exchange you can define your own transaction rules, network fees, gas costs, and governance policies.
        </p>

        <div className='mb-4 space-x-1 md:space-x-2 md:mb-8'>

          {/* <button className='capitalize inline-flex items-center justify-center mb-2 btn btn-primary btn-lg !min-h-min !h-14 !w-40 !sm:w-auto border-2 !border-base-content/20 sm:mb-0'>
            Browse
          </button> */}

          <button
            className='capitalize inline-flex items-center justify-center mb-2 btn btn-accent btn-lg !min-h-min !h-14 !w-40 !sm:w-auto border-2 !border-base-content/20 sm:mb-0'
            onClick={openModal}
          >
            Mint
          </button>

        </div>

      </section>

      <Dialog
        open={isOpen}
        locked={asyncOnSubmit.loading}
        onClose={closeModal}
      >

        <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-neutral-content shadow-xl shadow-base-300 rounded-2xl'>

          <form onSubmit={asyncOnSubmit.execute}>

            <FileInput className='mb-6 w-full' />

            <button
              type='submit'
              disabled={asyncOnSubmit.loading}
              className={classNames(
                'btn btn-block btn-primary btn-outline',
                asyncOnSubmit.loading ? 'loading cursor:not-allowed' : '',
              )}
            >
              Submit
            </button>

          </form>

        </div>

      </Dialog>
    
    </>

  );


}
