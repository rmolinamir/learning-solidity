import { Popover } from '@headlessui/react'
import ThemeDropdown from '../../components/theme/ThemeDropdown';
import Connect from '../../components/web3/Connect';
import logo from '../../img/svg/logo.svg';
import MobilePanel from './MobilePanel';

export default function Navbar() {
  return (
    <header className='max-w-7xl mx-auto px-4 sm:px-6'>
      <nav className='leading-6 font-semibold flex justify-between items-center py-3 md:justify-start md:space-x-10'>

        <Navbar.Items />

        <div className='flex justify-start'>
          <Navbar.Logo />
        </div>

        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <Connect />
        </div>

        <div className='-mr-2 -my-2 md:hidden'>
          <MobilePanel.PopoverButton />
        </div>

      </nav>
    </header>
  );
}


Navbar.Logo = function() {
  return (
    <span>
      <span className='sr-only'>DeBay</span>
      <img
        className='h-12 w-auto sm:h-12'
        src={logo}
        alt=''
      />
    </span>
  );
}

Navbar.Items = function() {
  return (
    <Popover.Group as='nav' className='hidden md:flex md:w-0 md:flex-1 space-x-10 items-center'>

      <ThemeDropdown
        className='hover:text-primary rounded-md px-0 py-0'
        openClassName='text-primary'
      />

    </Popover.Group>
  );
}
