import React from 'react';
import { Parallax } from 'react-parallax';
import Box from '@material-ui/core/Box';
import { makeStyles, Typography } from '@material-ui/core';
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
          <Slide left>
            <Typography className={styles.title} variant="h1">Paul Rizardo</Typography>
          </Slide>
          <Slide right>
            <Typography className={styles.subTitle} variant="h3">Front End Developer</Typography>
          </Slide>
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
                  <Typography className={styles.navLinkText} variant="h3">Projects</Typography>
                </li>
                <li className={styles.navItems}>
                  <Link className={styles.navLink} to="aboutme" spy={true} smooth={true} duration={500}>
                    <Face className={styles.navIcon} />
                  </Link>
                  <Typography className={styles.navLinkText} variant="h3">About Me</Typography>
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
    top: '48px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.8)',
    fontFamily: 'Kaushan Script'
  },
  subTitle: {
    position: 'absolute',
    top: '144px',
    paddingLeft: '160px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.8)',
    fontFamily: 'Kaushan Script'
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
    fontFamily: 'Kaushan Script',
    paddingTop: '24px',
    transition: 'opacity 0.5s',
  },
  navIcon: {
    fontSize: '88px',
  }

});