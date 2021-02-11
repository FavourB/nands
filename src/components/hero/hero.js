import React, { Component } from "react";
import { init } from "ityped";
import Typography  from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import {  withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles((theme) => ({
  root: {
    color:'#FFFFFF',
    padding:'8px 15px',
    marginTop:-8,

    // '&:hover': {
    //   backgroundColor: purple[700],
    // },
  },
}))(Button);
export default class Hero extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: true,
      strings: ["Website", "Mobile App", "UX Design", "Video Edit", "Logo"]
    });
  }
  render() {
    return (
        <div style={{marginTop:50,}}>
         
          <Grid container direction="row" justify="center"  alignItems="center">
            <Grid item xs={12} sm={8}>
              <Typography variant='h1' style={{color:'#FFFFFF'}}>
                Need a <span> </span>
                {'<'}
                <span>
                    <Typography variant='span' color='secondary' id="myElement">
                        
                    </Typography>
                </span>
                {'>'} ?
              </Typography>
              <Typography variant='h6' style={{color:'#FFFFFF'}} >
                We are a team of experts committed to bringing your dreams to life. 
              </Typography><br/>
              <StyledButton variant='contained' color='secondary' size='large'> Learn More</StyledButton>
            </Grid>
            <Grid item xs={11} sm={4}>
            <img src= {require("../../assets/images/hero.gif")} alt='light' style={{width:'100%', paddingRight:30, paddingLeft:-20}}/>
            </Grid>
          </Grid>
        
        
    </div>
    )
  }
}
