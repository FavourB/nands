import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const team = [
    {
        name: "Philip N. Philip",
        description: "...",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6nyGuBQvTHwuZccxC37gkTrDe4lICW2bJg&usqp=CAU",
    },
    {
        name: "Onyinye A. Onyekaba",
        description: "...",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dCZcDX1Qt0Rd_9fELRZpDS3_iDHBX-taQA&usqp=CAU",
    },
    {
        name: "Favour Bawa",
        description: "...",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo11Zte3fuhQvRiKks2mvf7DhP-aXSeu7PZQ&usqp=CAU",
    },
    {
        name: "Dipanshu Singh",
        description: "...",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&usqp=CAU",
    },
    {
        name: "Daniel Ibeh",
        description: "...",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWX8uoFz1CKLTXtQoeBU2gx92q5hPfwqcD2Q&usqp=CAU",
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
        height:"90%",
        width: '100%',
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
        left: 20,
        padding: 0,
        right: 0,
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
        marginBottom: "20%",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "10%",
            textAlign: "center",
            width: "100%",
          },
    },
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    btn: {
        margin: "auto auto auto 0",
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        lineHeight: "1.5",
        borderRadius: "0.3rem",
        [theme.breakpoints.down("sm")]: {
            padding: "0.35rem 0.5rem",
            fontSize: "1.25rem",
            lineHeight: "1.5",
            borderRadius: "0.2rem",
            margin: "0 auto",
          },
    }
  }));

  const Team = () => {
    const classes = useStyles();

    return (
    <div className={classes.container}>
        <Carousel className={classes.carousel} indicators={false} slide={false} fade={true} prevIcon={false} nextIcon={false}>
            {team.map((member) => {
                return (
                    <Carousel.Item interval={3000} className={classes.item} key={member.name}>
                        <img
                        className={`d-block w-100 ${classes.img}`}
                        src={`${member.img}`}
                        alt= {`${member.name}'s pic`}
                        />
                        <Carousel.Caption className={classes.caption}>
                        <h6>{member.name}</h6>
                        <p>{member.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
        <div className={classes.contact}>
            <h1 className={classes.text}>Meet our team</h1>
            <div className={classes.btnContainer}>
                <Button className={`${classes.btn} text-nowrap`} variant="primary">Contact Us</Button>{' '}
                <Button className={`${classes.btn} text-nowrap`} variant="primary" target="_blank" href="https://www.upwork.com/o/companies/~01fe351fce0ea3fd23" >Hire Us</Button>{' '}
            </div>
        </div>
    </div>
    );
}
  
  export default Team;