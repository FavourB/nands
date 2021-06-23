import React, { useState } from 'react';
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
        //height: 230,
        width: "90%",
        height: 300,
        backgroundColor: theme.palette.primary.dark,
        padding: theme.spacing(5, 3, 3),
        borderRadius: "15px",
        transition: "transform 0.5s ease-in-out",
        "@media (max-width:1200px)": {
            width: 210,
            height: 300,
            marginLeft: theme.spacing(2)

        },
        "@media (max-width:1158px)": {
            width: " 80%",
            height: 300,
            //marginRight: theme.spacing(1)
            marginLeft: theme.spacing(0)

        },
        "@media (max-width:960px)": {
            width: "80%",
            //padding: theme.spacing(5, 3, 3, 8),
            //height: 220,
            marginBottom: theme.spacing(3),
            //padding: theme.spacing(4, 3, 3),
        },
        // "@media (max-width:837px) and (min-width: 700px)": {
        //     width: "40%",
        //     //padding: theme.spacing(5, 3, 3, 8),
        //     //height: 220,
        //     marginBottom: theme.spacing(3),
        //     //padding: theme.spacing(4, 3, 3),
        // },
        "@media (max-width:750px)": {
            width: "100%",
            height: "100%",
            // marginBottom: theme.spacing(3),
            // padding: theme.spacing(4, 3, 3),
        },
        "@media (max-width:599px)": {
            width: "100%",
            height: "100%",
            // marginBottom: theme.spacing(3),
            // padding: theme.spacing(4, 3, 3),
        },
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
    },
    contain: {
        marginTop: theme.spacing(7),
        paddingLeft: theme.spacing(5),
        "@media (max-width:1200px)": {

            paddingLeft: theme.spacing(6)

        },
        "@media (max-width:900px)": {

            marginLeft: theme.spacing(5)

        },
        "@media (max-width:800px)": {

            marginLeft: theme.spacing(3)

        },
        "@media (max-width:600px)": {

            marginLeft: theme.spacing(0),
            paddingLeft: theme.spacing(3)

        },
    },

    control: {
        padding: theme.spacing(2),
    },
    title: {
        padding: theme.spacing(2, 0),

    },
    title2: {
        padding: theme.spacing(4, 0),
        textAlign: "center"
    }
}));

const WhyChooseUs = () => {

    const classes = useStyles();
    const [state, setState] = useState({
        raised: false,
        shadow: 2,
    })
    const [state2, setState2] = useState({
        raised: false,
        shadow: 2,
    })
    const [state4, setState4] = useState({
        raised: false,
        shadow: 2,
    })
    const [state3, setState3] = useState({
        raised: false,
        shadow: 2,
    })


    return (
        <Grid>
            <Grid container justify="center"
            //className="ml-lg-5 ml-smOnly-5 ml-xsOnly-4 pr-md-4 pl-md-1"

            >
                <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: 10, marginTop: 7 }} data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
                    <Typography style={{ textAlign: 'center' }} variant='caption'>WHY CHOOSE US</Typography>
                </Grid>

                <Grid container justify="space-between" alignItems="center" direction="row" className={classes.contain}
                //className="pl-smOnly-5 pl-lg-4"""
                >

                    {/* <Grid item justify="center">
                    <Grid container justify="center"  > */}
                    <Grid item xs={11} sm={4} md={3} data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="3000"
                    //className=" mb-smOnly-5 pl-smOnly-5 pb-md-4 "
                    >
                        <Card elevation={6} className={classes.card} classes={{ root: state2.raised ? classes.cardHovered : "" }}
                            onMouseOver={() => setState2({ raised: true, shadow: 3 })}
                            onMouseOut={() => setState2({ raised: false, shadow: 1 })}
                            raised={state2.raised} zdepth={state2.shadow}>

                            <StarOutlineIcon classname="px-0" style={{ color: "#FFCD67", fontSize: 40 }} />
                            <Typography variant="h5" className={classes.title}>
                                Quality
                            </Typography>
                            <Typography variant="body2" style={{ lineHeight: 1.3 }}>
                                We are a software company equipped with all necessary skills to provide work that meets industry standards.
                           </Typography >
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={4} md={3} data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="3000"
                    //className=" mb-smOnly-4 mr-xs-4"
                    >
                        <Card elevation={8} className={classes.card} classes={{ root: state3.raised ? classes.cardHovered : "" }}
                            onMouseOver={() => setState3({ raised: true, shadow: 3 })}
                            onMouseOut={() => setState3({ raised: false, shadow: 1 })}
                            raised={state3.raised} zdepth={state3.shadow}>
                            <CheckCircleOutlineIcon classname="px-0" style={{ color: "#FFCD67", fontSize: 40 }} />
                            <Typography variant="h5" className={classes.title}>
                                Reliability
                            </Typography>
                            <Typography variant="body2" style={{ lineHeight: 1.3 }}>
                                Teams put together for your projects will deliver top quality work in a timely manner, as agreed.

                           </Typography >
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={4} md={3} data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="3000"
                    //className="pl-smOnly-5"
                    >
                        <Card elevation={8} className={classes.card} classes={{ root: state4.raised ? classes.cardHovered : "" }}
                            onMouseOver={() => setState4({ raised: true, shadow: 3 })}
                            onMouseOut={() => setState4({ raised: false, shadow: 1 })}
                            raised={state4.raised} zdepth={state4.shadow}>
                            <PaymentIcon classname="px-0" style={{ color: "#FFCD67", fontSize: 40 }} />
                            <Typography variant="h5" className={classes.title}>
                                Cost-effective
                            </Typography>
                            <Typography variant="body2" style={{ lineHeight: 1.3 }}>
                                Want to get your projects done without breaking the bank? N&S tech is here for you.

                           </Typography >
                        </Card>
                    </Grid>
                    <Grid item xs={11} sm={4} md={3} data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="3000"
                    //className="pr-md-2"
                    >
                        <Card elevation={8} className={classes.card} classes={{ root: state.raised ? classes.cardHovered : "" }}
                            onMouseOver={() => setState({ raised: true, shadow: 3 })}
                            onMouseOut={() => setState({ raised: false, shadow: 1 })}
                            raised={state.raised} zdepth={state.shadow}>
                            <PersonalVideoIcon classname="px-0" style={{ color: "#FFCD67", fontSize: 40 }} />
                            <Typography variant="h5" className={classes.title}>
                                Vision
                            </Typography>
                            <Typography variant="body2" style={{ lineHeight: 1.3 }}>
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

