import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import App  from './App';
import './App.css';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontColor: 'white',
    }
  }
});

export default function AppContainer() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}