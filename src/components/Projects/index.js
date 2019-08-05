import React from "react";
import { Grid, Typography, Box, Button, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { Element } from "react-scroll";
import { Slide } from 'react-reveal';
import ProjectCard from "./ProjectCard";
import useCommonStyles from "../../styles/common";

export default function Projects() {

  const styles = {
    ...useStyles(),
    ...useCommonStyles()
  }

  return (
    <Element name="projects">
      <Container className={styles.container}>
        <Slide left>
          <Box className={styles.titleContainer}>
            <Typography className={styles.titleLight} variant="h3">My</Typography>
            <Typography className={styles.title} variant="h3">Projects</Typography>
          </Box>
        </Slide>
        <Container style={{ marginBottom: '48px' }}>
          <Grid
            container
            direction="row"
            justify="center"
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={3}>
              <ProjectCard
                title="Offer Admin Tool for Toyota"
                description="AngularJS application that administers the authoring of vehicle offers across the nation."
                link="https://www.buyatoyota.com"
                linkText="Visit Site"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <ProjectCard
                title="Payment Estimator Toyota"
                description=" AngularJS application that is design to be iframed into parent sites like (toyota.com/buyatoyota.com)"
                link="https://www.buyatoyota.com/socal/payment-estimator/"
                linkText="Visit Site"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <ProjectCard
                title="Acai & Alchemy"
                description="Squarespace business application for an exciting new Acai bowl place in Willow Springs of Texas."
                link="http://www.acai-alchemy.com"
                linkText="Visit Site"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <ProjectCard
                title="Legion M Film Scout"
                description="React Native application with a auth portal that gives users the power to rate films."
                link="https://legionm.com/scout"
                linkText="Visit Site"
              />
            </Grid>

          </Grid>

          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Button target="_blank" href="https://github.com/pbrizardo" className={styles.githubBtn}>View My GitHub!</Button>
          </Box>
        </Container>
      </Container>
    </Element>
  );
}

const useStyles = makeStyles({
  githubBtn: {
    color: 'white'
  }
})
