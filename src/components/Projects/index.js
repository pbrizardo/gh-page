import React from 'react';
import { Parallax } from 'react-parallax';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { Element } from 'react-scroll';

export default function Projects() {
  return (
    <Element name="projects">
      <Parallax bgImage={require('../../assets/images/blizzcon_bg.jpg')} strength={700} >
        <div style={{ height: '550px' }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100%', padding: '16px' }}
          >
            <Typography variant="h1">Projects</Typography>
          </Box>
        </div>
      </Parallax>
    </Element>
  )
}

