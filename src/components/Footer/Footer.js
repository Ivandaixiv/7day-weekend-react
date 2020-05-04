import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
const Footer = ({ data, classes }) => {
  console.log("Data", data);
  return (
    <div className={classes.footer}>
      <div className={classes.list}>
        {data.map((section, index) => {
          return (
            <div key={index}>
              <h2>{section.header.toUpperCase()}</h2>
              {section.content.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          );
        })}
      </div>
      <p>Social Media</p>
    </div>
  );
};

export default withStyles(styles)(Footer);
