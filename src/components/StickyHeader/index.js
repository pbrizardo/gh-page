import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { ListItem, List, Typography } from '@material-ui/core';
import { Home, Face, Build } from '@material-ui/icons';
import { Link } from 'react-scroll';

export default function Header() {

  const styles = useStyles();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  const [ scrollingLock, setScrollingLock ] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 400) {
      setScrollingLock(true);
    } else if (window.scrollY < 400) {
      setScrollingLock(false);
    }
  }

  function HeaderContent() {
    return (
      <header className={styles.header} >
        <List className={styles.nav} >
          <ListItem>
            <Link className={styles.navLink} to="intronav" spy={true} smooth={true} duration={500}>
              <Home />
              <Typography className={styles.navText} variant="h5">Paul Rizardo</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link className={styles.navLink} to="projects" spy={true} smooth={true} duration={500}>
              <Build />
              <Typography className={styles.navText} variant="h5">Projects</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link className={styles.navLink} to="aboutme" spy={true} smooth={true} duration={500}>
              <Face />
              <Typography className={styles.navText} variant="h5">Profile</Typography>
            </Link>
          </ListItem>
        </List>
      </header> 
    )
  }


  return (
    <div className={[styles.stickyContainer, scrollingLock && styles.stickyContainerFixed].join(' ')} >
      <HeaderContent />
    </div>
  )
}

const useStyles = makeStyles({
  stickyContainer: {
    width: '100%',
    position: 'fixed',
    opacity: 0,
    transition: 'opacity 0.3s ease-out',
    zIndex: 2,
  },
  stickyContainerFixed: {
    top: 0,
    opacity: 1,
  },
  header: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'block',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row'
  },
  navLink: {
    cursor: 'pointer',
  },
  navText: {
    display: 'inline-block',
    fontFamily: 'Kaushan Script',
    marginLeft: '16px',
  }
})