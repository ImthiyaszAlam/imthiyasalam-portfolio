import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeMode } from '../../theme';

interface UIStateContextProps {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const UIStateContext = createContext<UIStateContextProps | undefined>(undefined);

export const UIStateProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [activeSection, setActiveSection] = useState<string>('');

  return (
    <UIStateContext.Provider
      value={{ themeMode, setThemeMode, activeSection, setActiveSection }}
    >
      {children}
    </UIStateContext.Provider>
  );
};

export const useUIState = () => {
  const context = useContext(UIStateContext);
  if (!context) {
    throw new Error('useUIState must be used within a UIStateProvider');
  }
  return context;
};
