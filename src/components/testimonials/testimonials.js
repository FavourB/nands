import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from "@material-ui/core/Grid";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    praise: 'Amazing work, I would recommend Philip Philip to everyone. His skills, communication, availability, and quality of work are excellent.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'IVAN POPOV',
    company:'SaiTech'
  },
  {
    praise: 'Anastestia is very flexible and a good listener. I appreciate working with her and most probably, I am going to hire her for all of my future projects. Her portfolio may not have many projects but she is experienced enough to bring any project up from the ground.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'AHMED OSMAN',
    company:'evntc'
  },
  {
    praise: 'I needed someone to do a quick, modern and great website and I turned to Zino based on a friends recommendation. The result - a really cool and professional website that gives us all we wany.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'Kolawole OLANIPEKUN',
    company:'TechReyal'
  },
  {
    praise: 'Favour has proven to be highly capable and I am pleased to be working with her. She has met deadlines and is attentive to the project needs',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'SAM WRIGHT',
    company:'Quin.Group'
  },
  {
    praise: 'Anastestia was great at designing my new app. She did all the screens quickly and helpfully. Designs were better than I expected. She has a true eye for design.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'ADMIN',
    company:'Lentrica SoftWare'
  },
  {
    praise: 'Due to my high taste, i found it difficult settling with web developers even when I needed a website urgently. But when I gave it to zino, he blew my mind.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'EMMANUEL EDEGBO',
    company:'DotsResourcing'
  },
  {
    praise: 'Philip is a strong project lead that is well organized and communicates clearly. N&S Tech has proven to be highly capable and I am pleased to be working with them. They have met deadlines and are attentive to the project needs,',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'SAM WRIGHT',
    company:'Quin.Group'
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'none',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  paper1:{
    background:theme.palette.background.default,
    paddingLeft:theme.spacing(10),
    paddingRight:theme.spacing(10),
    paddingTop:theme.spacing(2),
    paddingBottom:theme.spacing(2),
    marginBottom:130,
    [theme.breakpoints.down("xs")]: {
        marginBottom:50,
      },
  },
  icon:{
    transform:'rotate(180deg)',
    color:theme.palette.secondary.light,
    fontSize: 90,
    marginLeft:-20,
  },
  stepper:{
    background:theme.palette.background.default,
  }
}));

function Praises() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom:10}}>
             <Typography style={{textAlign:'center'}} variant='caption'>TESTIMONIALS</Typography>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom:50}}>
             <Typography style={{textAlign:'center'}} variant='h2'>What our clients are saying</Typography>
        </Grid>
     
        <Paper elevation={0} className={classes.paper1}>
        
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Grid containerdirection="row" justify="center" alignItems="center">
          <Grid item>
                <FormatQuoteIcon className={classes.icon}/>
          </Grid>
          <Grid item>
            <Typography>{tutorialSteps[activeStep].praise}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" style={{marginTop:30,marginBottom:-5}}>{tutorialSteps[activeStep].name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" style={{opacity:0.6}}>{tutorialSteps[activeStep].company}</Typography>
          </Grid>
          <Grid item>
              <MobileStepper
              className={classes.stepper}
        position="static"
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }/>  
          </Grid>
    </Grid> 
      </Paper>
    </div>
  );
}

export default Praises;
