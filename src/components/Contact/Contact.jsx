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

  border: {
    backgroundColor: "#F8B630",
    height: 3,
    width: 170,
    borderRadius: 3,
    marginBottom: 35,
    marginTop: 10,
    "@media (max-width: 970px)": {
      width: 70,
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
    fontSize: "16px",
    color: theme.palette.primary.lighter,
    "@media (max-width: 880px)": {
      fontSize: "14px",
    },
  },
  con_email: {
    color: theme.palette.primary.lighter,
    marginLeft: 25,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.lightest,
      textDecoration: "none",
    },
  },
  paper: {
    backgroundColor: theme.palette.primary.dark,
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
    fontWeight: 700,
    color: '#FFF',

  },
}));

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const [success, setSuccess] = useState(false);
  //const [displayForm, setDisplayform] = useState(true);
  const classes = useStyles();
  return (
    <Grid container align="center" data-aos="fade-up"
      data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
      <Grid item xs={12}>
        <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: 10 }}>
          <Typography style={{ textAlign: 'center' }} variant='caption'>CONTACT US</Typography>
        </Grid>
        <Typography className={classes.contact_headline} variant="h2">
          Have a Project for us?
        </Typography>
      </Grid>

      <Grid container className={classes.section2}>
        <Grid className={classes.grid1} container item xs={12} lg={6}>
          <Typography align="left" variant="h4">
            Get In Touch
          </Typography>
          <div className={classes.border}></div>
          <div className={classes.para}>
            <Typography
              align="left"
              variant="body2"
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
          <Paper className={classes.paper} elevation={8}>
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
                email: Yup.string("Enter your email")
                  .email("Email should be valid")
                  .required("Required"),
                name: Yup.string("Enter your name")
                  .required("Required"),
                subject: Yup.string("Enter your subject")
                  .required("Required"),
                message: Yup.string("Enter your  message")
                  .required("Required"),
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  handleBlur,
                  // isValid,
                  // dirty,
                  handleChange,
                  handleSubmit,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <CustomTextfield
                      name="name"
                      placeholder="Name"
                      value={values.name}
                      onBlur={handleBlur}
                      error={touched.name && errors.name}
                      helperText={
                        touched.name ? errors.name : null
                      }
                      onChange={handleChange}
                    />
                    <CustomTextfield
                      name="email"
                      value={values.email}
                      placeholder="Email"
                      onBlur={handleBlur}
                      error={touched.email && errors.email}
                      helperText={
                        touched.email ? errors.email : null
                      }
                      onChange={handleChange}
                    />
                    <CustomTextfield
                      name="subject"
                      placeholder="Subject"
                      onBlur={handleBlur}
                      error={touched.subject && errors.subject}
                      helperText={
                        touched.subject ? errors.subject : null
                      }
                      value={values.subject}
                      onChange={handleChange}
                    />
                    <CustomTextfield
                      value={values.message}
                      onChange={handleChange}
                      name="message"
                      onBlur={handleBlur}
                      error={touched.message && errors.message}
                      helperText={
                        touched.message ? errors.message : null
                      }
                      placeholder="Message"
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
                    //disabled={!(dirty && isValid)}
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
