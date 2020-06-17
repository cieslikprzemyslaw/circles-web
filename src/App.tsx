import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import LitteraProvider from "react-littera";
import { HashRouter as Router } from "react-router-dom";
import Routes from './Routes';
import theme from "./theme";
import { useLocale } from './utils/hooks/locale';
import StoreProvider from 'store/StoreProvider';

function App() {
  const [language, setLanguage, preset] = useLocale();

  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <LitteraProvider language={language} setLanguage={setLanguage} preset={preset}>
          <Router basename={process.env?.REACT_APP_BASENAME ?? "/"}>
            <Routes />
          </Router>
        </LitteraProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
