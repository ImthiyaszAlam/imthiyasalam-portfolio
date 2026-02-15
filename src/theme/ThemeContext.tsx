import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Appearance } from 'react-native';
import { darkColors, lightColors, type ColorPalette } from './colors';
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

const getColors = (mode: ThemeMode) => (mode === 'dark' ? darkColors : lightColors);

const defaultMode: ThemeMode = Appearance.getColorScheme?.() === 'dark' ? 'dark' : 'light';

const defaultTheme: Theme = {
  mode: defaultMode,
  colors: getColors(defaultMode),
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
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  const theme = useMemo(
    () => ({
      mode,
      colors: getColors(mode),
      typography,
      spacing,
      shadows,
      radii,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
