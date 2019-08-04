import React from 'react';
import IntroNav from './components/IntroNav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import StickyHeader from './components/StickyHeader';

export default function App() {
  return (
    <div style={{position: 'relative'}}>
      <StickyHeader />
      <IntroNav />
      <Projects /> 
      <About /> 
      <Footer />
    </div>
  )
}
