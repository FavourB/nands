import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    // height: 303,
    // width: 350,
    marginTop: theme.spacing(7),
    paddingLeft: theme.spacing(10),

    "@media (max-width:960px)": {
      height: 303,
      width: 250,
      paddingLeft: theme.spacing(7),
    },
    "@media (max-width:600px)": {
      width: 260,
      height: 250,
      marginLeft: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
  },
  control: {
    padding: theme.spacing(2),
  },

  grid: {
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      //flexDirection: "column",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  grid2: {
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    "@media (max-width:660px)": {
      flexDirection: "column-reverse",
    },
  },
  title: {
    padding: theme.spacing(4, 0),
    textAlign: "center",
  },
  image: {
    "@media (max-width:600px)": {
      width: "80 %",
    },
  },
  image2: {
    marginTop: 20,
    "@media (max-width:600px)": {
      width: "80 %",
      marginTop: 80,
    },
  },
}));

const OurServices = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginBottom: 10 }}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="3000"
      >
        <Typography style={{ textAlign: "center" }} variant="caption">
          OUR SERVICES
        </Typography>
      </Grid>

      <Grid
        container
        className={classes.grid2}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <Grid item xs={12} lg={5} sm={5} md={5} className="pt-lg-4">
          <div className={classes.card}>
            <Typography variant="h4" className="mb-4">
              Web Development
            </Typography>
            <Typography variant="body 2">
              Responsive web development, including front-end and back-end
              services, for all website variations; e-commerce,
              video-conferencing, etc.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={5} sm={6} md={5} className=" pl-lg-2">
          <img
            src={require("../assets/images/webdev1.gif")}
            className={classes.image}
            alt="start"
            style={{ width: "80%", paddingLeft: "20px", paddingTop: 0 }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.grid}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <Grid
          item
          xs={12}
          sm={6}
          lg={5}
          md={5}
          className=" pl-lg-2 pl-md-4 pt-md-5"
        >
          <img
            src={require("../assets/images/mobile.gif")}
            className={classes.image}
            alt="start"
            style={{ width: "60%", paddingLeft: "20px" }}
          />
        </Grid>
        <Grid item xs={8} sm={6} lg={5} md={5} className="pl-md-0 pl-lg-0">
          <div className={classes.card}>
            <Typography variant="h4" className="mb-4 mt-lg-4">
              Mobile App Development
            </Typography>
            <Typography variant="body 2">
              We develop mobile apps, for android and ios, that are powerful and
              intuitive, using any framework of choice.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.grid2}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <Grid item xs={8} lg={5} sm={6} md={5} className="pt-lg-4 pl-lg-0">
          <div className={classes.card}>
            <Typography variant="h4" className="mb-4">
              Product Design
            </Typography>
            <Typography variant="body 2">
              Do you have amazing product ideas and you don’t know exactly how
              to bring them to life? Trust us, we know how that feels and this
              is why we use the best available technology to help you actualise
              these ideas, bringing those seemingly impossible designs to your
              fingertips.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={5} sm={6} md={5} className=" pl-lg-0">
          <img
            src={require("../assets/images/product design.gif")}
            className={classes.image}
            alt="start"
            style={{ width: "70%", paddingLeft: "20px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.grid}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <Grid
          item
          xs={12}
          lg={5}
          sm={6}
          md={5}
          className="pt-lg-5 pl-lg-5 pl-md-5 pt-md-5 pl-xs-5"
        >
          <img
            src={require("../assets/images/video.gif")}
            className={classes.image2}
            alt="start"
            style={{ width: "70%", paddingLeft: "20px" }}
          />
        </Grid>
        <Grid item xs={7} lg={5} md={5} sm={6} className="pl-lg-0">
          <div className={classes.card}>
            <Typography variant="h4" className="mb-4">
              Video Editing and Animation
            </Typography>
            <Typography variant="body 2">
              N&S Tech creates videos and animations with a large dose of
              creativity, uniqueness, and engagement.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurServices;

//  {/* <List >

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         < FiberManualRecordIcon />
//                                     </ListItemIcon>
//                                     <ListItemText>
//                                         <Typography >
//                                             Web Development
//                       </Typography>
//                                     </ListItemText>
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         < FiberManualRecordIcon />
//                                     </ListItemIcon>
//                                     <ListItemText>
//                                         <Typography >
//                                             Web Development
//                       </Typography>
//                                     </ListItemText>
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         < FiberManualRecordIcon />
//                                     </ListItemIcon>
//                                     <ListItemText>
//                                         <Typography >
//                                             Web Development
//                       </Typography>
//                                     </ListItemText>
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         < FiberManualRecordIcon />
//                                     </ListItemIcon>
//                                     <ListItemText>
//                                         <Typography >
//                                             Web Development
//                       </Typography>
//                                     </ListItemText>
//                                 </ListItem>

//                             </List> */}
