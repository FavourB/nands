import { makeStyles, withStyles, TextField } from "@material-ui/core";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//   textfield: {
//     marginTop: 20,
//     "&:focus": {
//       //   borderColor: theme.palette.primary.lighter,
//       outline: theme.palette.primary.lighter,
//     },
//   },
// }));

const CssTextField = withStyles((theme) => ({
  root: {
    marginTop: 20,
    '& label.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}))(TextField);

// const styles = {
//   cssLabel: {
//     '&$cssFocused': {
//       color: theme.palette.primary.lighter,
//     },
//   },
//   cssOutlinedInput: {
//     '&$cssFocused $notchedOutline': {
//       borderColor: theme.palette.primary.lighter,
//     },
//   },
//   cssFocused: {},
//   notchedOutline: {},
// }


function CustomTextfield({
  label,
  name,
  multiline,
  rows,
  error = null,
  value,
  helperText,
  onChange,
  placeholder
}) {
  // const classes = useStyles();
  return (
    <div>
      <CssTextField

        //className={classes.textfield}
        error={error}
        helperText={helperText}
        onChange={onChange}
        value={value}
        autoComplete="false"
        id="outlined-basic"
        //label={label}
        placeholder={placeholder}
        name={name}
        variant="outlined"
        margin="dense"
        fullWidth
        multiline={multiline}
        rows={rows}
      />
    </div>
  );
}

export default CustomTextfield;
