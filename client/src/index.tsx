import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { configureBaseStore } from './store/store';
import DynamicThemeProvider from './hoc/DynamicThemeProvider';

configureBaseStore();

ReactDOM.render(
  <React.StrictMode>
    <DynamicThemeProvider>
      <CssBaseline />
      <App />
    </DynamicThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
