import React from "react";
import { withStyles, List, ListItem } from "@material-ui/core";
import styles from "./styles";
const Medias = ({ classes, data }) => {
  return (
    <div className={classes.container}>
      <List className={classes.list}>
        {data.map((media, index) => {
          return (
            <ListItem className={classes.item} key={index}>
              <img
                src={media.thumbnail}
                alt={media.title}
                className={classes.image}
              />
              <div className={classes.text}>
                <p className={classes.title}>{media.title} </p>
                <p className={classes.description}>{media.description}</p>
                <p className={classes.date}>{media.date} </p>
              </div>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default withStyles(styles)(Medias);
