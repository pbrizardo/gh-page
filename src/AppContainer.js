import React from 'react';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function AppContainer() {
  return (
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  )
}