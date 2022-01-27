import React from 'react';
import { ThemeDispatch, ThemeState } from './themeReducer';

export type ThemeContextValue = { state: ThemeState; dispatch: ThemeDispatch };

export const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);
