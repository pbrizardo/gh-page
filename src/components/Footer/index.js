import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function Footer() {

  const styles = useStyles();

  return (
    <Container>
      <Box padding="0 16px" className={styles.footerContainer}>
        <Typography className={styles.footerText} variant="h6">Built with React and deployed on GitHub Pages</Typography>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles({
  footerContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255,255,255,0.8)',
    fontWeight: 'lighter',
  }
});