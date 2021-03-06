import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  about__grid: {
    marginTop: theme.spacing(7),
    marginBottom: 50,
    "@media (max-width: 1280px)": {
      marginTop: 30,
    },
    "@media (max-width: 600px)": {
      paddingLeft: theme.spacing(1),
    },
  },
  aboutimage: {
    width: "100%",
    objectFit: "contain",
    "@media (max-width: 600px)": {
      width: "100%",
      marginTop: 40,
    },
  },
  about__header: {
    //fontWeight: 700,
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
}));

function About() {
  const classes = useStyles();
  const people = require("./people.png");
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: 10 }} data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
        <Typography style={{ textAlign: 'center' }} variant='caption'>BUILD WITH THE RIGHT TEAM!</Typography>
      </Grid>
      <Grid container direction="row" justify="space-between" alignItems="center" className={classes.about__grid} data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
        <Grid item xs={12} sm={6} data-aos="fade-up"
          data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
          <Typography className={classes.about__header} variant="h3">
            Our Story
          </Typography>
          <div className={classes.border}></div>
          <Typography pr={7} className={classes.about__text} variant="body2">
          As all great things do, it started as a thought; and great thoughts, as we know, have the ability to spark, move, and alter the world as we know it. This is what N&S Tech is here to do. Right at the heart of our firm, is the desire to build a community with the right people, highly skilled individuals of varying race, gender, nationality and background, to get the work done.

         <br /><br /> We started N&S Tech to change the present ???tech culture???, establishing integrity, diligence, discipline and innovation in a fast-changing world. With N&S Tech, all projects are completed with the best business practices, ensuring you get just the right amount of satisfaction from your projects.

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
