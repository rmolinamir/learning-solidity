import { Theme } from './Theme';

export class ThemeStorage {

  private defaultTheme: Theme;

  constructor(defaultTheme: Theme = ThemeStorage.computeSystemTheme()) {
    this.defaultTheme = defaultTheme;
  }

  public get(): Theme {

    if (!ThemeStorage.isLocalStorageSupported()) return this.defaultTheme;

    const locallyStoredTheme = ThemeStorage.getLocallyStoredTheme();

    if (locallyStoredTheme) return locallyStoredTheme;
    else return this.defaultTheme;

  }

  public store(theme: Theme): void {

    if (!ThemeStorage.isLocalStorageSupported()) return;

    localStorage.setItem(ThemeStorage.themeLocalStorageKey, theme);

  }

  static computeSystemTheme(): Theme {

    if (!ThemeStorage.isLocalStorageSupported()) return Theme.Light;

    const isSystemDarkThemed = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return isSystemDarkThemed ? Theme.Dark : Theme.Light;

  }

  static getLocallyStoredTheme(): Theme | undefined {

    if (!ThemeStorage.isLocalStorageSupported()) return undefined;

    const storedTheme = window.localStorage.getItem(ThemeStorage.themeLocalStorageKey) as Theme;

    if ([Theme.Dark, Theme.Light].includes(storedTheme)) return storedTheme;
    else return undefined;

  }

  private static isLocalStorageSupported(): boolean {

    return typeof window !== 'undefined' && Boolean(window.localStorage);

  }

  private static themeLocalStorageKey = 'color-theme';

}
