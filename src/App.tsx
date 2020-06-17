import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import LitteraProvider from "react-littera";
import { BrowserRouter as Router } from "react-router-dom";
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
          <Router basename="/circles-web">
            <Routes />
          </Router>
        </LitteraProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
