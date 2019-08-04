import React from 'react';
import { Box, Container, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function Footer() {

  const styles = useStyles();

  return (
    <Container className={styles.footerContainer}>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <List>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
        </List>
        <List>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
        </List>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles({
  footerContainer: {
    backgroundColor: 'black'
  }
});