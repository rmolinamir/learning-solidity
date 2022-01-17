import {
  MoonIcon,
  SunIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline';
import { useTheme } from '../../contexts/theme/useTheme';
import { Theme } from '../../contexts/theme/Theme';
import Dropdown from '../dropdown/Dropdown';
import { ClassName } from '../../common/ClassName';

type ThemeDropdownProps = {
  className?: ClassName;
  openClassName?: ClassName;
};

function ThemeDropdown({ className, openClassName }: ThemeDropdownProps) {

  const { state, dispatch } = useTheme();

  return (
    <Dropdown
      label={<span>Theme</span>}
      className={className}
      openClassName={openClassName}
    >
      <Dropdown.Section>

        <Dropdown.Item
          active={state.theme === Theme.Dark}
          Icon={MoonIcon}
          onClick={() => dispatch({ type: 'dark' })}
        >
          <span className='font-medium'>Dark</span>
        </Dropdown.Item>

        <Dropdown.Item
          active={state.theme === Theme.Light}
          Icon={SunIcon}
          onClick={() => dispatch({ type: 'light' })}
        >
          <span className='font-medium'>Light</span>
        </Dropdown.Item>

        <Dropdown.Item
          active={state.theme === Theme.System}
          Icon={DesktopComputerIcon}
          onClick={() => dispatch({ type: 'system' })}
        >
          <span className='font-medium'>System</span>
        </Dropdown.Item>

      </Dropdown.Section>
    </Dropdown>
  );

};

export default ThemeDropdown;
