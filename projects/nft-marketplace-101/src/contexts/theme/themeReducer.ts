import { Theme } from './Theme';

export type ThemeAction = { type: 'dark' | 'light' | 'system' | 'toggle'; };
export type ThemeDispatch = (action: ThemeAction) => void;
export type ThemeState = { theme: Theme; }

export function themeReducer(state: ThemeState, action: ThemeAction) {

  switch (action.type) {

    case 'dark': return { theme: Theme.Dark };
    case 'light': return { theme: Theme.Light };
    case 'system': return { theme: Theme.System };
    case 'toggle': return { theme: state.theme === Theme.Dark ? Theme.Light : Theme.Dark };
    default: throw new Error(`Unhandled action type: [${JSON.stringify(action)}].`);

  }

}
