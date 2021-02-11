import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginTop: 20,
    "&:focus": {
      //   borderColor: theme.palette.primary.lighter,
      outline: theme.palette.primary.lighter,
    },
  },
}));

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
  const classes = useStyles();
  return (
    <div>
      <TextField
        color="secondary"
        className={classes.textfield}
        error={error}
        helperText={helperText}
        onChange={onChange}
        value={value}
        autoComplete="false"
        id="outlined-basic"
        placeholder={label}
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
