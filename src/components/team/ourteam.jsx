import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link, animateScroll as scroll } from 'react-scroll';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import Carousel from 'react-bootstrap/Carousel';
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
import festus from "../../assets/images/festus.jpg";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
      name: "Owumi A. Festus",
      description: "Software Engineer | Mobile | Backend",
      img: festus,
  },
]

const useStyles = makeStyles((theme) => ({
  about__grid: {
    marginTop:theme.spacing(7) ,
    marginBottom: 50,
    "@media (max-width: 600px)": {
        display:'flex',
       flexDirection:"column", 
    justify:'center',
    //alignItems:'center',
      marginTop: 30,
    },
  },
  carousel: {
    alignContent: 'center',
    maxWidth: 400,
    display: 'flex',
    flexGrow: 1,
    justifyContent: "center",
    //margin: "auto",
    //width: "80%",
    [theme.breakpoints.down("sm")]: {
        //width: "200%",
        maxWidth:300,
      },
},
contain:{
    [theme.breakpoints.down("sm")]: {
        //width: "200%",
        marginTop:theme.spacing(5)
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
  aboutimage: {
    width: "100%",
    objectFit: "contain",
    "@media (max-width: 600px)": {
      width: "100%",
      marginTop: 40,
    },
  },
  about__header: {
    //fontWeight: 700,
  },
  btnContainer: {
    marginTop:30,
    alignContent: "center",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
        marginTop:30,
        flexDirection: "column",
    }
 },
  contactus:{
    fontSize: "1.25rem",
    lineHeight: "1.5",
    borderRadius: "0.3rem",
    '&:hover':{
        background:theme.palette.secondary.main,
        color:'#FFF'
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        lineHeight: "1.5",
        borderRadius: "0.2rem",
      },
},
hireus:{
    fontSize: "1.25rem",
    lineHeight: "1.5",
    borderRadius: "0.3rem",
    marginLeft:theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        marginLeft:theme.spacing(0),
        fontSize: "0.8rem",
        lineHeight: "1.5",
        borderRadius: "0.2rem",
        marginTop: theme.spacing(2),
      },
},
icon:{
    fontSize:30,
    color: theme.palette.primary.lighter,
    [theme.breakpoints.down("sm")]: {
        fontSize:15,
        marginRight:0,
        paddingRight:0,
    },
},
  border: {
    backgroundColor: "#F8B630",
    height: 3,
    width: 120,
    borderRadius: 3,
    marginBottom: 35,
    marginTop: 10,
    "@media (max-width: 960px)": {
      width: 50,
    },
  },
  about__text: {
    lineHeight: 2,
  },
}));

function OurTeam() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" justify="space-between" alignItems="center" className={classes.about__grid}>
      <Grid item xs={12}  sm={6}>
            <Carousel className={classes.carousel} indicators={false} slide={false} fade={true} prevIcon={false} nextIcon={false}>
                {team.map((member) => {
                    return (
                        <Carousel.Item interval={2000} className={classes.item} key={member.name}>
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
        <Grid item md={6} xs={12}  sm={6} className={classes.contain}>
                <Grid item sm={12} md={12}>
                    <Typography variant="h3">
                        Meet Our Team
                    </Typography>
                    <div className={classes.border}></div>
                </Grid>
                <Grid item sm={12} md={12}>
               
                    <ListItem className='px-0'>
                        <ListItemIcon className={classes.icon}>
                        <VerifiedUserOutlinedIcon />
                        </ListItemIcon>
                        <Typography variant='h6'>Highly skilled Professionals</Typography>
                    </ListItem>
                    <ListItem className='px-0'>
                        <ListItemIcon className={classes.icon}>
                        <VerifiedUserOutlinedIcon />
                        </ListItemIcon>
                        <Typography variant='h6'>Disciplined and Dedicated</Typography>
                    </ListItem>
                    <ListItem className='px-0'>
                        <ListItemIcon className={classes.icon}>
                        <VerifiedUserOutlinedIcon/>
                        </ListItemIcon>
                        <Typography variant='h6'>Diverse </Typography>
                    </ListItem>
                    <ListItem className='px-0'>
                        <ListItemIcon className={classes.icon}>
                        <VerifiedUserOutlinedIcon />
                        </ListItemIcon>
                        <Typography variant='h6'>Visionary, Curious, and Innovative</Typography>
                    </ListItem>
                    <ListItem className='px-0'>
                        <ListItemIcon className={classes.icon}>
                        <VerifiedUserOutlinedIcon/>
                        </ListItemIcon>
                        <Typography variant='h6'>Diligent, and willing to learn</Typography>
                    </ListItem>
                </Grid>
                <Grid item sm={12} md={12} className={classes.btnContainer}>
                    {/* <Grid container direction="column" justify="space-between" alignItems="center"> */}
                        <Grid item xs={12} md={12} sm={4}>
                            <Button variant="outlined" fullWidth size='large' color='secondary' className={`${classes.contactus} text-nowrap`}><Link to="contactus" spy={true} smooth ={true} offset ={-300} duration={500} >Contact Us</Link></Button>
                        </Grid>
                        <Grid item xs={12} md={12} sm={4}>
                            <Button variant='contained' fullWidth size="large" color='secondary' style={{color:'#fff'}} className={`${classes.hireus} text-nowrap`} target="_blank" href="https://www.upwork.com/o/companies/~01fe351fce0ea3fd23" >Hire Us</Button>
                        </Grid>
                    {/* </Grid>                 */}
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default OurTeam;
