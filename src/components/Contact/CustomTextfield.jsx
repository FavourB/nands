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

function CustomTextfield({ label, name, required, multiline, rows }) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        color="secondary"
        className={classes.textfield}
        id="outlined-basic"
        label={label}
        name={name}
        variant="outlined"
        required={required}
        margin="dense"
        fullWidth
        multiline={multiline}
        rows={rows}
      />
    </div>
  );
}

export default CustomTextfield;
