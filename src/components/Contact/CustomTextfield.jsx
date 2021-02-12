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

const CssTextField =  withStyles((theme) => ({
  root: {
    marginTop:20,
    '& label.Mui-focused': {
      color: theme.palette.primary.lighter,
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.primary.lighter,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.lighter,
      },
    },
  },
}))(TextField);
function CustomTextfield({
  label,
  name,
  multiline,
  rows,
  error = null,
  value,
  helperText,
  onChange,
}) {
 // const classes = useStyles();
  return (
    <div>
      <CssTextField
        color="secondary"
        //className={classes.textfield}
        error={error}
        helperText={helperText}
        onChange={onChange}
        value={value}
        autoComplete="false"
        id="outlined-basic"
        label={label}
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
