import React, { Fragment } from 'react';
import Main from '../Main';
import About from '../About';
import Projects from '../Projects';
import Footer from '../Footer';

export default function Home() {
  return (
    <Fragment>
      <Main />
      <About /> 
      <Projects /> 
      <Footer />
    </Fragment>
  )
}

