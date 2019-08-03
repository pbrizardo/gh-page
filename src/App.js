import React from 'react';
import Home from './components/Home';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import './App.css';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontColor: 'white',
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
