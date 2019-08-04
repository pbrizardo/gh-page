import React from 'react';
import { Parallax } from 'react-parallax';
import Box from '@material-ui/core/Box';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Element, Link } from 'react-scroll';
import { Face, Build } from '@material-ui/icons';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function Main() {

  const styles = useStyles();

  return (
    <Element name="intronav">
      <Parallax bgImage={require('../../assets/images/beach_bg.jpg')} strength={700} >
        <div style={{ height: '550px' }}>
          <Container>
            <Slide left>
              <Typography className={styles.title} variant="h2">Paul Rizardo</Typography>
            </Slide>
          </Container>
          <Box
            display="flex" 
            justifyContent="center"
            alignItems="center"
            style={{ height: '100%', padding: '16px' }}
          >
            <Fade delay={700}>
              <ul className={styles.navigation}>
                <li className={styles.navItems}>
                  <Link className={styles.navLink} to="projects" spy={true} smooth={true} duration={500}>
                    <Build className={styles.navIcon} />
                  </Link>
                </li>
                <li className={styles.navItems}>
                  <Link className={styles.navLink} to="aboutme" spy={true} smooth={true} duration={500}>
                    <Face className={styles.navIcon} />
                  </Link>
                </li>
              </ul>
            </Fade>
          </Box>
        </div>
      </Parallax>
    </Element>
  )
}

const useStyles = makeStyles({
  title: {
    position: 'absolute',
    top: '64px',
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
    }
  },
  navIcon: {
    fontSize: '88px',
  }

});