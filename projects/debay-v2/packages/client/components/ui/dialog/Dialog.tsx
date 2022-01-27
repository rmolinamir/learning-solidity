import { Dialog as Modal, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

type DialogProps = { open: boolean; onClose(): void; children: React.ReactNode; locked?: boolean; };

export default function Dialog({ open, onClose, children, locked }: DialogProps) {

  return (

    <Transition appear show={open} as={Fragment}>

      <Modal
        as='div'
        className='fixed inset-0 z-50 overflow-y-auto'
        onClose={onClose}
        static={locked}
      >

        <div className='min-h-screen px-4 text-center'>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Modal.Overlay className='fixed inset-0 bg-neutral-focus opacity-60' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            {children}
          </Transition.Child>

        </div>

      </Modal>

    </Transition>

);

}

Dialog.Title = Modal.Title;

Dialog.Description = Modal.Description;
