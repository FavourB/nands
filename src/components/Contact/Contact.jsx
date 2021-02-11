import React, { useState } from "react";
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
import { Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  contact_headline: {
    fontWeight: 700,
    marginTop: 20,
    "@media (max-width: 880px)": {
      marginTop: 10,
    },
  },
  section2: {
    marginTop: 40,
    "@media (max-width: 880px)": {
      marginTop: 20,
    },
  },
  grid1: {
    display: "flex",
    flexDirection: "column",
  },

  getintouch: {
    fontWeight: 600,
  },
  border: {
    backgroundColor: "#F8B630",
    height: 3,
    width: 170,
    borderRadius: 3,
    marginBottom: 35,
    marginTop: 10,
    "@media (max-width: 880px)": {
      width: 100,
    },
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
      padding: 30,
      marginTop: 40,
      marginBottom: 40,
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const [success, setSuccess] = useState(false);
  const [displayForm, setDisplayform] = useState(true);
  const classes = useStyles();
  return (
    <Grid container align="center">
      <Grid item xs={12}>
        <Typography variant="h6">CONTACT US</Typography>
        <Typography className={classes.contact_headline} variant="h3">
          Have a Project for us?
        </Typography>
      </Grid>

      <Grid container className={classes.section2}>
        <Grid className={classes.grid1} container item xs={12} lg={6}>
          <Typography className={classes.getintouch} align="left" variant="h4">
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
              href="mailto:nandsteq@gmail.com"
            >
              nandsteq@gmail.com
            </Link>
          </div>
          <div className={classes.list}>
            <PhoneIphoneIcon />
            <Link className={classes.con_email} href="tel:+2348176437969">
              +2348176437969
            </Link>
            <span>
              {" "}
              <Link className={classes.con_email} href="tel:+2348086831929">
                +2348086831929
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

            {success && (
              <p
                style={{
                  color: "green",
                  fontWeight: 500,
                  textAlign: "left",
                  marginTop: "20px",
                }}
              >
                Successfully submitted form! We would get back to you shortly
              </p>
            )}

            {/* {displayForm && ( */}
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                fetch("/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: encode({
                    "form-name": "Nands Tech Contact Form",
                    ...values,
                  }),
                })
                  .then(() => {
                    setSuccess(true);
                    // setDisplayform(false);
                    resetForm({});
                  })
                  .catch((error) => alert(error));
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Invalid Email")
                  .required("Email is required"),
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  isValid,
                  dirty,
                  handleChange,
                  handleSubmit,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <CustomTextfield
                      name="name"
                      label="Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <CustomTextfield
                      name="email"
                      value={values.email}
                      label="Email"
                      error={touched.email && errors.email}
                      helperText={
                        errors.email && touched.email ? errors.email : null
                      }
                      onChange={handleChange}
                    />
                    <CustomTextfield
                      name="subject"
                      label="Subject"
                      value={values.subject}
                      onChange={handleChange}
                    />
                    <CustomTextfield
                      value={values.message}
                      onChange={handleChange}
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                    />
                    <div data-netlify-recaptcha="true"></div>

                    <Button
                      type="submit"
                      fullWidth
                      color="secondary"
                      size="large"
                      variant="contained"
                      className={classes.submitBtn}
                      disabled={!(dirty && isValid)}
                    >
                      Send Message
                    </Button>
                  </form>
                );
              }}
            </Formik>
            {/* )} */}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
