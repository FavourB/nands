import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import Typography from "@material-ui/core/Typography/Typography";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        height: 230,
        width: 230,
        backgroundColor: theme.palette.primary.dark,
        padding: theme.spacing(5, 3, 3),
        borderRadius: "15px",
        "@media (max-width:1200px)": {
            width: 210,
            height: 250,
            marginLeft: theme.spacing(2)

        },
        "@media (max-width:1158px)": {
            width: 190,
            height: 250,
            //marginRight: theme.spacing(1)
            marginLeft: theme.spacing(0)

        },
        "@media (max-width:960px)": {
            width: 270,
            height: 200,
            marginBottom: theme.spacing(3),
            padding: theme.spacing(4, 3, 3),
        },
        "@media (max-width:750px)": {
            width: 210,
            height: 230,
            // marginBottom: theme.spacing(3),
            // padding: theme.spacing(4, 3, 3),
        },
        "@media (max-width:599px)": {
            width: 300,
            height: 230,
            // marginBottom: theme.spacing(3),
            // padding: theme.spacing(4, 3, 3),
        },
    },

    contain: {
        "@media (max-width:1200px)": {

            paddingLeft: theme.spacing(3)

        },
        "@media (max-width:900px)": {

            marginLeft: theme.spacing(5)

        },
        "@media (max-width:800px)": {

            marginLeft: theme.spacing(3)

        },
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
            <Grid container justify="center"
            //className="ml-lg-5 ml-smOnly-5 ml-xsOnly-4 pr-md-4 pl-md-1"

            >
                <Grid justify="center" className="mb-5 mt-2 mr-smOnly-5 pr-smOnly-5 ">
                    WHY CHOOSE US
                </Grid >

                <Grid container justify="center" direction="row" className={classes.contain}
                //className="pl-smOnly-5 pl-lg-4"
                >

                    {/* <Grid item justify="center">
                    <Grid container justify="center"  > */}
                    <Grid item xs={11} sm={5} md={3}
                    //className=" mb-smOnly-5 pl-smOnly-5 pb-md-4 "
                    >
                        <Card elevation={8} className={classes.card} >

                            <StarOutlineIcon classname="px-0" style={{ color: "#FFCD67", fontSize: 40 }} />
                            <Typography variant="body1" className={classes.title}>
                                Quality
                            </Typography>
                            <Typography variant="body2">
                                We are a software company equipped with all necessary skills to provide work that meets industry standards.
                           </Typography >
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={3}
                    //className=" mb-smOnly-4 mr-xs-4"
                    >
                        <Card elevation={8} className={classes.card}>
                            <CheckCircleOutlineIcon classname="px-0" style={{ color: "#FFCD67", fontSize: 40 }} />
                            <Typography variant="body1" className={classes.title}>
                                Reliability
                            </Typography>
                            <Typography variant="body2">
                                Teams put together for your projects will deliver top quality work in a timely manner, as agreed.

                           </Typography >
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={3}
                    //className="pl-smOnly-5"
                    >
                        <Card elevation={8} className={classes.card}>
                            <PaymentIcon classname="px-0" style={{ color: "#FFCD67", fontSize: 40 }} />
                            <Typography variant="body1" className={classes.title}>
                                Cost-effective
                            </Typography>
                            <Typography variant="body2">
                                Want to get your projects done without breaking the bank? N&S tech is here for you.

                           </Typography >
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={5} md={3}
                    //className="pr-md-2"
                    >
                        <Card elevation={8} className={classes.card} >
                            <PersonalVideoIcon classname="px-0" style={{ color: "#FFCD67", fontSize: 40 }} />
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

            </Grid >
        </Grid >
    );
}

export default WhyChooseUs;

