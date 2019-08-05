import React from 'react';

import { Box, Typography, Container } from '@material-ui/core';

import { Slide } from 'react-reveal';
import { Element } from 'react-scroll';
import useCommonStyles from '../../styles/common';
import { makeStyles } from '@material-ui/styles';

export default function About() {

  const styles = {
    ...useStyles(),
    ...useCommonStyles()
  }

  return (
    <Element name="aboutme">
      <Container className={styles.container}>
        <Slide left>
          <Box className={styles.titleContainer}>
            <Typography className={styles.titleLight} variant="h3">About </Typography>
            <Typography className={styles.title} variant="h3">Me</Typography>
          </Box>
        </Slide>
        <Box className={styles.aboutContent}>
          <Typography className={styles.aboutText} variant="h6">
            Hi there! I'm a Cal Poly Pomona 2013 graduate with a BS degree in Computer Science. 
          </Typography>
        </Box>
      </Container>
    </Element>
  )
}

const useStyles = makeStyles({
  aboutContent: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.8)'
  },
  aboutText: {
    fontWeight: 'lighter'
  }
})

