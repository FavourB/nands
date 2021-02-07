import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import Typography from "@material-ui/core/Typography/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        height: 273,
        width: 190,
        backgroundColor: theme.palette.primary.dark,
        padding: theme.spacing(5, 3, 3),
        borderRadius: "15px"
    },
    control: {
        padding: theme.spacing(2),
    },
    title: {
        padding: theme.spacing(2, 0)
    }
}));

const WhyChooseUs = () => {

    const classes = useStyles();

    return (
        <Grid>
            <Grid container justify="center" className="ml-lg-5 ml-smOnly-5 ml-xsOnly-4">
                <Grid justify="center" className="mb-5 mt-1 mr-smOnly-5 pr-smOnly-5">
                    WHY CHOOSE US
                </Grid >

                <Grid container justify="center" className={classes.root} direction="row">

                    {/* <Grid item justify="center">
                    <Grid container justify="center"  > */}
                    <Grid item xs={7} sm={6} md={3} className=" mb-smOnly-5 pl-smOnly-5">
                        <Card elevation={10} className={classes.card} >
                            <img src={require("../assets/images/star.svg")}
                                alt='start'
                            //style={{ paddingRight: 30, paddingLeft: -20 }}
                            />
                            <Typography variant="body1" className={classes.title}>
                                Quality
                            </Typography>
                            <Typography variant="body2">
                                We are a software company equipped with all necessary skills to provide work that meets industry standards.
                           </Typography >
                        </Card>
                    </Grid>
                    <Grid item xs={7} sm={6} md={3} className=" mb-smOnly-4 ">
                        <Card elevation={10} className={classes.card}>
                            <img src={require("../assets/images/star.svg")}
                                alt='start'
                            //style={{ width: '100%', paddingRight: 30, paddingLeft: -20 }}
                            />
                            <Typography variant="body1" className={classes.title}>
                                Reliability
                            </Typography>
                            <Typography variant="body2">
                                Teams put together for your projects will deliver top quality work in a timely manner, as agreed.

                           </Typography >
                        </Card>
                    </Grid>
                    <Grid item xs={7} sm={6} md={3} className="pl-smOnly-5">
                        <Card elevation={10} className={classes.card}>
                            <img src={require("../assets/images/star.svg")}
                                alt='start'
                            // style={{width:'100%', paddingRight:30, paddingLeft:-20}}
                            />
                            <Typography variant="body1" className={classes.title}>
                                Cost-effective
                            </Typography>
                            <Typography variant="body2">
                                Want to get your projects done without breaking the bank? N&S tech is here for you.

                           </Typography >
                        </Card>
                    </Grid>
                    <Grid item xs={7} sm={6} md={3} >
                        <Card elevation={10} className={classes.card} >
                            <img src={require("../assets/images/star.svg")}
                                alt='start'
                            // style={{width:'100%', paddingRight:30, paddingLeft:-20}}
                            />
                            <Typography variant="body1" className={classes.title}>
                                Vision
                            </Typography>
                            <Typography variant="body2">
                                We are passionate, innovative, willing to adapt and set market trends and demands.
                           </Typography >
                        </Card>
                    </Grid>

                    {/* </Grid>
                </Grid> */}

                </Grid>

            </Grid>
        </Grid>
    );
}

export default WhyChooseUs;

