import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { useScrollTrigger } from "@material-ui/core";

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles((theme) => ({
    card: {
        height: 303,
        width: 350,
        marginTop: theme.spacing(4),
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
        alignItems: "flex-start",
        justifyContent: "space-between",
        "@media (max-width:660px)": {
            flexDirection: 'row-reverse',

            //marginLeft: "8px",
        },
        "@media (max-width:600px)": {
            display: "block",


            //marginLeft: "8px",
        },
    },
    grid2: {
        alignItems: "flex-start",
        justifyContent: "space-between",

        "@media (max-width:600px)": {
            display: "block",


            //marginLeft: "8px",
        },
    },
    title: {
        padding: theme.spacing(4, 0),
        textAlign: "center"
    },
    image: {
        "@media (max-width:600px)": {
            width: "80 %",

            //marginLeft: "8px",
        },
    }
}));

const OurServices = () => {
    const classes = useStyles();
    const ref = React.useRef(null);

    let scrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        target: ref,
    });

    return (
        <Grid>

            <Grid justify="center" container className={classes.title} >
                OUR SERVICES
                </Grid >
            <Slide direction="up" in={scrollTrigger} mountOnEnter >
                <Grid container className={classes.grid2}>
                    <Grid justfy="center" item xs={8} lg={5} sm={5} md={5} >
                        <div className={classes.card}>
                            <Typography variant="h4" className="mb-4">
                                Web Development
                      </Typography>
                            <Typography variant="body 2" >
                                Responsive web development, including front-end and back-end services, for all website variations; e-commerece, video-conferencing, etc.
                      </Typography>

                        </div>
                    </Grid>
                    <Grid item xs={8} lg={5} sm={6} md={5} className=" pl-lg-2">
                        <img src={require("../assets/images/webdev1.gif")} className={classes.image}
                            alt='start'
                            style={{ width: '70%', paddingLeft: '20px' }}
                        />
                    </Grid>
                </Grid></Slide>

            <Grid container className={classes.grid}>


                <Grid item xs={8} sm={6} lg={5} md={5} className=" pl-lg-2">
                    <img src={require("../assets/images/mobile.gif")} className={classes.image}
                        alt='start'
                        style={{ width: '60%', paddingLeft: '20px' }}
                    />

                </Grid>
                <Grid item xs={8} sm={6} lg={5} md={5} className="pl-md-0 pl-lg-0">
                    <div className={classes.card}>
                        <Typography variant="h4" className="mb-4">
                            Mobile App Development
                        </Typography>
                        <Typography variant="body 2" >
                            We develop mobile apps, for android and ios, that are powerful and intuitive, using any framework of choice.
                        </Typography>

                    </div>
                </Grid>

            </Grid>
            <Grid container className={classes.grid2}>


                <Grid justfy="center" item xs={8} lg={5} sm={6} md={5} className=" pl-lg-0">
                    <div className={classes.card}>
                        <Typography variant="h4" className="mb-4">
                            Product Design
                        </Typography>
                        <Typography variant="body 2" >
                            Come to us with your product ideas, and we bring them to life using inspiring designs; Wireframing, high-fidelity designs, etc.
                        </Typography>

                    </div>
                </Grid>
                <Grid item xs={7} lg={5} sm={6} md={5} className=" pl-lg-0">
                    <img src={require("../assets/images/product design.gif")} className={classes.image}
                        alt='start'
                        style={{ width: '60%', paddingLeft: '20px' }}
                    />
                </Grid>

            </Grid>
            <Grid container className={classes.grid}>

                <Grid item xs={7} lg={5} sm={6} md={5} className=" pl-lg-5">
                    <img src={require("../assets/images/video.gif")} className={classes.image}
                        alt='start'
                        style={{ width: '60%', paddingLeft: '20px' }}
                    />

                </Grid>
                <Grid item xs={7} lg={5} md={5} sm={6} className=" pl-lg-0">
                    <div className={classes.card}>
                        <Typography variant="h4" className="mb-4">
                            Video Editing and Animation
        </Typography>
                        <Typography variant="body 2" >
                            N&S Tech creates videos and animations with a large dose of creativity, uniqueness, and engagement.
        </Typography>

                    </div>
                </Grid>

            </Grid>
        </Grid>
    );
}

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