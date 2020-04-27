import React from "react";
import { Button, withStyles } from "@material-ui/core";
import styles from "./styles";
const Home = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.heroContainer}>
        <img
          src="https://via.placeholder.com/1920x600"
          alt="7 Day Weekend Logo"
        />
        <Button>Call to Action Button</Button>
      </div>
      <h2>Our Mission/Goal</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
};

export default withStyles(styles)(Home);
