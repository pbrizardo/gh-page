import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles, Typography, Container, Grid } from '@material-ui/core';
import { Face, Build } from '@material-ui/icons';

import { Element, Link } from 'react-scroll';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import useCommonStyles from '../../styles/common';

export default function Main() {

  const styles = {
    ...useStyles(),
    ...useCommonStyles()
  }
  
  return (
    <Element name="intronav">
      <Container className={styles.container}>
        <Slide left>
          <Box className={styles.titleContainer}>
            <Typography className={styles.titleLight} variant="h3">Paul Rizardo</Typography>
            <Typography className={styles.title} variant="h3">Front End Developer</Typography>
          </Box>
        </Slide>
        <Fade delay={700}>
          <Grid container>
            <Grid item xs={6} style={{textAlign: 'center'}}>
              <Link className={styles.navLink} to="projects" spy={true} smooth={true} duration={500}>
                <Build className={styles.navIcon} />
              </Link>
              <Typography className={styles.navLinkText} variant="h3">Projects</Typography>
            </Grid>
            <Grid item xs={6} style={{textAlign: 'center'}}>
              <Link className={styles.navLink} to="aboutme" spy={true} smooth={true} duration={500}>
                <Face className={styles.navIcon} />
              </Link>
              <Typography className={styles.navLinkText} variant="h3">About Me</Typography>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Element>
  )
}

const useStyles = makeStyles({
  slide: {
    display: 'inline-block',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row', 
    listStyle: 'none',
  },
  navItems: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  navLink: {
    display: 'inline-block',
    color: 'white',
    borderRadius: 5,
    border: '2px solid white',
    padding: '16px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0.5)',
    transition: 'background-color 0.5s',

    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.8)',
    },

    '&:hover + h3': {
      opacity: 1
    }
  },
  navLinkText: {
    opacity: 0,
    color: 'white',
    position: 'absolute',
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '24px',
    fontWeight: 'lighter',
    transition: 'opacity 0.5s',
  },
  navIcon: {
    fontSize: '88px',
  }

});