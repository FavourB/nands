import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
//import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
//import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button/Button";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Hero from "../hero/hero";
import Praises from "../testimonials/testimonials";
import Accomplishments from "../accomplishment/accomplishment";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Footer from "../footer/footer";
import { Link } from "react-scroll";
import Mobilemenu from "../Mobilemenu";
//import Loader from './loader'
import WhyChooseUs from "../WhyChooseUs";
import OurServices from "../OurServices";
import OurTeam from "../team/ourteam";
import { Link as NavLink } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  loader__image__container: {
    backgroundColor: "#fff",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loader__image: {
    width: "45%",
    objectFit: "contain",
    "@media (max-width: 600px)": {
      width: "75%",
    },
  },

  componentcontainer: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(7),
      marginRight: theme.spacing(7),
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
  },
  componentcontainer4: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(7),
      marginRight: theme.spacing(7),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
  },
  componentcontainer2: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(13),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2),
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
  componentcontainer1: {
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
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginTop: -70,
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginTop: -40,
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(2),
    },
  },
  componentcontainer3: {
    marginTop: -220,
    paddingTop: 150,
    [theme.breakpoints.down("xs")]: {
      marginTop: -150,
      paddingTop: 150,
      [theme.breakpoints.down("md")]: {
        marginTop: -220,
        paddingTop: 150,
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: -150,
        paddingTop: 150,
      },
    },
  },
  papers: {
    background: theme.palette.secondary.light,
  },
  link: {
    color: theme.palette.common.text,
    textDecoration: "none",
    textTransform: "capitalize",

    "&.active": {
      color: theme.palette.secondary.main,
      // paddingBottom:20,
      // borderBottom:'2px solid #1D1974',
      textDecoration: "none",
    },
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "none",
      background: "none",
    },
  },
  contactus: {
    "&:hover": {
      background: theme.palette.secondary.main,
      color: "#FFF",
      textDecoration: "none",
    },
  },
  contactuslink: {
    textDecoration: "none",

    "&:hover": {
      textDecoration: "none",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    //width: "80%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  logo: {
    width: "90%",
    padding: theme.spacing(0),
    // [theme.breakpoints.down("xs")]: {
    //   width:'200%'
    // },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1),
      width: "70%",
    },
    // [theme.breakpoints.down('sm')]: {
    //   width:'150%'
    // },
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
const loaderimg = require("./Loader.gif");
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
  const [loaded, setLoaded] = useState(false);
  const classes = useStyles();
  //const theme = useTheme();
  //const matches = useMediaQuery(theme.breakpoints.down("xs"));
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 5000);
  }, []);
  // if (this.state.loading) return <Loader/>;
  return loaded ? (
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
              className={classes.componentcontainer4}
            >
              <Grid item xs={1}>
                <img
                  src={require("../../assets/images/logo.png")}
                  alt="logo"
                  className={classes.logo}
                />
              </Grid>

              <Grid item xs={6}>
                <Grid
                  className={classes.sectionDesktop}
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    {" "}
                    <Button className={classes.link}>
                      <NavLink className={classes.link} href="#home">
                        Home
                      </NavLink>{" "}
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    {" "}
                    <Button className={classes.link}>
                      <NavLink className={classes.link} href="#ourservices">
                        Our Services
                      </NavLink>{" "}
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    {" "}
                    <Button className={classes.link}>
                      <NavLink className={classes.link} href="#aboutus">
                        About Us
                      </NavLink>{" "}
                    </Button>
                  </Grid>
                  {/* <Grid item xs={3}>
                    {" "}
                    <Button className={classes.link}>
                      <Link
                        className={classes.link}
                        to="aboutus"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        About Us
                      </Link>{" "}
                    </Button>
                  </Grid> */}
                  <Grid item xs={3}>
                    <Button className={classes.link}>
                      <NavLink
                        className={classes.link}
                        href="https://www.blog.nands.io/"
                      >
                        Blog
                      </NavLink>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={4} className={classes.sectionDesktop}>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item xs={5}>
                    <NavLink
                      href="#contactus"
                      className={classes.contactuslink}
                    >
                      <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.contactus}
                        size="small"
                        disableElevation
                      >
                        Contact us
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item xs={7}>
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
            <div className={classes.sectionMobile}>
              <Mobilemenu darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <div style={{ width: "100%" }}>
        <Box style={{ width: "100%" }}>
          <Paper style={{ marginTop: -20 }}>
            {" "}
            <Box className={classes.componentcontainer} id="home">
              <Hero />
            </Box>
          </Paper>
          <Box className={classes.componentcontainer}>
            <WhyChooseUs />
          </Box>
          {/* <div className={classes.componentcontainer} id="ourservices">
            <OurServices />
          </div> */}
          <Box className={classes.componentcontainer} id="ourservices">
            <OurServices />
          </Box>
          <Box className={classes.componentcontainer} id="aboutus">
            <About />
          </Box>
          <Box className={classes.componentcontainer}>
            <OurTeam />
          </Box>
          <Paper
            style={{ marginTop: -20 }}
            elevation={0}
            className={classes.papers}
          >
            {" "}
            <Box className={classes.componentcontainer}>
              <Praises />
            </Box>
          </Paper>
          <Box className={classes.componentcontainer1}>
            <Accomplishments />
          </Box>
          <Box className={classes.componentcontainer} id="contactus">
            <Contact />
          </Box>
          <Paper className={classes.componentcontainer3}>
            <Box className={classes.componentcontainer}>
              <Footer />
            </Box>{" "}
          </Paper>
        </Box>
      </div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  ) : (
    <div className={classes.loader__image__container}>
      <img src={loaderimg} className={classes.loader__image} />
    </div>
  );
}

export default withTheme(App);
