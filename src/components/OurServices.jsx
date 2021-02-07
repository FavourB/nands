import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles((theme) => ({
    card: {
        height: 273,
        width: 250,
        //backgroundColor: theme.palette.primary.dark,

    },
    control: {
        padding: theme.spacing(2),
    },
    title: {
        padding: theme.spacing(2, 0)
    }
}));

const OurServices = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid justify="center">
                <div className="mb-5 mt-1">
                    OUR SERVICES
                </div>
            </Grid>
            <Grid container justify="center" className={classes.root}>

                {/* <Grid item>
                    <Grid container justify="center"> */}
                <Grid item xs={12} sm={6}>
                    <div className={classes.card}>
                        <Typography variant="body1">
                            Web Development
                      </Typography>
                        <Typography variant="body 2">
                            We are an agile software company providing both back-end and front-end development.
                      </Typography>
                        {/* <List >

                                <ListItem>
                                    <ListItemIcon>
                                        < FiberManualRecordIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography >
                                            Web Development
                      </Typography>
                                    </ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        < FiberManualRecordIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography >
                                            Web Development
                      </Typography>
                                    </ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        < FiberManualRecordIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography >
                                            Web Development
                      </Typography>
                                    </ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        < FiberManualRecordIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography >
                                            Web Development
                      </Typography>
                                    </ListItemText>
                                </ListItem>


                            </List> */}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={require("../assets/images/mobile.gif")}
                        alt='start'
                        style={{ width: '60%', paddingRight: 30, paddingLeft: -20 }}
                    />
                </Grid>
                {/* </Grid>
                </Grid> */}
            </Grid>

        </div>
    );
}

export default OurServices;