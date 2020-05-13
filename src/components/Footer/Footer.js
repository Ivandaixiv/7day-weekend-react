import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Twitter from "react-ionicons/lib/LogoTwitter";
import Facebook from "react-ionicons/lib/LogoFacebook";
import Youtube from "react-ionicons/lib/LogoYoutube";
import Instagram from "react-ionicons/lib/LogoInstagram";
const Footer = ({ data, classes }) => {
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
      <div className={classes.copyrightContainer}>
        <div className={classes.logo}>
          <Twitter />
          <Facebook />
          <Youtube />
          <Instagram />
        </div>
        <p className={classes.copyright}>&copy; Shane Carling 2020 </p>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
