import React from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeStorage } from './ThemeStorage';
import { themeReducer } from './themeReducer';
import { Theme } from './Theme';

type ThemeProviderProps = { children: React.ReactNode };

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {

  const themeProviderRef = React.useRef<HTMLDivElement>(null);

  const { current: themeStorage } = React.useRef(new ThemeStorage());

  const [state, dispatch] = React.useReducer(themeReducer, { theme: themeStorage.get() });

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };

  React.useEffect(() => {

    themeStorage.store(state.theme);

    if (themeProviderRef.current) {

      const root = themeProviderRef.current;
      const dataTheme = state.theme === Theme.System
        ? ThemeStorage.computeSystemTheme()
        : state.theme
      root.setAttribute('data-theme', dataTheme);

    }

  }, [themeStorage, state.theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div ref={themeProviderRef}>
        {children}
      </div>
    </ThemeContext.Provider>
  );

};
