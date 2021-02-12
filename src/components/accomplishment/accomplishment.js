import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius:10,
    background:theme.palette.background.default,
    marginBottom:30,
    color: theme.palette.text.secondary,
  },
}));

export default function Accomplishments() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={7}>
            <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item xs={3} sm={3}>
                    <img src= {require("../../assets/images/cup.gif")} alt='light' style={{width:'50%'}}/>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <img src= {require("../../assets/images/jss.svg")} alt='light' style={{width:'100%',}}/>
                </Grid>
                <Grid item xs={3} sm={3}>
                <img src= {require("../../assets/images/upwork.svg")} alt='light' style={{width:'80%', }}/>
                </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
