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
    praise: 'Amazing work, I would recommend Philip Philip to everyone. His skills, communication, availability, and quality of work are excellent. Amazing work, I would recommend Philip Philip to everyone. His skills, communication, availability, and quality of work are excellent.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'ANASTESTIA ONYEKABA',
    company:'SaiTech'
  },
  {
    praise: 'Amazing work, I would recommend Philip Philip to everyone. His skills, communication, availability, and quality of work are excellent.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'IVAN POPOV',
    company:'SaiTech'
  },
  {
    praise: 'Amazing work, I would recommend Philip Philip to everyone. His skills, communication, availability, and quality of work are excellent.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'IVAN POPOV',
    company:'SaiTech'
  },
  {
    praise: 'Amazing work, I would recommend Philip Philip to everyone. His skills, communication, availability, and quality of work are excellent.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'IVAN POPOV',
    company:'SaiTech'
  },
  {
    praise: 'Amazing work, I would recommend Philip Philip to everyone. His skills, communication, availability, and quality of work are excellent.',
    imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    name:'IVAN POPOV',
    company:'SaiTech'
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
    background:theme.palette.primary.main,
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
    fontSize: 70,
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
             <Typography style={{textAlign:'center'}} variant='h3'>What our clients are saying</Typography>
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
              {/* <Paper square elevation={0} className={classes.header}> */}
        <Typography>{tutorialSteps[activeStep].praise}</Typography>
      {/* </Paper> */}
          </Grid>
          <Grid item>
          <Typography variant="h6" color="secondary" style={{marginTop:50,marginBottom:10}}>{tutorialSteps[activeStep].name}</Typography>
          </Grid>
          <Grid item>
          <Typography variant="caption">{tutorialSteps[activeStep].company}</Typography>
          </Grid>
          <Grid item>
              <MobileStepper
        // steps={maxSteps}
        position="static"
        // variant="dots"
        // activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        // backButton={
        //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        //     {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        //     Back
        //   </Button>
        // }
      >
          
      </MobileStepper>
          </Grid>
    </Grid> 
      </Paper>
    </div>
  );
}

export default Praises;
