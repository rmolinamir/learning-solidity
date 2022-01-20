import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { classNames } from '../../../utils/classNames';
import { Icon } from '../../../common/Icon';
import { ClassName } from '../../../common/ClassName';

type DropdownProps = {
  children: React.ReactNode;
  label: React.ReactNode;
  className?: ClassName;
  openClassName?: ClassName;
};

export default function Dropdown({
  children,
  label,
  className = 'rounded-md border shadow-sm',
  openClassName = '',
}: DropdownProps) {

  return (
    <Popover as='div' className='relative inline-block text-left'>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              'inline-flex justify-center items-center w-full px-4 py-2 !outline-none',
              className,
              open ? openClassName : '',
            )}
          >
            {label}
            <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Popover.Panel
              className='absolute z-50 bg-base-200 w-56 rounded-md shadow-lg ring-base-content ring-opacity-5 divide-y divide-base-content'
            >
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

type DropdownSectionProps = { children: React.ReactNode };

Dropdown.Section = function({ children }: DropdownSectionProps): JSX.Element {

  return (
    <div className='py-1'>
      {children}
    </div>
  );

}

type DropdownItemProps = {
  children: React.ReactNode;
  active?: boolean;
  Icon?: Icon;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

Dropdown.Item = function({ children, active, Icon, onClick }: DropdownItemProps): JSX.Element {

  return (
    <Popover.Button as='button' className='block w-full'>
      <div
        className={classNames(
          'flex justify-start items-center hover:bg-base-100 text-base-content text-opacity-70 hover:text-opacity-100',
          active ? '!text-primary !text-opacity-100' : ''
        )}
        onClick={onClick}
      >
        {Icon && <Icon className='ml-2 h-5 w-5' aria-hidden='true' />}
        <div
          className='flex-1 px-4 py-2 text-sm text-left'
        >
          {children}
        </div>
      </div>
    </Popover.Button>
  );

}
