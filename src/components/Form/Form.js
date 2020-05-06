import React from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import styles from "./styles";

import Button from "@material-ui/core/Button";

const Form = ({ classes }) => {
  return (
    <div className={classes.formContainer}>
      <form className={classes.form} noValidate autoComplete="off">
        <h2>Be part of the movement</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <TextField id="filled-basic" label="Name " variant="filled" />
        <TextField id="filled-basic" label="E-Mail" variant="filled" />
        <TextField id="filled-basic" label="Phone" variant="filled" />
        <Button variant="outlined" color="primary" className={classes.button}>
          Join
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(Form);
