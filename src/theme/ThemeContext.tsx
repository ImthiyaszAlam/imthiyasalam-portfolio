import React, { createContext, ReactNode, useContext, useMemo } from 'react';

import { darkColors, type ColorPalette } from './colors';
import { radii, shadows, spacing } from './theme';
import { typography } from './typography';

export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  colors: ColorPalette;
  typography: typeof typography;
  spacing: typeof spacing;
  shadows: typeof shadows;
  radii: typeof radii;
}

const getColors = () => darkColors;

const defaultTheme: Theme = {
  mode: 'dark',
  colors: getColors(),
  typography,
  spacing,
  shadows,
  radii,
};

export const ThemeContext = createContext<{
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
}>({
  theme: defaultTheme,
  setMode: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useMemo(
    () => ({
      mode: 'dark',
      colors: getColors(),
      typography,
      spacing,
      shadows,
      radii,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, setMode: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
