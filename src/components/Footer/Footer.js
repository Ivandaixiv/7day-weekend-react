import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
const Footer = ({ data, classes }) => {
  console.log("Data", data);
  return (
    <div className={classes.footer}>
      <div className={classes.list}>
        {data.map((section) => {
          return <p>{section.header}</p>;
        })}
      </div>
      <p>Social Media</p>
    </div>
  );
};

export default withStyles(styles)(Footer);
