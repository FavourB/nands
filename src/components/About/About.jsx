import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  about__grid: {
    marginTop: 80,
    "@media (max-width: 1280px)": {
      marginTop: 40,
    },
  },
  aboutimage: {
    width: "500px",
    marginLeft: "70px",
    objectFit: "contain",
    "@media (max-width: 1280px)": {
      width: "350px",
      marginTop: 40,
    },
  },
  about__header: {
    fontWeight: 700,
    fontSize: "44px",
  },
  border: {
    backgroundColor: "#F8B630",
    height: 3,
    width: 170,
    borderRadius: 3,
    marginBottom: 35,
    marginTop: 10,
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
        <Grid item xs={12} lg={6}>
          <Typography className={classes.about__header} variant="h3">
            Our Story
          </Typography>
          <div className={classes.border}></div>
          <Typography pr={5} className={classes.about__text} variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img src={people} alt="" className={classes.aboutimage} />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
