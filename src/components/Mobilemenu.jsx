import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import HelpIcon from "@material-ui/icons/Help";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ContactsIcon from "@material-ui/icons/Contacts";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Grid from "@material-ui/core/Grid";
// import { Link } from "react-scroll";
import { Link as NavLink } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },

  navLink: {
    "&:hover": {
      //color: '#053858',
      textDecoration: "none",
      //opacity:'.5'
    },
  },
  item: {
    //color: "#fff",
    display: "flex",
    marginTop: theme.spacing(2),
    fontSize: 18,
    textTransform: "none",
    "&:focus": {
      outline: "none",
      color: theme.palette.secondary.main,
    },

    "&:hover": {
      //color: '#053858',
      textDecoration: "none",
      //opacity:'.5'
    },
  },

  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },

  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.text,
  },
  closeButton: {
    position: "absolute",
    fontSize: 24,
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.common.text,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.text,
  },
}))(MuiDialogContent);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function MenuModal(props) {
  const { darkMode, setDarkMode } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="show more"
        aria-haspopup="true"
        onClick={handleClickOpen}
        color="inherit"
      >
        <MenuIcon color="secondary" />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} />
        <DialogContent>
          <Grid container justify="center" direction="row">
            <Grid direction="column">
              <Grid
                container
                alignItems="center"
                direction="row"
                style={{ marginTop: 60 }}
              >
                <NavLink href="#home" className={classes.navLink}>
                  <Button
                    edge="end"
                    aria-label="help"
                    onClick={handleClose}
                    className={classes.item}
                    aria-haspopup="true"
                  >
                    <HomeIcon className={classes.icon} /> Home
                  </Button>
                </NavLink>
              </Grid>
              <Grid container alignItems="center" direction="row">
                <NavLink href="#ourservices" className={classes.navLink}>
                  <Button
                    edge="end"
                    onClick={handleClose}
                    aria-label="help"
                    className={classes.item}
                    aria-haspopup="true"
                  >
                    <HelpIcon className={classes.icon} />
                    Our Services
                  </Button>
                </NavLink>
              </Grid>
              <Grid container alignItems="center" direction="row">
                <NavLink href="#aboutus" className={classes.navLink}>
                  <Button
                    edge="end"
                    onClick={handleClose}
                    aria-label="help"
                    className={classes.item}
                    aria-haspopup="true"
                  >
                    <InfoIcon className={classes.icon} /> About Us
                  </Button>
                </NavLink>
              </Grid>
              <Grid container alignItems="center" direction="row">
                <NavLink
                  href="https://www.blog.nands.io/"
                  className={classes.navLink}
                >
                  <Button
                    edge="end"
                    onClick={handleClose}
                    aria-label="help"
                    className={classes.item}
                    aria-haspopup="true"
                  >
                    <MenuBookIcon className={classes.icon} /> Blog
                  </Button>
                </NavLink>
              </Grid>
              <Grid container alignItems="center" direction="row">
                <NavLink href="#contactus" className={classes.navLink}>
                  <Button
                    edge="end"
                    onClick={handleClose}
                    aria-label="help"
                    className={classes.item}
                    aria-haspopup="true"
                  >
                    <ContactsIcon className={classes.icon} />
                    Contact Us
                  </Button>
                </NavLink>
              </Grid>
              <Grid
                container
                alignItems="center"
                direction="row"
                className="pl-2 pt-4"
              >
                <FormControlLabel
                  className={classes.item}
                  control={
                    <Switch
                      size="large"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                      onClick={handleClose}
                    />
                  }
                  label="Dark Mode"
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
