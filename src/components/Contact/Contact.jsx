import React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Paper,
  Link,
  Button,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CustomTextfield from "./CustomTextfield";

const useStyles = makeStyles((theme) => ({
  contact_headline: {
    fontWeight: 700,
    fontSize: "48px",
    "@media (max-width: 880px)": {
      marginTop: 40,
      fontSize: "38px",
    },
  },
  section2: {
    marginTop: 70,
  },
  grid1: {
    display: "flex",
    flexDirection: "column",
  },

  getintouch: {
    fontWeight: 600,
    fontSize: "36px",
  },
  border: {
    backgroundColor: "#F8B630",
    height: 3,
    width: 170,
    borderRadius: 3,
    marginBottom: 35,
    marginTop: 10,
  },
  paragraph: {
    paddingRight: "80px",
    fontSize: "18px",
    "@media (max-width: 880px)": {
      paddingRight: "0px",
      fontSize: "18px",
    },
  },
  list: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    fontSize: "18px",
    color: theme.palette.primary.lighter,
  },
  con_email: {
    color: theme.palette.primary.lighter,
    marginLeft: 25,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    padding: 50,
    borderRadius: 10,
    "@media (max-width: 1280px)": {
      marginTop: 40,
    },
  },
  formtext: {
    fontWeight: 600,
  },
  submitBtn: {
    marginTop: "20px",
    padding: "10px 0px",
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <Grid container align="center">
      <Grid item xs={12}>
        <Typography variant="h6">CONTACT US</Typography>
        <Typography className={classes.contact_headline} variant="h2">
          Have a Project for us?
        </Typography>
      </Grid>

      <Grid container className={classes.section2}>
        <Grid className={classes.grid1} container item xs={12} lg={6}>
          <Typography className={classes.getintouch} align="left" variant="h3">
            Get In Touch
          </Typography>
          <div className={classes.border}></div>
          <div className={classes.para}>
            <Typography
              align="left"
              variant="p"
              component="p"
              className={classes.paragraph}
            >
              Feel free to contact us at any time. We will get back to you as
              soon as we can.{" "}
            </Typography>
          </div>

          <div className={classes.list}>
            <EmailIcon />
            <Link
              className={classes.con_email}
              href="mailto:nandstech@gmail.com"
            >
              nandstech@gmail.com
            </Link>
          </div>
          <div className={classes.list}>
            <PhoneIphoneIcon />
            <Link className={classes.con_email} href="tel:+2348176437969">
              +2348176437969
            </Link>
            <span>
              {" "}
              <Link className={classes.con_email} href="tel:+2348120988862">
                +2348176437969
              </Link>{" "}
            </span>
          </div>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Paper className={classes.paper} elevation={3}>
            <Typography
              align="left"
              justify="flex-start"
              variant="h5"
              className={classes.formtext}
            >
              Tell Us About It
            </Typography>
            <form action="POST" data-netlify="true">
              <CustomTextfield name="name" label="Name" />
              <CustomTextfield name="email" label="Email" required />
              <CustomTextfield name="subject" label="Subject" />
              <CustomTextfield
                name="message"
                label="Message"
                multiline
                rows={4}
              />
              <div data-netlify-recaptcha="true"></div>

              <Button
                fullWidth
                color="secondary"
                size="large"
                variant="contained"
                className={classes.submitBtn}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
