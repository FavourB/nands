import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link, animateScroll as scroll } from 'react-scroll';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dp from "../../assets/images/Dp.jpg";
import phi from "../../assets/images/phi.jpg";
import favour from "../../assets/images/favour.jpg";
import zino from "../../assets/images/zino.jpg";
import tobyteq from "../../assets/images/tobyteq.jpg";
import ann from "../../assets/images/ann.jpg";
import dennis from "../../assets/images/dennis.png";
import treasure from "../../assets/images/treasure.jpg";
import pea from "../../assets/images/pea.jpg";



const team = [
    {
        name: "Philip N. Philip",
        description: "Backend Developer | DevOps Engineer | ML Engineer",
        img: phi,
    },
    {
        name: "Anastestia O. Onyekaba",
        description: "UX Designer | Frontend Developer",
        img: ann,
    },
    {
        name: "Ewomazino Edegbo",
        description: "Frontend Developer",
        img: zino,
    },
    {
        name: "Favour Bawa",
        description: "Front-end Developer | React js | Vue js",
        img: favour,
    },
    {
        name: "Akinnubi Toby",
        description: "Video Editor",
        img: tobyteq,
    },
    {
        name: "Olapegba Olaifa",
        description: "UX Designer",
        img: pea,
    },

    {
        name: "Dipanshu Singh",
        description: "Front-end Developer | React js | Vue js",
        img: Dp,
    },
    {
        name: "David Denis",
        description: "Front-end Developer | React js | Vue js | Android Developer",
        img: dennis,
    },
    {
        name: "Oladunni Treasure ",
        description: "Graphics designer | Branding | UI Designer",
        img: treasure,
    },
    {
        name: "Daniel Ibeh",
        description: "...",
        img: Dp,
    },
]

const useStyles = makeStyles((theme) => ({
    container: {
        alignContent: "center",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
    },
    carousel: {
        alignContent: 'center',
        maxWidth: 400,
        display: 'flex',
        flexGrow: 1,
        justifyContent: "center",
        margin: "auto",
        width: "80%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
    },
    item:{
        alignContent: "center",
        display: 'flex',
        justifyContent: "center",
        borderRadius: "20px",
        objectFit:'cover',
         //height:"70%",
        // width: '100%',
        [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
    },
    img: {
        borderRadius: "20px",
        display: 'block',
        height:"100%",
    },
    caption: {
        bottom:0,
        left: 0,
        padding: 0,
        right: 0,
        background: 'linear-gradient(270deg, rgba(0,0,0,.3), rgba(0,0,0,0.8) 70.71%)',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        textAlign:"left"
    },
    contact:{
        display:'flex',
        flexDirection: "column",
        margin:"10% 0 10% 20%",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            margin: "0 auto",
            width: "100%",
          },
    },
    text:{
        textAlign:"left",
        marginBottom: "5%",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2%",
            textAlign: "center",
            width: "100%",
          },
    },
    btnContainer: {
       marginTop:-100,
       [theme.breakpoints.down("sm")]: {
           marginTop:-70,
       }
    },
    contactus:{
        margin: "auto auto auto 0",
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        lineHeight: "1.5",
        borderRadius: "0.3rem",
        '&:hover':{
            background:theme.palette.secondary.main,
            color:'#FFF'
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0.35rem 0.5rem",
            fontSize: "0.8rem",
            lineHeight: "1.5",
            borderRadius: "0.2rem",
            margin: "0 auto",
          },
    },
    hireus:{
        margin: "auto auto auto 0",
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        lineHeight: "1.5",
        borderRadius: "0.3rem",
        [theme.breakpoints.down("sm")]: {
            padding: "0.35rem 0.5rem",
            fontSize: "0.8rem",
            lineHeight: "1.5",
            borderRadius: "0.2rem",
            margin: "0 auto",
          },
    },
    border: {
        backgroundColor: "#F8B630",
        height: 3,
        width: 170,
        borderRadius: 3,
        marginBottom: 35,
        marginTop: 10,
        [theme.breakpoints.down("sm")]: {
            width: 100,
        },
      },
    icon:{
        fontSize:30,
        color: theme.palette.primary.lighter,
        [theme.breakpoints.down("sm")]: {
            fontSize:15,
        },
    },
  }));

  const Team = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} justify="center" alignItems="flex-start">
        <Grid item sm={12} md={5} xs={8} justify="center" alignItems="center">
            <Carousel className={classes.carousel} indicators={false} slide={false} fade={true} prevIcon={false} nextIcon={false}>
                {team.map((member) => {
                    return (
                        <Carousel.Item interval={3000} className={classes.item} key={member.name}>
                            <img
                            className={`d-block w-100 ${classes.img}`}
                            src={member.img}
                            alt= {`${member.name}'s pic`}
                            />
                            <Carousel.Caption className={classes.caption}>
                            <Typography variant="h5"  style={{paddingLeft:30, paddingRight:10, paddingTop:10, paddingBottom:0,}}>
                                {member.name}
                            </Typography>
                            <Typography variant="body2" color='secondary' style={{paddingLeft:30, paddingRight:10, paddingTop:0, paddingBottom:10,}}>
                                {member.description}
                            </Typography>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
            <Grid container direction="column" justify="flex-start"  alignContent="center">
                <Grid item sm={12} md={12}>
                    <Typography variant="h1">
                        Meet Our Team
                    </Typography>
                    <div className={classes.border}></div>
                </Grid>
                <Grid item sm={12} md={12}>
                    <Grid container direction="row" justifyContent='space-evenly' alignContent="center">
                        <Grid item sm={1} md={1} xs={1}><VerifiedUserOutlinedIcon className={classes.icon}/></Grid>
                        <Grid item sm={8} md={8} xs={8}><Typography variant='h6'>Professional engineers</Typography></Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent='space-evenly' alignContent="center">
                        <Grid item sm={1} md={1} xs={1}><VerifiedUserOutlinedIcon className={classes.icon}/></Grid>
                        <Grid item sm={8} md={8} xs={8}><Typography variant='h6'>Professional engineers</Typography></Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent='space-evenly' alignContent="center">
                        <Grid item sm={1} md={1} xs={1}><VerifiedUserOutlinedIcon className={classes.icon}/></Grid>
                        <Grid item sm={8} md={8} xs={8}><Typography variant='h6'>Professional engineers</Typography></Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent='space-evenly' alignContent="center">
                        <Grid item sm={1} md={1} xs={1}><VerifiedUserOutlinedIcon className={classes.icon}/></Grid>
                        <Grid item sm={8} md={8} xs={8}><Typography variant='h6'>Professional engineers</Typography></Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent='space-evenly' alignContent="center">
                        <Grid item sm={1} md={1} xs={1}><VerifiedUserOutlinedIcon className={classes.icon}/></Grid>
                        <Grid item sm={8} md={8} xs={8}><Typography variant='h6'>Professional engineers</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} md={12} className={classes.btnContainer}>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={6}>
                            <Button variant="outlined" color='secondary' className={`${classes.contactus} text-nowrap`}><Link to="contactus" spy={true} smooth ={true} offset ={-300} duration={500} >Contact Us</Link></Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant='contained' color='secondary' style={{color:'#fff'}} className={`${classes.hireus} text-nowrap`} target="_blank" href="https://www.upwork.com/o/companies/~01fe351fce0ea3fd23" >Hire Us</Button>
                        </Grid>
                    </Grid>                
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    );
}
  
  export default Team;