import React from 'react';
import { Parallax } from 'react-parallax';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-scroll';
import { Face, Build } from '@material-ui/icons';

export default function Main() {

  const styles = useStyles();

  return (
    <Parallax bgImage={require('../../assets/images/beach_bg.jpg')} strength={700} >
      <div style={{ height: '550px' }}>
        <Box
          display="flex" 
          justifyContent="center"
          alignItems="center"
          style={{ height: '100%', padding: '16px' }}
        >
          <ul className={styles.navigation}>
            <li className={styles.navItems}>
              <Link className={styles.navLink} to="aboutme" spy={true} smooth={true} duration={500}>
                <Face className={styles.navIcon} />
              </Link>
            </li>
            <li className={styles.navItems}>
              <Link className={styles.navLink} to="projects" spy={true} smooth={true} duration={500}>
                <Build className={styles.navIcon} />
              </Link>
            </li>
          </ul>
        </Box>
      </div>
    </Parallax>
  )
}

const useStyles = makeStyles({
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

    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.8)',
    }
  },
  navIcon: {
    fontSize: '88px',
  }

});