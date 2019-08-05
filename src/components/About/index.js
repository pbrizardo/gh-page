import React from 'react';
import { Parallax } from 'react-parallax';
import { Typography } from '@material-ui/core';
import { Slide } from 'react-reveal';
import { makeStyles } from '@material-ui/styles';
import { Element } from 'react-scroll';

export default function About() {

  const styles = useStyles();

  return (
    <Element name="aboutme">
      <Parallax bgImage={require('../../assets/images/bigotree_bg.jpg')} strength={700} >
        <div style={{ height: '550px' }}>
          <Slide left>
            <Typography className={styles.title} variant="h1">My Profile</Typography>
          </Slide>
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
    color: 'rgba(0,0,0,0.8)',
    fontFamily: 'Kaushan Script'
  },
})


