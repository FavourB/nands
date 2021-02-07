import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
//import MuiDialogActions from '@material-ui/core/DialogActions';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    avatar: {
        color: theme.palette.primary.main,
        marginRight: theme.spacing(2),
        backgroundColor: "#fff",
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
        textTransform: "uppercase",
    },
    navLink: {
        '&:hover': {
            //color: '#053858',
            textDecoration: 'none',
            //opacity:'.5'
        }
    },
    item: {
        color: "#fff",
        display: "flex",
        marginTop: theme.spacing(4),
        fontSize: 18,
        textTransform: "none",
        '&:focus': {
            outline: 'none',
            color: theme.palette.secondary.main,

        },

        '&:hover': {
            //color: '#053858',
            textDecoration: 'none',
            //opacity:'.5'
        }
    },
    collapseItem: {
        color: "#fff",
        //marginTop: theme.spacing(1),
        fontSize: 14,
        textTransform: "none",

        '&:hover': {
            //color: '#053858',
            textDecoration: 'none',
            //opacity:'.5'
        }
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    dropdown: {
        position: 'absolute',
        // top: 28,
        // right: 0,
        // left: 0,
        // zIndex: 1,
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
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
        backgroundColor: "rgba(29, 25, 116, 1)",
    },
    closeButton: {
        position: 'absolute',
        fontSize: 24,
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: "#fff",
    },

});


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: "rgba(29, 25, 116, 1)",
        color: "#fff",
    },
}))(MuiDialogContent);


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function MenuModal(props) {
    const { user } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
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
                <MenuIcon color='primary' />
            </IconButton>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >

                <DialogTitle id="customized-dialog-title" onClose={handleClose} />
                <DialogContent>
                    <Grid container justify="center" direction="row">
                        <Grid direction="column">
                            <Grid container alignItems="center" direction="row" style={{ marginTop: 60 }}>
                                <NavLink to="/" className={classes.navLink} >
                                    <Button
                                        edge="end"
                                        aria-label="help"
                                        onClick={handleClose}
                                        className={classes.item}
                                        aria-haspopup="true">< HomeIcon className={classes.icon} /> Home
	              </Button>
                                </NavLink>
                            </Grid>
                            <Grid container alignItems="center" direction="row" >
                                <NavLink to="/about-us" className={classes.navLink} >
                                    <Button
                                        edge="end"
                                        onClick={handleClose}
                                        aria-label="help"
                                        className={classes.item}
                                        aria-haspopup="true" >< InfoIcon className={classes.icon} /> About Us
              </Button>
                                </NavLink>
                            </Grid>
                            {user && <Grid container alignItems="center" direction="row" >
                                <NavLink to="/bookings" className={classes.navLink}>
                                    <Button edge="end" aria-label="help" className={classes.item} aria-haspopup="true" onClick={handleClose}>
                                        <Avatar className={classes.avatar}>{user.username.charAt()}</Avatar> My Bookings
                </Button></NavLink>
                            </Grid>}
                            {!user && <Grid container alignItems="center" direction="row" >
                                <Button edge="end" aria-label="help" className={classes.item} aria-haspopup="true"
                                    onClick={() => setOpen2(!open2)}> < AccountCircle className={classes.icon} /> My Account
                </Button>
                            </Grid>}
                            <Box ml={5}>
                                <Collapse in={open2} timeout="auto" mountOnEnter unmountOnExit>
                                    <Box justifyContent="center" direction="column">
                                        <Box>
                                            <NavLink to="/register" className={classes.navLink}>
                                                <Button edge="end" aria-label="help" className={classes.collapseItem} aria-haspopup="true" onClick={handleClose}>
                                                    Register
                        </Button>
                                            </NavLink>
                                        </Box>
                                        <Box>
                                            <NavLink to="/signin" className={classes.navLink}>
                                                <Button edge="end" aria-label="help" className={classes.collapseItem} aria-haspopup="true" onClick={handleClose}>
                                                    Sign In
                        </Button>
                                            </NavLink>
                                        </Box>
                                    </Box>
                                </Collapse>
                            </Box>
                            <Grid container alignItems="center" direction="row" >
                                <Button edge="end" aria-label="help" className={classes.item} aria-haspopup="true"
                                    onClick={() => setOpen3(!open3)} > <HelpIcon className={classes.icon} /> Help & Support
               </Button>
                            </Grid>
                            <Box ml={5}>
                                <Collapse in={open3} timeout="auto" mountOnEnter unmountOnExit>
                                    <Box justifyContent="center" direction="column">
                                        <Box>
                                            <NavLink to="/" className={classes.navLink}>
                                                <Button edge="end" aria-label="help" className={classes.collapseItem} aria-haspopup="true" onClick={handleClose}>
                                                    Privacy Policy
                        </Button>
                                            </NavLink>
                                        </Box>
                                        <Box>
                                            <NavLink to="/" className={classes.navLink}>
                                                <Button edge="end" aria-label="help" className={classes.collapseItem} aria-haspopup="true" onClick={handleClose}>
                                                    Terms & conditions
                        </Button>
                                            </NavLink>
                                        </Box>
                                    </Box>
                                </Collapse>
                            </Box>
                            {user && <Grid container alignItems="center" direction="row" >
                                <NavLink to="/logout" className={classes.navLink} >
                                    <Button
                                        edge="end"
                                        onClick={handleClose}
                                        aria-label="help"
                                        className={classes.item}
                                        aria-haspopup="true" >< InfoIcon className={classes.icon} /> Logout
              </Button>
                                </NavLink>
                            </Grid>}
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}
