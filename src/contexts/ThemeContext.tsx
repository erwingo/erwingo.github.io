'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';

type Theme = 'dark' | 'light' | 'device';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

export interface Props {
  children: ReactNode;
}

export function ThemeContextProvider(props: Props) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  function getInitialTheme(): Theme {
    const initialTheme = (global as any)?.globalGetInitialTheme?.() || 'device';

    if (initialTheme === 'dark') (global as any)?.globalSetDarkTheme?.();
    else if (initialTheme === 'light') (global as any)?.globalSetLightTheme?.();
    else (global as any)?.globalSetDeviceTheme?.();

    return initialTheme;
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('device');
      (global as any).globalSetLSDeviceTheme?.();
    } else if (theme === 'device') {
      setTheme('light');
      (global as any).globalSetLSLightTheme?.();
    } else {
      setTheme('dark');
      (global as any).globalSetLSDarkTheme?.();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('This hook should be used inside a ThemeContext.Provider');
  }

  return context;
}
