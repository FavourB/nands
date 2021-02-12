import React, { Component } from "react";
import { init } from "ityped";
import Typography  from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import {  withStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
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
            <Grid item xs={12} md={7} sm={8}>
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
              <StyledButton variant='contained' color='secondary' size='large'>< Link  to="aboutus" spy={true} smooth ={true} offset ={-100} duration={500}> Learn More </ Link></StyledButton>
            </Grid>
            <Grid item xs={12} md={5} sm={4}>
            <img src= {require("../../assets/images/hero.gif")} alt='light' style={{width:'100%'}}/>
            </Grid>
          </Grid>
        
        
    </div>
    )
  }
}
