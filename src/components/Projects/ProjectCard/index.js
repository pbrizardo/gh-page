import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';

export default function ProjectCard(props) {

  const { title, description, link, linkText } = props;


  return (
    <Card>
      <CardContent>
        <Typography
          color="textSecondary"
          gutterBottom
        >
          {title}
      </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography variant="body2" component="p">
          {description}
      </Typography>
      </CardContent>
      <CardActions>
        <Button target="_blank" href={link}size="small">
          {linkText}
        </Button>
      </CardActions>
    </Card>
  )
}