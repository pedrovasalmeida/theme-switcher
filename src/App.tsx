/** Packages */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/** Components */
import Routes from './routes';
import { ThemeContextProvider } from './context/ThemeSwitcherContext';

/** Global Styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyles />

      <Router>
        <Routes />
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
