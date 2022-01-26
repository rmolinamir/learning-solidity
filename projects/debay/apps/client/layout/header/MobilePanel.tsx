import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../../public/assets/debay/logo.svg';
import { resources, solutions } from './meta';

export default function MobilePanel() {
  return (
    <Transition
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Popover.Panel focus className='backdrop-blur bg-neutral-content/90 absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>

        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-neutral/10'>

          <div className='pt-5 pb-6 px-5'>

            <div className='flex items-center justify-between'>

              <MobilePanel.Logo />

              <div className='-mr-2'>
                <MobilePanel.Close />
              </div>

            </div>

            <div className='mt-6'>
              <MobilePanel.Solutions />
            </div>

          </div>

          <div className='py-6 px-5 space-y-6'>
            <MobilePanel.Resources />
          </div>

          <div className='py-6 px-5 space-y-6'>
            <MobilePanel.Connect />
          </div>

        </div>

      </Popover.Panel>
    </Transition>
  );
}

MobilePanel.Logo = function MobilePanelLogo() {

  return (
    <div>
      <img
        className='h-14 w-auto'
        src={logo.src}
        alt='DeBay'
      />
    </div>
  );

};

MobilePanel.Close = function MobilePanelClose() {

  return (
    <Popover.Button className='rounded-md bg-base-200 p-2 inline-flex items-center justify-center hover-text-primary hover:bg-base-100 !outline-none'>
      <span className='sr-only'>Close menu</span>
      <XIcon className='h-6 w-6' aria-hidden='true' />
    </Popover.Button>
  );

};

MobilePanel.Solutions = function MobilePanelSolutions() {

  return (
    <nav className='grid gap-y-8'>
      {solutions.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className='-m-3 p-3 flex items-center rounded-md hover:bg-base-200'
        >
          <item.icon className='flex-shrink-0 h-6 w-6 text-primary' aria-hidden='true' />
          <span className='ml-3 text-base font-medium'>{item.name}</span>
        </a>
      ))}
    </nav>
  );

};

MobilePanel.Resources = function MobilePanelResources() {
  return (
    <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
      {resources.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className='text-base font-medium hover:text-primary'
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

MobilePanel.Connect = function MobilePanelConnect() {

  return (
    <div className='btn btn-primary flex tems-center justify-center'>
        Connect
    </div>
  );

};

MobilePanel.PopoverButton = function MobilePanelPopoverButton() {

  return (
    <Popover.Button className='rounded-md bg-transparent hover:bg-base-200 p-2 inline-flex items-center justify-center text-base-content hover-text-primary !outline-none'>
      <span className='sr-only'>Open menu</span>
      <MenuIcon className='h-6 w-6' aria-hidden='true' />
    </Popover.Button>
  );

};
