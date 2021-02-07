import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withTheme } from "../Theme/Theme";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button/Button";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Hero from "../hero/hero";
import Praises from "../testimonials/testimonials"
import Team from "../team/team"
import Accomplishments from "../accomplishment/accomplishment";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Footer from "../footer/footer";
import { Link, animateScroll as scroll } from 'react-scroll';


import WhyChooseUs from "../WhyChooseUs"
import OurServices from "../OurServices"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  componentcontainer: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(7),
      marginRight: theme.spacing(9),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(1),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
  },
  componentcontainer1:{
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    marginTop: -90,
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      marginTop: -50,
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(2),
    },
  },
  papers:{
    background:theme.palette.secondary.light,
  },
  link:{
    color:"theme.palette.common.text",
    textDecoration:"none",
    textTransform:"capitalize",
    
	
		'&.active':{
			color:theme.palette.secondary.main,
			// paddingBottom:20,
			// borderBottom:'2px solid #1D1974',
			textDecoration:"none"
		},
		'&:hover':{
			color:theme.palette.secondary.main,
      textDecoration:"none",
      background:"none",
      
		},
	},
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles2 = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles2();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function App(props) {
  const { darkMode, setDarkMode } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar elevation={0}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={3}>
                <img
                  src={require("../../assets/images/logo.png")}
                  alt="logo"
                  style={{ width: "10%" }}
                />
              </Grid>

              <Grid item xs={5}>
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                >
                  <Grid item> <Button  className={classes.link}><Link to="home" spy={true} smooth ={true} offset ={-100} duration={500}>Home</Link>  </Button></Grid>
                  <Grid item> <Button  className={classes.link}><Link to="ourservices" spy={true} smooth ={true} offset ={-100} duration={500}>Our Services</Link>  </Button></Grid>
                  <Grid item> <Button  className={classes.link}><Link to="aboutus" spy={true} smooth ={true} offset ={-100} duration={500} >About Us</Link>  </Button></Grid>
                </Grid>
              </Grid>

              <Grid item xs={4}>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item xs={4}>
                    <Button variant="outlined" color="secondary">
                    <Link to="aboutus" spy={true} smooth ={true} offset ={-300} duration={500} >Contact us</Link>
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={darkMode}
                          onChange={() => setDarkMode(!darkMode)}
                        />
                      }
                      label="Dark Mode"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id='back-to-top-anchor'/>
      <div  style={{ width: '100%' }}>
        <Box  style={{ width: '100%' }}>
          <Paper style={{marginTop:-20}}> <Box className={classes.componentcontainer} id="home"><Hero/></Box></Paper>
          <Box className={classes.componentcontainer}><WhyChooseUs/></Box>
          <Box className={classes.componentcontainer} id="ourservices"><OurServices/></Box>
          <Box className={classes.componentcontainer}><Team /></Box>
          <Box className={classes.componentcontainer} id="aboutus"><About/></Box>
          <Paper style={{marginTop:-20}} elevation={0} className={classes.papers}> <Box className={classes.componentcontainer}><Praises/></Box></Paper>
          <Box className={classes.componentcontainer1}><Accomplishments/></Box>
          <Box className={classes.componentcontainer} id="contactus"><Contact/></Box>
          <Paper style={{marginTop:-20}}><Box className={classes.componentcontainer}><Footer/></Box> </Paper>
        </Box>
      </div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default withTheme(App);
