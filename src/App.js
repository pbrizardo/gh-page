import React from 'react';
import Header from './components/Header';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <div className="section">
        <p>
          Whatiever you want i have something for that
        </p>
      </div>
    </div>
  )
}
