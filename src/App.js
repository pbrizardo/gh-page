import React, { Fragment } from 'react';
import IntroNav from './components/IntroNav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <Fragment>
      <IntroNav />
      <About /> 
      <Projects /> 
      <Footer />
    </Fragment>
  )
}
