import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography  from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    background:theme.palette.primary.light,
    borderRadius:10,
    marginBottom:30,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={3} sm={3}>
                    <img src= {require("../../assets/images/logowhite.png")} alt='light' style={{width:'30%'}}/>
                </Grid>
                <Grid item xs={3} sm={3}>
                   
                </Grid>
                <Grid item xs={3} sm={3}>
               
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item xs={3} sm={3}>
                  <Typography variant='h6' style={{color:'#FFFFFF'}} >
                    We are a team of experts committed to bring your dreams to life. 
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Typography variant='h6' style={{color:'#FFFFFF'}} >
                     We are a team of experts committed to bring your dreams to life. 
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3}>
                </Grid>
                <Grid item xs={3} sm={3}>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={3} sm={3}>
                    <Button style={{color:'#68E1FD'}}>HOME</Button>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Button style={{color:'#68E1FD'}}>OUR SERVICES</Button>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Button style={{color:'#68E1FD'}}>TESTIMONIALS</Button>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Button style={{color:'#68E1FD'}}>CONTACT US</Button>
                </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
