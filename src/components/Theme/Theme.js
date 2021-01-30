import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import useLocalStorage from "../../hooks/useLocalStorage";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  
  palette: {
    type: "light", 
     background:{
      default:"#005792",
    },
    primary:{
      main:'#005792',
    },
    secondary:{
      main:'#F8B630',
    },
  },
});

const themeDark = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  
  palette: {
    type: "dark",
    background:{
      default:"#001625",
    },
    primary:{
      main:'#001625',
    },
    secondary:{
      main:'#FFCD67',
    },
  },
});

const Theme = (props) => {
  const { children, darkMode } = props;
  const defaultTheme = darkMode ? themeDark : theme;
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
