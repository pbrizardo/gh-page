import React, { Fragment } from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Container, Box, makeStyles } from '@material-ui/core';
import { Link, Element, Events, animateScroll, scroller } from 'react-scroll';
import Main from '../Main';
import About from '../About';
import Projects from '../Projects';

export default function Home() {

  return (
    <Fragment>
      <Main />
      <About /> 
      <Projects /> 
      <div style={{ height: '500px' }}>
        <Element name="section1">
          <Container>
            Section 1
          </Container>
        </Element>
      </div>
    </Fragment>
  )
}

const styles = makeStyles({
  summary: {
    backgroundColor: 'black',
    height: '500px',
  }
})
