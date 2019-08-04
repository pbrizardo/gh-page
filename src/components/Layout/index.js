import React, { Fragment } from 'react';
import Main from '../Main';
import About from '../About';
import Projects from '../Projects';

export default function Home() {
  return (
    <Fragment>
      <Main />
      <About /> 
      <Projects /> 
    </Fragment>
  )
}

