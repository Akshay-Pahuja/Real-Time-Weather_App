import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      paper: '#ffffff', 
      default: '#f0f4f7', 
    },
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#ff4081', 
    },
    text: {
      primary: '#212121', 
      secondary: '#ffffff', 
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', 
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
