import React from "react";
import { Parallax } from "react-parallax";
import Box from "@material-ui/core/Box";
import { Typography, Card, CardContent, CardActions, Button } from "@material-ui/core";
import { Element } from "react-scroll";

export default function Projects() {
  return (
    <Element name="projects">
      <Parallax
        bgImage={require("../../assets/images/blizzcon_bg.jpg")}
        strength={700}
      >
        <div style={{ height: "550px" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%", padding: "16px" }}
          >
            <Card>
              <CardContent>
                <Typography variant="body2" component="p">
                  Something
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography
                  // className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  be
                  nev
                  lent
                </Typography>
                <Typography 
                  // className={classes.pos} 
                  color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </div>
      </Parallax>
    </Element>
  );
}
