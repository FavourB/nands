import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
        "@media (max-width:600px)": {
            width: 210,
            height: 250,
            marginLeft: theme.spacing(2)

        },
        "@media (max-width:960px)": {
            height: 303,
            width: 250,
            paddingLeft: theme.spacing(7),

        },
    },
    control: {
        padding: theme.spacing(2),
    },
    title: {
        padding: theme.spacing(2, 0)
    },
    grid: {
        "@media (max-width:960px)": {
            flexDirection: 'row-reverse',
            marginLeft: "8px",
        },
        "@media (max-width:660px)": {
            flexDirection: 'row-reverse',
            //marginLeft: "8px",
        },
    }
}));

const OurServices = () => {
    const classes = useStyles();

    return (
        <Grid>

            <Grid justify="center" container className="mb-5 mt-3 mr-smOnly-5 pr-smOnly-5">
                OUR SERVICES
                </Grid >

            <Grid container justify="center" className="pl-md-1">
                <Grid justfy="center" item xs={7} lg={6} sm={5} md={5} >
                    <div className={classes.card}>
                        <Typography variant="h4" className="mb-4">
                            Web Development
                      </Typography>
                        <Typography variant="body 2" >
                            Responsive web development, including front-end and back-end services, for all website variations; e-commerece, video-conferencing, etc.
                      </Typography>

                    </div>
                </Grid>
                <Grid item xs={7} lg={5} sm={6} md={5} className="pl-md-5">
                    <img src={require("../assets/images/webdev1.gif")} className={classes.image}
                        alt='start'
                        style={{ width: '70%', paddingLeft: '20px' }}
                    />
                </Grid>
            </Grid>

            <Grid container justify="center" className={classes.grid}>


                <Grid justfy="center" item xs={7} sm={7} lg={5} md={5} className="pl-md-5">
                    <img src={require("../assets/images/mobile.gif")}
                        alt='start'
                        style={{ width: '60%', paddingLeft: '22px' }}
                    />

                </Grid>
                <Grid item xs={7} sm={5} lg={5} md={5} className="pl-md-4 ">
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
            <Grid container justify="center" >


                <Grid justfy="center" item xs={7} lg={5} sm={6} md={5} className="pl-md-4">
                    <div className={classes.card}>
                        <Typography variant="h4" className="mb-4">
                            Product Design
                        </Typography>
                        <Typography variant="body 2" >
                            Come to us with your product ideas, and we bring them to life using inspiring designs; Wireframing, high-fidelity designs, etc.
                        </Typography>

                    </div>
                </Grid>
                <Grid item xs={7} lg={5} sm={6} md={5} className="pl-md-2">
                    <img src={require("../assets/images/product design.gif")}
                        alt='start'
                        style={{ width: '60%', paddingLeft: '20px' }}
                    />
                </Grid>

            </Grid>
            <Grid container justify="center" className={classes.grid}>

                <Grid justfy="center" item xs={7} lg={5} sm={6} md={5} className="pl-md-5">
                    <img src={require("../assets/images/video.gif")}
                        alt='start'
                        style={{ width: '50%', paddingLeft: '20px' }}
                    />

                </Grid>
                <Grid item xs={7} lg={5} md={5} sm={6} className="pl-md-3">
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