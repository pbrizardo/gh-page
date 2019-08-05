import React from 'react';
import IntroNav from './components/IntroNav';
import About from './components/About';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Footer from './components/Footer';
import StickyHeader from './components/StickyHeader';

import { Parallax } from 'react-parallax';

export default function App() {
  return (
    <Parallax bgImage={require('./assets/images/beach_bg.jpg')} strength={1000} >
      <div style={{position: 'relative'}}>
        <StickyHeader />
        <IntroNav />
        <Projects /> 
        <About /> 
        <Photography />
        <Footer />
      </div>
    </Parallax>
  )
}
