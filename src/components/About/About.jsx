import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  about__grid: {
    marginTop: 50,
    marginBottom: 50,
    "@media (max-width: 1280px)": {
      marginTop: 30,
    },
  },
  aboutimage: {
    width: "400px",
    objectFit: "contain",
    "@media (max-width: 600px)": {
      marginLeft: "10px",
      width: "300px",
      marginTop: 40,
    },
  },
  about__header: {
    fontWeight: 700,
  },
  border: {
    backgroundColor: "#F8B630",
    height: 3,
    width: 120,
    borderRadius: 3,
    marginBottom: 35,
    marginTop: 10,
    "@media (max-width: 960px)": {
      width: 50,
    },
  },
  about__text: {
    lineHeight: 2,
  },
});

function About() {
  const classes = useStyles();
  const people = require("./people.png");
  return (
    <div>
      <Typography align="center" variant="h6">
        ABOUT US
      </Typography>
      <Grid container className={classes.about__grid}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.about__header} variant="h3">
            Our Story
          </Typography>
          <div className={classes.border}></div>
          <Typography pr={5} className={classes.about__text} variant="p">
            As all things do, it started as an idea. We are a team of experts
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={people} alt="" className={classes.aboutimage} />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
