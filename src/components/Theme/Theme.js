import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import useLocalStorage from "../../hooks/useLocalStorage";


const theme = createMuiTheme();

const Lighttheme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1:{
      fontSize: '2.0rem',
      fontWeight:'500',
      '@media (min-width:600px)': {
      fontSize: '2.0em',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '3.4rem',
      marginBottom:theme.spacing(1),
      },
  },
  
  h3:{
      fontSize: '1.0rem',
      fontWeight:'300',
      '@media (min-width:600px)': {
      fontSize: '1.0rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '2.0rem',
      },
  },
  h6:{
    fontSize: '0.8rem',
      fontWeight:'300',
      '@media (min-width:600px)': {
      fontSize: '0.8em',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '1.0rem',
      marginBottom:theme.spacing(1),
      },
  },
  },
  palette: {
    type: "light", 
    background:{
      default:'#F1F8FE',
      paper:"#005792"},
    primary:{
      main:'#F1F8FE',
    },
    secondary:{
      main:'#F8B630',
      light:'rgba(255, 205, 103, 0.2)'
    },
  },
});

const themeDark = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1:{
      fontSize: '2.0rem',
      fontWeight:'500',
      '@media (min-width:600px)': {
      fontSize: '2.0em',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '3.4rem',
      marginBottom:theme.spacing(1),
      },
  },
  
  h3:{
      fontSize: '1.0rem',
      fontWeight:'300',
      '@media (min-width:600px)': {
      fontSize: '1.0rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '2.0rem',
      },
  },
  h6:{
    fontSize: '0.8rem',
      fontWeight:'300',
      '@media (min-width:600px)': {
      fontSize: '0.8em',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '1.0rem',
      marginBottom:theme.spacing(1),
      },
  },
  },
  
  palette: {
    type: "dark",
    background:{
      default:"#001625",
      paper:"#032338"
    },
    primary:{
      main:'#001625',
    },
    secondary:{
      main:'#FFCD67',
      light:'rgba(231, 168, 39, 0.2)',
    },
  },
});

const Theme = (props) => {
  const { children, darkMode } = props;
  const defaultTheme = darkMode ? themeDark : Lighttheme;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};
