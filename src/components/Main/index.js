import React from 'react';
import { Parallax } from 'react-parallax';
import Box from '@material-ui/core/Box';
import { Typography, makeStyles } from '@material-ui/core';
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

          <Typography variant="h1">Welcome son</Typography>
          <ul style={styles.mainNav}>
            <li><Face /></li>
            <li><Build /></li>
            <li></li>
          </ul>
          <ul>
            <li><Link to="section1" spy={true} smooth={true} duration={500}>Section 1</Link></li>
          </ul>
        </Box>
      </div>
    </Parallax>
  )
}

const useStyles = makeStyles({
  mainNav: {
    display: 'flex',
    flexDirection: 'row' 
  }
});