import React from 'react';
import { ThemeContext, ThemeContextValue } from './ThemeContext';

export function useTheme(): ThemeContextValue {

  const context = React.useContext(ThemeContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider.');

  return context;

}
