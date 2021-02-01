import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

interface ThemeContextProps {
  themeState: boolean;
  theme: ThemeProps;
  changeTheme(): void;
}

interface ThemeProps {
  [key: string]: string;
}

const light = {
  background: '#eeeeee',
  featured: '#f4a261',
  text: '#222831',
  link: '#f4a261',
  linkHover: '#e76f51',
  gray: '#151E28',
};

const dark = {
  background: '#222831',
  featured: '#30475e',
  text: '#dddddd',
  link: '#30475e',
  linkHover: '#D7431D',
  gray: '#151E28',
};

/** criação do contexto */
const ThemeSwitcherContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider: React.FC = ({ children }) => {
  /** estado que controla qual tema está ativo: light ou dark */
  /** true = dark, false = light */
  const [themeState, setThemeState] = useState(() => {
    const themeFromLocalStorage = localStorage.getItem('@ThemeSwitcher:theme');

    if (themeFromLocalStorage) {
      if (JSON.parse(themeFromLocalStorage) === true) {
        return true;
      }
    }

    return false;
  });

  /** objeto que contém os valores dos temas */
  const theme = {} as ThemeProps;

  if (!themeState) {
    Object.assign(theme, light);
  } else {
    Object.assign(theme, dark);
  }

  const getThemeFromLocalStorage = () => {
    const themeFromLocalStorage = localStorage.getItem('@ThemeSwitcher:theme');

    if (themeFromLocalStorage) {
      if (JSON.parse(themeFromLocalStorage) === true) {
        setThemeState(true);
        return;
      }
    }

    setThemeState(false);
  };

  const changeTheme = () => {
    setThemeState(!themeState);
  };

  useEffect(() => {
    getThemeFromLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('@ThemeSwitcher:theme', JSON.stringify(themeState));
  }, [themeState]);

  return (
    <ThemeSwitcherContext.Provider value={{ themeState, theme, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeSwitcherContext);

  if (!context)
    throw new Error('useTheme must be used inside an ThemeProvider');

  return context;
};

export default ThemeSwitcherContext;
