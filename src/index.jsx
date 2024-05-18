// client/src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';

const theme = {
  // Define your theme properties here
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
