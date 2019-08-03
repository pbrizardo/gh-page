import React, { Fragment } from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Container, Box, makeStyles } from '@material-ui/core';
import { Link, Element, Events, animateScroll, scroller } from 'react-scroll';

export default function Home() {

  return (
    <Fragment>
      <Parallax bgImage={require('../../assets/images/beach_bg.jpg')} strength={700} >
        <div style={{ height: '550px' }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100%', padding: '16px' }}
          >
            <Typography variant="h1">Welcome son</Typography>
            <ul>
              <li><Link to="section1" spy={true} smooth={true} duration={500}>Section 1</Link></li>
            </ul>
          </Box>
        </div>
      </Parallax>
      <Parallax bgImage={require('../../assets/images/blizzcon_bg.jpg')} strength={700} >
        <div style={{ height: '550px' }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100%', padding: '16px' }}
          >
            <Typography variant="h1">Blizzcon</Typography>
          </Box>
        </div>
      </Parallax>
      <div style={styles.summary}>
        <Container>
          Its pretty much my site now
        </Container>
      </div>
      <div style={{ height: '500px' }}>
      </div>
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
