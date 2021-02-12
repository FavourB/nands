import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography  from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  paper: {
    background:theme.palette.primary.light,
    borderRadius:10,
    marginBottom:20,
  },

  head:{
    marginTop:10,
    marginBottom:20,
    marginLeft:12,
    fontWeight:600,
    [theme.breakpoints.down("sm")]: {
      marginTop:10,
      marginLeft:12,
      marginBottom:5,
    },
  }
}));

const StyledButton = withStyles((theme) => ({
  root: {
    color:'rgba(104, 225, 253, 0.6)',
    '&:hover':{
      color:'rgba(104, 225, 253, 1)',
    },
  },
}))(IconButton);
const StyledButton1 = withStyles((theme) => ({
  root: {
    color:'rgba(104, 225, 253, 0.6)',
    '&:hover':{
      color:'rgba(104, 225, 253, 1)',
    },
  },
}))(Button);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}> 
          <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item xs={12} sm={4}>
            <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                <Grid item xs={9} sm={9} className="pl-3">
                    <img src= {require("../../assets/images/logowhite.png")} alt='light' style={{width:'15%', marginBottom:20}}/>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <Typography variant='h6' style={{color:'#FFFFFF' , marginLeft:12}} >
                    We are a team of experts committed to bringing your dreams to life. 
                  </Typography>
                </Grid>
               
            </Grid>
           </Grid>
           <Grid item xs={12} sm={4}>
              <Grid container direction="column" justify="flex-start" alignItems="flex-start" >
                 <Grid item xs={12} sm={12}>
                <Typography variant='h6'color='secondary' className={classes.head} >
                    ABOUT US 
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <Typography variant='h6' style={{color:'#FFFFFF', marginLeft:12}} >
                    N&S Tech seeks to provide solutions to high-impact problems with technology;  putting together highly talented teams quickly, to work as part of a remote, high functioning, distributed team.
                  </Typography>
                </Grid>
              </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Grid container direction="column" justify="flex-start" alignItems="flex-start">
              <Grid item xs={12} sm={12}>
                <Typography variant='h6' color='secondary' className={classes.head} >
                    FOLLOW US ON SOCIAL MEDIA 
                  </Typography>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
                  <Grid item xs={2} sm={2}>
                    <StyledButton size="large" href='https://www.instagram.com/nandstech_/' target='blank'><InstagramIcon fontSize="inherit" /></StyledButton>
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <StyledButton size="large" href='https://twitter.com/nandstech_' target='blank'><TwitterIcon fontSize="inherit" /></StyledButton>
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <StyledButton size="large" href='https://www.linkedin.com/company/n-and-s-tech' target='blank'><LinkedInIcon fontSize="inherit" /></StyledButton>
                  </Grid>
                  </Grid>
              </Grid>
              </Grid>
              </Grid>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" style={{marginTop:70, marginBottom:-30}} >
                <Grid item xs={3} md={3} sm={3} >
                    <StyledButton1 size="small"><Link to="home" spy={true} smooth ={true} offset ={-100} duration={500}>HOME</Link></StyledButton1>
                </Grid>
                <Grid item xs={3} sm={3} className="pl-xs-0">
                  <StyledButton1 size="small"><Link to="ourservices" spy={true} smooth ={true} offset ={-100} duration={500}>SERVICES</Link></StyledButton1>
                </Grid>
                
                <Grid item xs={4} sm={3} >
                  <StyledButton1 size="small" className="pl-xs-2"><Link to="contactus" spy={false} smooth ={true} offset ={-100} duration={500}>CONTACT US</Link></StyledButton1>
                </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
