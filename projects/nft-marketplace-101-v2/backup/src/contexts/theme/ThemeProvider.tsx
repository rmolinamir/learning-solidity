import React from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeStorage } from './ThemeStorage';
import { themeReducer } from './themeReducer';
import { Theme } from './Theme';

type ThemeProviderProps = { children: React.ReactNode, root: boolean };

export function ThemeProvider({ children, root }: ThemeProviderProps): JSX.Element {

  const providerWrapperRef = React.useRef<HTMLDivElement>(null);

  const { current: themeStorage } = React.useRef(new ThemeStorage());

  const [state, dispatch] = React.useReducer(themeReducer, { theme: themeStorage.get() });

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };

  React.useEffect(() => {

    themeStorage.store(state.theme);

    if (providerWrapperRef.current) {

      const providerWrapper = root
        ? providerWrapperRef.current
        : document.body;

      const dataTheme = state.theme === Theme.System
        ? ThemeStorage.computeSystemTheme()
        : state.theme;

      providerWrapper.setAttribute('data-theme', dataTheme);

    }

  }, [themeStorage, state.theme, root]);

  return (
    <ThemeContext.Provider value={value}>
      <div ref={providerWrapperRef}>
        {children}
      </div>
    </ThemeContext.Provider>
  );

};
